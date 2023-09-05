import { DynamicModule, Module } from '@nestjs/common';
import { RepositoriesModule } from '../repositories/repositories.module';
import { ClienteRepositoryImpl } from '../repositories/cliente.repository.impl';
import { UseCaseProxy } from './use-case-proxy';
import { ClienteUseCases } from '../../usecases/cliente.use.cases';
import { ProdutoRepositoryImpl } from '../repositories/produto.repository.impl';
import { ProdutosUseCases } from '../../usecases/produtos.use.cases';
import { PedidoRepositoryImpl } from '../repositories/pedido.repository.impl';
import { PedidoUseCases } from '../../usecases/pedido.use.cases';
import { PagamentoRepositoryImpl } from '../repositories/pagamento.repository.impl';
import { PaymentUseCases } from '../../usecases/payment.use.cases';

@Module({
  imports: [RepositoriesModule],
})
export class UseCasesProxyModule {
  static CLIENTE_USECASES_PROXY = 'clienteUseCasesProxy';
  static PRODUTO_USECASES_PROXY = 'produtoUseCasesProxy';
  static PEDIDO_USECASES_PROXY = 'pedidoUseCasesProxy';
  static PAGAMENTO_USECASES_PROXY = 'pagamentoUseCasesProxy';

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
          inject: [PagamentoRepositoryImpl],
          provide: UseCasesProxyModule.PAGAMENTO_USECASES_PROXY,
          useFactory: (pagamentoRepository: PagamentoRepositoryImpl) =>
            new UseCaseProxy(new PaymentUseCases(pagamentoRepository)),
        },
      ],
      exports: [
        UseCasesProxyModule.CLIENTE_USECASES_PROXY,
        UseCasesProxyModule.PRODUTO_USECASES_PROXY,
        UseCasesProxyModule.PEDIDO_USECASES_PROXY,
        UseCasesProxyModule.PAGAMENTO_USECASES_PROXY,
      ],
    };
  }
}
