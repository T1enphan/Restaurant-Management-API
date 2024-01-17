import { DataSource } from "typeorm";
import { SanPham } from "./san_pham.entity";

export const sanPhamProvider = [
    {
        provide : 'SANPHAM_REPOSITORY',
        useFactory : (dataSource: DataSource) => dataSource.getRepository(SanPham),
        inject: ['DATA_SOURCE'],
    },
];