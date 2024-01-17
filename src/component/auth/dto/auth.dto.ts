import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class authLoginDTO {
    @IsNumber()
    id : number;
    @IsEmail()
    email : string;
    @IsNotEmpty()
    password : string;
}