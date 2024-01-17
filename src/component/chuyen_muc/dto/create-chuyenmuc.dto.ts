import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateChuyenMucDTO{
    @IsString()
    ten_chuyen_muc: string;
    @IsNotEmpty()
    slug_chuyen_muc: string;
    @IsNotEmpty()
    tinh_trang: number;
}
export class UpdateChuyenMucDTO{
    @IsNumber()
    id: number;
    @IsString()
    ten_chuyen_muc: string;
    @IsNotEmpty()
    slug_chuyen_muc: string;
    @IsNotEmpty()
    tinh_trang: number;
}