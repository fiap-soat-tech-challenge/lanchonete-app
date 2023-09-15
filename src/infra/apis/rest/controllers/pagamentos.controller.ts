import {
  Body,
  Controller,
  Get,
  Inject,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PagamentoStatusDto } from '../dtos/pagamento.status.dto';
import { PagamentoQrcodeDto } from '../dtos/pagamento.qrcode.dto';
import { UseCasesProxyModule } from '../../../usecases-proxy/use-cases-proxy.module';
import { UseCaseProxy } from '../../../usecases-proxy/use-case-proxy';
import { PedidoUseCases } from '../../../../usecases/pedido.use.cases';
import { PagamentoQrcodePresenter } from '../presenters/pagamento.qrcode.presenter';
import { PagamentoStatusPresenter } from '../presenters/pagamento.status.presenter';
import { Pedido } from '../../../../domain/model/pedido';
import { PaymentUseCases } from '../../../../usecases/payment.use.cases';
import { Pagamento } from '../../../../domain/model/pagamento';

@ApiTags('Pagamentos')
@ApiResponse({ status: '5XX', description: 'Erro interno do sistema' })
@Controller('/api/pagamentos')
export class PagamentosController {
  constructor(
    @Inject(UseCasesProxyModule.PEDIDO_USECASES_PROXY)
    private pedidoUseCasesUseCaseProxy: UseCaseProxy<PedidoUseCases>,
    @Inject(UseCasesProxyModule.PAGAMENTO_USECASES_PROXY)
    private paymentUseCasesUseCaseProxy: UseCaseProxy<PaymentUseCases>,
  ) {}
  @ApiOperation({
    summary: 'Gera o QR Code de pagamento',
    description: 'Gera o QR Code de pagamento no gateway de pagamento',
  })
  @ApiOkResponse({
    type: PagamentoQrcodePresenter,
  })
  @ApiBadRequestResponse({
    description: 'Dados inválidos ou incorretos',
  })
  @Post('qrcode')
  async pagar(
    @Body() pagamentoQrcodeDto: PagamentoQrcodeDto,
  ): Promise<PagamentoQrcodePresenter> {
    const pedido = await this.getPedido(pagamentoQrcodeDto.pedidoId);
    const pagamento = await this.paymentUseCasesUseCaseProxy
      .getInstance()
      .addPagamento(new Pagamento(pedido));

    // TODO: Arrumar URL
    const response = await fetch(`http://localhost:3001/pagamento/qrcode`, {
      method: 'POST',
      body: JSON.stringify({
        valor: pedido.precoTotal,
        pagamentoId: pagamento.id,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const { id, qrcode, valor } = await response.json();

    return new PagamentoQrcodePresenter(id, qrcode, valor);
  }

  @ApiOperation({
    summary: 'Processa um status de pagamento',
    description:
      'Processa o status de pagamento e do pedido do serviço externo',
  })
  @ApiOkResponse()
  @ApiBadRequestResponse({
    description: 'Dados inválidos ou incorretos',
  })
  @Put('processar')
  async processar(@Body() pagamentoDto: PagamentoStatusDto): Promise<void> {
    await this.paymentUseCasesUseCaseProxy
      .getInstance()
      .updateStatus(pagamentoDto.pagamentoId, pagamentoDto.status);
  }

  @ApiOperation({
    summary: 'Retorna o status do pagamento do pedido',
    description:
      'Retorna o status do pagamento do pedido pelo código do pedido',
  })
  @ApiOkResponse({
    type: PagamentoStatusPresenter,
  })
  @ApiNotFoundResponse({
    description: 'Id do pedido não existe!',
  })
  @Get('status/:pedidoId')
  async status(
    @Param('pedidoId') pedidoId: number,
  ): Promise<PagamentoStatusPresenter> {
    const pedido = await this.getPedido(pedidoId);
    const pagamento = await this.paymentUseCasesUseCaseProxy
      .getInstance()
      .getPagamento(pedido);
    return new PagamentoStatusPresenter(pagamento);
  }

  private async getPedido(pedidoId: number): Promise<Pedido> {
    const pedido = await this.pedidoUseCasesUseCaseProxy
      .getInstance()
      .getPedidoById(pedidoId);

    if (pedido === null)
      throw new NotFoundException('Id do pedido não existe!');

    return pedido;
  }
}
