import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { ChuyenMucController } from "./chuyen_muc.controller";
import { chuyenmucProviders } from "./chuyen_muc.provider";
import { ChuyenMucService } from "./chuyen_muc.service";

@Module({
    imports:[DatabaseModule],
    controllers:[ChuyenMucController],
    providers:[...chuyenmucProviders,ChuyenMucService],
})
export class ChuyenMucModule {}
