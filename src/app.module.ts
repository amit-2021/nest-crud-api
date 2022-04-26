import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './module/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { Policy } from './entity/policy.entity';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   username: 'postgres',
    //   password: 'Acmeminds123',
    //   port: 5432,
    //   host: '127.0.0.1',
    //   database: 'demodb',
    //   synchronize: true,
    //   entities: ['dist/**/*.entity{.ts,.js}'],
    // }),
  TypeOrmModule.forRoot(config),
  TypeOrmModule.forFeature([Policy]),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
