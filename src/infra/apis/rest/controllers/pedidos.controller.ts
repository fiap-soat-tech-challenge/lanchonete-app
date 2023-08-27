import { Controller, Get, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PedidoResponseDto } from '../response/pedido.response.dto';
import { ProdutoResponseDto } from '../response/produto.response.dto';
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
    type: PedidoResponseDto,
  })
  @Get()
  listar(): Array<PedidoResponseDto> {
    // TODO: implementar com repositories
    return [];
  }

  @ApiOperation({
    summary: 'Cria um novo pedido',
    description:
      'Faz o cadastro de uma novo pedido e retorna o pedido em caso de sucesso',
  })
  @ApiOkResponse({
    type: PedidoResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Dados inválidos ou incorretos',
  })
  @Post()
  incluir(): PedidoResponseDto {
    // TODO: implementar com repositories
    return null;
  }
}
