import { Situacao } from '../../../../domain/model/situacao';
import { ApiProperty } from '@nestjs/swagger';
import { Pedido } from '../../../../domain/model/pedido';
import { PedidoClientePresenter } from './pedido-cliente.presenter';
import { ItemPedidoPresenter } from './item-pedido.presenter';

export class PedidoPresenter {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly codigoPedido: number;

  @ApiProperty()
  readonly cliente: PedidoClientePresenter;

  @ApiProperty()
  readonly itensPedido: Array<ItemPedidoPresenter>;

  @ApiProperty()
  readonly precoTotal: number;

  @ApiProperty()
  readonly situacao: Situacao;

  @ApiProperty()
  readonly dataHoraCadastro: Date;

  public constructor(pedido: Pedido) {
    this.id = pedido.id;
    this.codigoPedido = pedido.codigoPedido;
    this.cliente =
      pedido.cliente === null || pedido.cliente === undefined
        ? null
        : new PedidoClientePresenter(pedido.cliente);
    this.itensPedido = pedido.itensPedido.map(
      (item) => new ItemPedidoPresenter(item),
    );
    this.precoTotal = pedido.precoTotal / 100;
    this.situacao = pedido.situacao;
    this.dataHoraCadastro = pedido.dataHoraCadastro;
  }
}
