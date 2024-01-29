import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';
dotenv.config();

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [join(__dirname, '../entities/**/*.entity{.ts,.js}')],
    synchronize: true,
  }),
);
