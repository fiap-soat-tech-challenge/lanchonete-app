import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentModule } from '../environment/environment.module';
import { EnvironmentService } from '../environment/environment.service';

export const getTypeOrmModuleOptions = (
  envie: EnvironmentService,
): TypeOrmModuleOptions =>
  ({
    type: 'postgres',
    host: envie.getDatabaseHost(),
    port: envie.getDatabasePort(),
    username: envie.getDatabaseUser(),
    password: envie.getDatabasePassword(),
    database: envie.getDatabaseName(),
    entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    synchronize: false,
    schema: process.env.DATABASE_SCHEMA,
    migrationsRun: false,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
    // ssl: {
    //   rejectUnauthorized: false,
    // },
  }) as TypeOrmModuleOptions;

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentModule],
      inject: [EnvironmentService],
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
})
export class TypeOrmConfigModule {}
