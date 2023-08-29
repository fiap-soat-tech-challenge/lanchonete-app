import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from '../config/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from '../entities/cliente.entity';
import { ClienteRepositoryImpl } from './cliente.repository.impl';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([ClienteEntity])],
  providers: [ClienteRepositoryImpl],
  exports: [ClienteRepositoryImpl],
})
export class RepositoriesModule {}
