import { Body, Controller, Delete, Param, Post } from "@nestjs/common";
import { SanPhamService } from "./san_pham.service";
import { CreateSanPhamDTO } from "./dto/SanPham.dto";
@Controller('san-pham')
export class SanPhamController{
    constructor(private sanPhamService: SanPhamService){}
     @Post('/create-san-pham')
     createSanPham(@Body() requestBody : CreateSanPhamDTO){
        return this.sanPhamService.createSanPham(requestBody)
     }
     @Delete('/xoa-san-pham/:id')
     deleteSanPham(@Param('id') id:number){
        return this.sanPhamService.deleteSanPham(id);
     }

}