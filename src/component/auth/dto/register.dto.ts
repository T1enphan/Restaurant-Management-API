import { IsEmail, IsNotEmpty } from "class-validator";

export class RegisterDTO {
    @IsEmail()
    email: string;
    @IsNotEmpty()
    firstName : string;
    @IsNotEmpty()
    lastName : string;
    @IsNotEmpty()
    password: string;
}