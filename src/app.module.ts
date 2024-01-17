import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './component/users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChuyenMucModule } from './component/chuyen_muc/chuyen_muc.module';
import { SanPhamModule } from './component/san_pham/san_pham.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './component/auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot(), //Dùng để tạo env
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE_NAME'),
        entities: [],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UserModule, ChuyenMucModule, SanPhamModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
