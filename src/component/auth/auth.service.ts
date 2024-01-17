import { BadGatewayException, BadRequestException, HttpException, Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../users/user.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { ResponseData } from "src/global/globalClass";
import { HttpMessage,HttpStatus } from "src/global/globalEnum";
import { RegisterDTO } from "./dto/register.dto";
import { authLoginDTO } from "./dto/auth.dto";
@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private userService : UserService){}
        async registerUser(requestBody : RegisterDTO){
            //check email đã tồn tại hay chưa
        const userByEmail = await this.userService.findByEmail(requestBody.email)
        if (userByEmail) {
            throw new BadRequestException('Email already exist!');
        }
        // hash password
        const hashPassword = await bcrypt.hash(requestBody.password, 10);

        requestBody.password = hashPassword;
        // save to database
        const savedUser = await this.userService.create(requestBody);
        // generate jwt token
        const payload = {
            id : savedUser.data,
            email : savedUser.data,
            firstName : savedUser.data,
            lastName : savedUser.data,
            roles : savedUser.data,
        }
        const access_token = await this.jwtService.signAsync(payload);
        // return new ResponseData(access_token, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        return {
            msg :"User has been created!",
            access_token
        }
    }  
    // async login(requestBody: authLoginDTO){
    //     const userByEmail = await this.userService.findByEmail(requestBody.email)
    //     if (!userByEmail) {
    //         throw new BadRequestException('Invalid Credentials!');
    //     }

    //     //check password 
    //     const isMatchPassword = await bcrypt.compare(requestBody.email,requestBody.password);
    //     console.log(123);
    //     if(!isMatchPassword){
    //         throw new BadRequestException('Wrong password, pls try again!');
    //     }
    //     const payload = {
    //         email : userByEmail.email,
    //         password : userByEmail.password,
    //     }
    //     const access_token = await this.jwtService.signAsync(payload);

    //     return {
    //         msg : "Login success!",
    //         access_token
    //     }
    // }
    async login(email, password) {
        const user = await this.userService.findByEmail(email);
        console.log(user);
        if (!user) {
            throw new BadRequestException('Invalid Credentials!');
        }
        const match = await bcrypt.compare(password,user.password);
        console.log(password,user.password);
        if(!match){
            throw new BadRequestException('Wrong password, pls try again!')
        }   
        // if (user?.password !== password) {
        //   throw new UnauthorizedException();
        // }
        const payload = { sub: user.id, username: user.email };
        
        return {
          message : "Login successfully!",
          access_token: await this.jwtService.signAsync(payload),
        };
      }
}