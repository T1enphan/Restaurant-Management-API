import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { CreateUserDTO} from './dto/create-user.dto';
@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
  // UseInterceptors(ClassSerializerInterceptor) dùng để ẩn dữ liệu mật khẩu khi thêm mới
export class userController {
  constructor(private userService: UserService) {}

  @Post('/create-users')
  createUser(@Body() requestBody: CreateUserDTO) {
    //requestBody = Request , CreateUserDTO giống với file request trong laravel
    return this.userService.create(requestBody);
  }
  @Get('/get-data')
  getAllData() {
    return this.userService.findAll();
  }
  @Get('/get-data/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    // ParseIntPipe convert id từ string sang number có thể ktr bằng log typeof
    return this.userService.findById(id);
  }

  @Put('/cap-nhat/:id')
  CapNhatUser(@Param('id', ParseIntPipe) id: number, @Body() requestBody: any) {
    console.log(requestBody);
    return this.userService.updateUser(id, requestBody);
  }
  @Delete('/xoa/:id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteByID(id);
  }
  
  // @Post()
  // registerUser1(@Body() requestBody: registerUserDTO){
  //   return this.authService.register(requestBody)
  // }
}
