import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { userController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './user.provider';
import { LoggerMiddleware } from 'src/middlewares/logging.middlewares';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [DatabaseModule],
  controllers: [userController],
  providers: [...userProviders, UserService],
  exports: [UserService]
})
export class UserModule {}
