import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import { authLoginDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/register')
  registerUser(@Body() registerDTO: RegisterDTO) {
    return this.authService.registerUser(registerDTO);
  }
  @Post('/login')
  loginUser(@Body() authLoginDTO: Record<string, any>){
     return this.authService.login(authLoginDTO.email, authLoginDTO.password);
  }
  // signIn(@Body() signInDto: Record<string, any>) {
  //   return this.authService.signIn(signInDto.username, signInDto.password);
  // }
}