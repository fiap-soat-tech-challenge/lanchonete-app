import { Module } from '@nestjs/common';
import { RestModule } from './infra/apis/rest/rest.module';
import { RepositoriesModule } from './infra/repositories/repositories.module';
import { UseCasesProxyModule } from './infra/usecases-proxy/use-cases-proxy.module';

@Module({
  imports: [RestModule, RepositoriesModule, UseCasesProxyModule],
  providers: [],
})
export class AppModule {}
