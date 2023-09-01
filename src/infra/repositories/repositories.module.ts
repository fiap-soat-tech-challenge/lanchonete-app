import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from '../config/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from '../entities/cliente.entity';
import { ClienteRepositoryImpl } from './cliente.repository.impl';
import { ProdutoEntity } from '../entities/produto.entity';
import { ProdutoRepositoryImpl } from './produto.repository.impl';
import { PedidoEntity } from '../entities/pedido.entity';
import { PedidoRepositoryImpl } from './pedido.repository.impl';
import { ItemPedidoEntity } from '../entities/item-pedido.entity';
import { ItemPedidoRepositoryImpl } from './item-pedido.repository.impl';

@Module({
  imports: [
    TypeOrmConfigModule,
    TypeOrmModule.forFeature([
      ClienteEntity,
      ProdutoEntity,
      PedidoEntity,
      ItemPedidoEntity,
    ]),
  ],
  providers: [
    ClienteRepositoryImpl,
    ProdutoRepositoryImpl,
    PedidoRepositoryImpl,
    ItemPedidoRepositoryImpl,
  ],
  exports: [
    ClienteRepositoryImpl,
    ProdutoRepositoryImpl,
    PedidoRepositoryImpl,
    ItemPedidoRepositoryImpl,
  ],
})
export class RepositoriesModule {}
