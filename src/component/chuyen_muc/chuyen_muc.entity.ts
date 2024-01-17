import { Column, Entity, IntegerType, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class ChuyenMuc{
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Column()
    ten_chuyen_muc: string;
    @Column()
    slug_chuyen_muc: string;
    @Column()
    tinh_trang : Number;
}   