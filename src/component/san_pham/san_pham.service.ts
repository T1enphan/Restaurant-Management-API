import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { SanPham } from "./san_pham.entity";
import { CreateSanPhamDTO } from "./dto/SanPham.dto";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";

@Injectable()

export class SanPhamService{
    constructor(
        @Inject('SANPHAM_REPOSITORY')
        private sanPhamRespository : Repository<SanPham>
    ){}
    async createSanPham(requestBody: CreateSanPhamDTO){
        const sanpham = this.sanPhamRespository.create(requestBody);
        const save = this.sanPhamRespository.save(sanpham);
        if(!save) {
            return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
        return new ResponseData(sanpham, HttpStatus.SUCCESS,HttpMessage.SUCCESS)
    }

    async findOneByID(id : number){
        const sanPham = await this.sanPhamRespository.findOneBy({id});
        if(!sanPham){
            return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
        return new ResponseData(sanPham, HttpStatus.SUCCESS, HttpMessage.SUCCESS)
    }



    async deleteSanPham(id:number){
        const sanPham = await this.sanPhamRespository.findOneBy({id})
        const delSanPham = await this.sanPhamRespository.remove(sanPham)
        if(!delSanPham){
            return new ResponseData(null, HttpStatus.ERROR,HttpMessage.ERROR)
        }
        return new ResponseData(sanPham, HttpStatus.SUCCESS,HttpMessage.SUCCESS)
    }
}