import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from '../config/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from '../entities/cliente.entity';
import { ClienteRepositoryImpl } from './cliente.repository.impl';
import { ProdutoEntity } from '../entities/produto.entity';
import { ProdutoRepositoryImpl } from './produto.repository.impl';

@Module({
  imports: [
    TypeOrmConfigModule,
    TypeOrmModule.forFeature([ClienteEntity, ProdutoEntity]),
  ],
  providers: [ClienteRepositoryImpl, ProdutoRepositoryImpl],
  exports: [ClienteRepositoryImpl, ProdutoRepositoryImpl],
})
export class RepositoriesModule {}
