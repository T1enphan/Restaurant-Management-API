import {
    BadRequestException,
    Body,
    Inject,
    Injectable,
    NotFoundException,
    Param,
    ParseIntPipe,
  } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ChuyenMuc } from './chuyen_muc.entity';
import { CreateChuyenMucDTO, UpdateChuyenMucDTO } from './dto/create-chuyenmuc.dto';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
@Injectable()
export class ChuyenMucService {
    constructor(
        @Inject('CHUYENMUC_REPOSITORY')
        private chuyenmucRespository: Repository<ChuyenMuc>
    ){}
    async create(requestBody: CreateChuyenMucDTO){
        console.log(requestBody);
        const chuyenmuc = this.chuyenmucRespository.create(requestBody);
        const save = this.chuyenmucRespository.save(chuyenmuc);
        if (!save) {
            return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
        return new ResponseData(chuyenmuc, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    }
    findAll(){
        return this.chuyenmucRespository.find();
    }
    async findByID(id : number){
        const chuyenmuc = await this.chuyenmucRespository.findOneBy({id});
        if(!chuyenmuc){
            return new ResponseData(null, HttpStatus.ERROR,HttpMessage.ERROR);
        }
        return new ResponseData(chuyenmuc, HttpStatus.SUCCESS,HttpMessage.SUCCESS);
    }
    async updateChuyenMuc(requestBody: UpdateChuyenMucDTO){
        const capNhatChuyenMuc = await this.chuyenmucRespository.update(requestBody.id, requestBody);
        // let batID = this.findByID(id);
        if(!capNhatChuyenMuc){
            console.log(capNhatChuyenMuc);
            return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
        return new ResponseData(
            capNhatChuyenMuc,
            HttpStatus.SUCCESS,
            HttpMessage.SUCCESS
        );
    }
    async DeleteChuyenMuc(id:number){
        const chuyenMuc = await this.chuyenmucRespository.findOneBy({id});
        const delChuyenMuc = await this.chuyenmucRespository.remove(chuyenMuc);
        if(!delChuyenMuc){
            return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
        return new ResponseData(chuyenMuc, HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    }
    // yasuo(){
    //     const x = "Test"
    //     return x;
    // }
}