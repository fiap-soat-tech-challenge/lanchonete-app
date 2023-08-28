import { Controller, Get, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PedidoPresenter } from '../presenters/pedido.presenter';
import { ProdutoPresenter } from '../presenters/produto.presenter';
import { Categoria } from '../../../../domain/model/categoria';

@ApiTags('Pedidos')
@ApiResponse({ status: '5XX', description: 'Erro interno do sistema' })
@Controller('/api/pedidos')
export class PedidosController {
  @ApiOperation({
    summary: 'Listagem de pedidos cadastrados',
    description: 'Retorna a lista de pedidos cadastrados no sistema',
  })
  @ApiOkResponse({
    isArray: true,
    type: PedidoPresenter,
  })
  @Get()
  listar(): Array<PedidoPresenter> {
    // TODO: implementar com repositories
    return [];
  }

  @ApiOperation({
    summary: 'Cria um novo pedido',
    description:
      'Faz o cadastro de uma novo pedido e retorna o pedido em caso de sucesso',
  })
  @ApiOkResponse({
    type: PedidoPresenter,
  })
  @ApiBadRequestResponse({
    description: 'Dados inválidos ou incorretos',
  })
  @Post()
  incluir(): PedidoPresenter {
    // TODO: implementar com repositories
    return null;
  }
}
