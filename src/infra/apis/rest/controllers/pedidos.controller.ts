import { Body, Controller, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PedidoPresenter } from '../presenters/pedido.presenter';
import { PedidoDto } from '../dtos/pedido.dto';
import { UseCaseProxy } from '../../../usecases-proxy/use-case-proxy';
import { PedidoUseCases } from '../../../../usecases/pedido.use.cases';
import { UseCasesProxyModule } from '../../../usecases-proxy/use-cases-proxy.module';
import { ProdutosUseCases } from '../../../../usecases/produtos.use.cases';
import { Produto } from '../../../../domain/model/produto';
import { ItemPedido } from '../../../../domain/model/item-pedido';
import { Situacao } from '../../../../domain/model/situacao';
import { PedidoStatusDto } from '../dtos/pedido.status.dto';

@ApiTags('Pedidos')
@ApiResponse({ status: '5XX', description: 'Erro interno do sistema' })
@Controller('/api/pedidos')
export class PedidosController {
  constructor(
    @Inject(UseCasesProxyModule.PEDIDO_USECASES_PROXY)
    private pedidoUseCasesUseCaseProxy: UseCaseProxy<PedidoUseCases>,
    @Inject(UseCasesProxyModule.PRODUTO_USECASES_PROXY)
    private produtosUseCasesUseCaseProxy: UseCaseProxy<ProdutosUseCases>,
  ) {}

  @ApiOperation({
    summary: 'Listagem de pedidos cadastrados',
    description: 'Retorna a lista de pedidos cadastrados no sistema',
  })
  @ApiOkResponse({
    isArray: true,
    type: PedidoPresenter,
  })
  @Get()
  async listar(): Promise<Array<PedidoPresenter>> {
    const allPedidosSorted = await this.pedidoUseCasesUseCaseProxy
      .getInstance()
      .getAllPedidosSorted();

    return allPedidosSorted.map((pedido) => new PedidoPresenter(pedido));
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
  async incluir(@Body() pedidoDto: PedidoDto): Promise<PedidoPresenter> {
    const items = await Promise.all(
      pedidoDto.itensPedido.map(async (item) => {
        const produto: Produto = await this.produtosUseCasesUseCaseProxy
          .getInstance()
          .getProdutoById(item.produtoId);
        return new ItemPedido(produto, item.quantidade);
      }),
    );

    const pedido = await this.pedidoUseCasesUseCaseProxy
      .getInstance()
      .addPedido(pedidoDto.clienteCpf, items);

    return new PedidoPresenter(pedido);
  }

  @ApiOperation({
    summary: 'Atualiza status do pedido',
    description: 'Altera o status do pedido produto já cadastrado no sistema',
  })
  @ApiOkResponse()
  @ApiBadRequestResponse({
    description: 'Dados inválidos ou incorretos',
  })
  @Put(':pedidoId')
  async alterar(
    @Param('pedidoId') pedidoId: number,
    @Body() statusDto: PedidoStatusDto,
  ): Promise<void> {
    await this.pedidoUseCasesUseCaseProxy
      .getInstance()
      .updateStatusPedido(pedidoId, statusDto.status);
  }
}
