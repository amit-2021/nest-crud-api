import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { UserService } from './user.service';
import { Policy } from 'src/entity/policy.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Policy])],
  controllers: [LoginController],
  providers: [UserService],
})
export class UserModule {}
