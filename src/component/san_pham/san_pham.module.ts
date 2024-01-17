import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { SanPhamController } from "./san_pham.controller";
import { sanPhamProvider } from "./san_pham.provider";
import { SanPhamService } from "./san_pham.service";

@Module({
    imports:[DatabaseModule],
    controllers:[SanPhamController],
    providers:[...sanPhamProvider,SanPhamService],
    
})
export class SanPhamModule{}