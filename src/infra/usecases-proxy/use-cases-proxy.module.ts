import { DynamicModule, Module } from '@nestjs/common';
import { RepositoriesModule } from '../repositories/repositories.module';
import { ClienteRepositoryImpl } from '../repositories/cliente.repository.impl';
import { UseCaseProxy } from './use-case-proxy';
import { ClienteUseCases } from '../../usecases/cliente.use.cases';

@Module({
  imports: [RepositoriesModule],
})
export class UseCasesProxyModule {
  static CLIENTE_USECASES_PROXY = 'clienteUseCasesProxy';

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
      ],
      exports: [UseCasesProxyModule.CLIENTE_USECASES_PROXY],
    };
  }
}
