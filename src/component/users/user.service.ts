import {
  BadRequestException,
  Body,
  Inject,
  Injectable,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { userController } from './user.controller';
import { CreateUserDTO } from './dto/create-user.dto';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
@Injectable()
// đưa userService lên cho DI container quản lý
export class UserService {
  //"Tiêm" cái bảng DB vào trong service
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ) {}
  //CRUD
  create(requestBody: CreateUserDTO) {
    // const {email, password} = requestBody;
    const user = this.userRepository.create(requestBody);
    const Save = this.userRepository.save(user);
    if (!Save) {
      return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
    return new ResponseData(user, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
  }
  findAll() {
    return this.userRepository.find();
  }
  async findById(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
    return new ResponseData(user, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
  }

  async findByEmail(email : string) {
    const user = await this.userRepository.findOneBy({ email });
    return user;
    // if (!user) {
    //   return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR);
    // }
    // return new ResponseData(user, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
  }

  async updateUser(id: number, requestBody: CreateUserDTO) {
    const capNhatUser = await this.userRepository.update(id, requestBody);
    let batID = this.findById(id);
    if (!batID) {
      console.log(batID);
      return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
    return new ResponseData(
      capNhatUser,
      HttpStatus.SUCCESS,
      HttpMessage.SUCCESS
    );
  }
  async deleteByID(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    const delUser = await this.userRepository.remove(user);
    if (!user) {
      return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
    return new ResponseData(delUser, HttpStatus.SUCCESS, HttpMessage.ERROR);
  }
}
