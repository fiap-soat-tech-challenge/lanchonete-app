import { Module } from '@nestjs/common';
import { HomeController } from './controllers/home.controller';
import { CategoriasController } from './controllers/categorias.controller';
import { ClientesController } from './controllers/clientes.controller';
import { ProdutosController } from './controllers/produtos.controller';
import { PedidosController } from './controllers/pedidos.controller';
import { UseCasesProxyModule } from '../../usecases-proxy/use-cases-proxy.module';

@Module({
  imports: [UseCasesProxyModule.register()],
  controllers: [
    HomeController,
    CategoriasController,
    ClientesController,
    ProdutosController,
    PedidosController,
  ],
})
export class RestModule {}
