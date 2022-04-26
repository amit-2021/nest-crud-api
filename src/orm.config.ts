import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Policy } from "./entity/policy.entity";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    username: 'postgres',
    password: 'Acmeminds123',
    port: 5432,
    host: '127.0.0.1',
    database: 'demodb',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
}
