import { Module } from '@nestjs/common';
import { RestModule } from './infra/apis/rest/rest.module';
import { RepositoriesModule } from './infra/repositories/repositories.module';
import { UseCasesProxyModule } from './infra/usecases-proxy/use-cases-proxy.module';
import { ServicesModule } from './infra/services/services.module';

@Module({
  imports: [
    RestModule,
    RepositoriesModule,
    UseCasesProxyModule,
    ServicesModule,
  ],
  providers: [],
})
export class AppModule {}
