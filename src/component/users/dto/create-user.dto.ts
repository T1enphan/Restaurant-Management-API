import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
//giống request trong laravel
export class CreateUserDTO {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  // @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g)
  password: string;
}