import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as process from 'process';

dotenv.config({ path: path.resolve(__dirname + './../../../../.env') });

const dataSource: DataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + './../../entities/**/*.entity{.ts,.js}'],
  migrations: [__dirname + './../../../../data/migrations/*{.js,.ts}'],
  schema: process.env.DB_SCHEMA,
  migrationsRun: true,
});

export default dataSource;
