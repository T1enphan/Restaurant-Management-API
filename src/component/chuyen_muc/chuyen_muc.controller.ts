import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
  } from '@nestjs/common';
import { ChuyenMucService } from './chuyen_muc.service';
import { CreateChuyenMucDTO } from './dto/create-chuyenmuc.dto';

@Controller('chuyen-muc')
export class ChuyenMucController {
    constructor(private chuyenmucService : ChuyenMucService){}

    @Post('/create-chuyen-muc')
    createChuyenMuc(@Body() requestBody: CreateChuyenMucDTO){
        return this.chuyenmucService.create(requestBody);
    }
    @Get('/get-data')
    getAllData(){
        return this.chuyenmucService.findAll();
    }
    @Get('/get-data/:id')
    getDataById(@Param('id', ParseIntPipe) id:number){
        return this.chuyenmucService.findByID(id);
    }
    @Post('/update-chuyen-muc')
    UpdateChuyenMuc(@Body() requestBody:any){
        return this.chuyenmucService.updateChuyenMuc(requestBody);
    }
    @Delete('/xoa-chuyen-muc/:id')
    deleteChuyenMuc(@Param('id') id:number){
        return this.chuyenmucService.DeleteChuyenMuc(id);
    }
    // @Delete('/xoa-chuyen-muc/:id')
    // deleteChuyenMuc(@Param('id')id:number){
    //     return this.chuyenmucService.DeleteChuyenMuc(id);
    // }
    // @Get('/yasuo')
    // SayHi(){
    //     return this.chuyenmucService.yasuo();
    // }
    
}
