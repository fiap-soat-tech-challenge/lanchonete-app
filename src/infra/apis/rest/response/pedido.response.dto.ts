import { ItemPedido } from '../../../../domain/model/item-pedido';
import { Situacao } from '../../../../domain/model/situacao';
import { ApiProperty } from '@nestjs/swagger';
import { Pedido } from '../../../../domain/model/pedido';
import { PedidoClienteResponseDto } from './pedido-cliente.response.dto';

export class PedidoResponseDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly codigoPedido: number;

  @ApiProperty()
  readonly cliente: PedidoClienteResponseDto;

  @ApiProperty()
  readonly itensPedido: Array<ItemPedido>;

  @ApiProperty()
  readonly precoTotal: number;

  @ApiProperty()
  readonly situacao: Situacao;

  @ApiProperty()
  readonly dataHoraCadastro: Date;

  public constructor(pedido: Pedido) {
    this.id = pedido.id;
    this.codigoPedido = pedido.codigoPedido;
    this.cliente = new PedidoClienteResponseDto(pedido.cliente);
    this.itensPedido = pedido.itensPedido;
    this.precoTotal = pedido.precoTotal;
    this.situacao = pedido.situacao;
    this.dataHoraCadastro = pedido.dataHoraCadastro;
  }
}
