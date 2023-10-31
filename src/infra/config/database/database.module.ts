import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentModule } from '../environment/environment.module';
import { EnvironmentService } from '../environment/environment.service';

export const getTypeOrmModuleOptions = (
  envie: EnvironmentService,
): TypeOrmModuleOptions =>
  ({
    type: 'postgres',
    useUTC: false,
    host: envie.getDatabaseHost(),
    port: envie.getDatabasePort(),
    username: envie.getDatabaseUser(),
    password: envie.getDatabasePassword(),
    database: envie.getDatabaseName(),
    schema: envie.getDatabaseSchema(),
    synchronize: envie.getDatabaseSync(),
    entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    migrationsRun: true,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/data/migrations',
    },
    ssl: envie.getUseSslDatabase(),
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
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
