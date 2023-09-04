import { DynamicModule, Module } from '@nestjs/common';
import { RepositoriesModule } from '../repositories/repositories.module';
import { ClienteRepositoryImpl } from '../repositories/cliente.repository.impl';
import { UseCaseProxy } from './use-case-proxy';
import { ClienteUseCases } from '../../usecases/cliente.use.cases';
import { ProdutoRepositoryImpl } from '../repositories/produto.repository.impl';
import { ProdutosUseCases } from '../../usecases/produtos.use.cases';
import { PedidoRepositoryImpl } from '../repositories/pedido.repository.impl';
import { ItemPedidoRepositoryImpl } from '../repositories/item-pedido.repository.impl';
import { PedidoUseCases } from '../../usecases/pedido.use.cases';
import { ItemPedidoUseCases } from '../../usecases/item-pedido.use.cases';
import { CheckoutModule } from '../apis/rest/services/checkout/checkout.module';
import { CheckoutService } from '../apis/rest/services/checkout/checkout.service';
import { CheckoutUseCases } from '../../usecases/checkout.use.cases';

@Module({
  imports: [RepositoriesModule, CheckoutModule],
})
export class UseCasesProxyModule {
  static CLIENTE_USECASES_PROXY = 'clienteUseCasesProxy';
  static PRODUTO_USECASES_PROXY = 'produtoUseCasesProxy';
  static PEDIDO_USECASES_PROXY = 'pedidoUseCasesProxy';
  static ITEM_PEDIDO_USECASES_PROXY = 'itemPedidoUseCasesProxy';
  static CHECKOUT_USECASES_PROXY = 'checkoutUseCasesProxy';

  static register(): DynamicModule {
    return {
      module: UseCasesProxyModule,
      providers: [
        {
          inject: [ClienteRepositoryImpl],
          provide: UseCasesProxyModule.CLIENTE_USECASES_PROXY,
          useFactory: (clienteRepository: ClienteRepositoryImpl) =>
            new UseCaseProxy(new ClienteUseCases(clienteRepository)),
        },
        {
          inject: [ProdutoRepositoryImpl],
          provide: UseCasesProxyModule.PRODUTO_USECASES_PROXY,
          useFactory: (produtoRepository: ProdutoRepositoryImpl) =>
            new UseCaseProxy(new ProdutosUseCases(produtoRepository)),
        },
        {
          inject: [PedidoRepositoryImpl],
          provide: UseCasesProxyModule.PEDIDO_USECASES_PROXY,
          useFactory: (pedidoRepository: PedidoRepositoryImpl) =>
            new UseCaseProxy(new PedidoUseCases(pedidoRepository)),
        },
        {
          inject: [ItemPedidoRepositoryImpl],
          provide: UseCasesProxyModule.ITEM_PEDIDO_USECASES_PROXY,
          useFactory: (itemPedidoRepository: ItemPedidoRepositoryImpl) =>
            new UseCaseProxy(new ItemPedidoUseCases(itemPedidoRepository)),
        },
        {
          inject: [CheckoutService],
          provide: UseCasesProxyModule.CHECKOUT_USECASES_PROXY,
          useFactory: (checkoutService: CheckoutService) =>
            new UseCaseProxy(new CheckoutUseCases(checkoutService)),
        },
      ],
      exports: [
        UseCasesProxyModule.CLIENTE_USECASES_PROXY,
        UseCasesProxyModule.PRODUTO_USECASES_PROXY,
        UseCasesProxyModule.PEDIDO_USECASES_PROXY,
        UseCasesProxyModule.ITEM_PEDIDO_USECASES_PROXY,
        UseCasesProxyModule.CHECKOUT_USECASES_PROXY,
      ],
    };
  }
}
