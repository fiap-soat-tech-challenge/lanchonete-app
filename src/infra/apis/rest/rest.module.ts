import { Module } from '@nestjs/common';
import { HomeController } from './controllers/home.controller';
import { CategoriasController } from './controllers/categorias.controller';
import { ClientesController } from './controllers/clientes.controller';
import { ProdutosController } from './controllers/produtos.controller';
import { PedidosController } from './controllers/pedidos.controller';
import { UseCasesProxyModule } from '../../usecases-proxy/use-cases-proxy.module';
import { UniqueCpfValidation } from './validations/unique.cpf.validation';
import { UniqueEmailValidation } from './validations/unique.email.validation';
import { PagamentosController } from './controllers/pagamentos.controller';
import { PagamentoService } from '../../services/pagamento.service';
import { LoginController } from './controllers/login.controller';

@Module({
  imports: [UseCasesProxyModule.register()],
  providers: [UniqueCpfValidation, UniqueEmailValidation, PagamentoService],
  controllers: [
    HomeController,
    LoginController,
    CategoriasController,
    ClientesController,
    ProdutosController,
    PedidosController,
    PagamentosController,
  ],
})
export class RestModule {}
