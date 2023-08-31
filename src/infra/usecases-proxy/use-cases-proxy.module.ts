import { DynamicModule, Module } from '@nestjs/common';
import { RepositoriesModule } from '../repositories/repositories.module';
import { ClienteRepositoryImpl } from '../repositories/cliente.repository.impl';
import { UseCaseProxy } from './use-case-proxy';
import { ClienteUseCases } from '../../usecases/cliente.use.cases';
import { ProdutoRepositoryImpl } from '../repositories/produto.repository.impl';
import { ProdutosUseCases } from '../../usecases/produtos.use.cases';

@Module({
  imports: [RepositoriesModule],
})
export class UseCasesProxyModule {
  static CLIENTE_USECASES_PROXY = 'clienteUseCasesProxy';
  static PRODUTO_USECASES_PROXY = 'produtoUseCasesProxy';

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
      ],
      exports: [
        UseCasesProxyModule.CLIENTE_USECASES_PROXY,
        UseCasesProxyModule.PRODUTO_USECASES_PROXY,
      ],
    };
  }
}
