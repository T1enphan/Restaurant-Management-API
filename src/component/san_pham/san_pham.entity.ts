import { Column, Entity, Long, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SanPham{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    ten_san_pham : string;
    @Column()
    slug_san_pham: string;
    @Column()
    tinh_trang : number;
    @Column()   
    so_luong_nhap : number;
    @Column()
    so_luong_ban   : number;
    @Column()
    hinh_anh    : string;
    @Column()
    id_chuyen_muc : number;
    @Column({type : 'longtext'})
    mo_ta_ngan :  string;
    @Column()
    gia_ban :  number;
    @Column({type : 'longtext'})
    mo_ta_chi_tiet : string;
}