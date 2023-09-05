import { ApiProperty } from '@nestjs/swagger';
import { StatusPagamento } from '../../../../domain/model/status-pagamento';
import { Pagamento } from '../../../../domain/model/pagamento';

export class PagamentoStatusPresenter {
  @ApiProperty()
  readonly pedidoId: number;

  @ApiProperty()
  readonly codigoPedido: number;

  @ApiProperty()
  readonly valorTotal: number;

  @ApiProperty()
  readonly status: StatusPagamento;

  constructor(pagamento: Pagamento) {
    this.pedidoId = pagamento.id;
    this.codigoPedido = pagamento.pedido.codigoPedido;
    this.valorTotal = pagamento.pedido.precoTotal;
    this.status = pagamento.status;
  }
}
