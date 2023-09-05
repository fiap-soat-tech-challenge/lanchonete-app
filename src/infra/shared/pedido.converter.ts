import { PedidoEntity } from '../entities/pedido.entity';
import { Pedido } from '../../domain/model/pedido';
import { ClienteConverter } from './cliente.converter';
import { ItemPedidoConverter } from './item-pedido.converter';

export class PedidoConverter {
  public static toPedido(pedidoEntity: PedidoEntity): Pedido {
    let cliente = null;
    if (pedidoEntity.cliente) {
      cliente = ClienteConverter.toCliente(pedidoEntity.cliente);
    }

    let itensPedidos = null;
    if (pedidoEntity.itensPedido) {
      itensPedidos = ItemPedidoConverter.toItensPedido(
        pedidoEntity.itensPedido,
      );
    }

    return new Pedido(
      pedidoEntity.id,
      pedidoEntity.codigoPedido,
      cliente,
      itensPedidos,
      pedidoEntity.precoTotal,
      pedidoEntity.situacao,
      pedidoEntity.dataHoraCadastro,
    );
  }

  public static toEntity(pedido: Pedido): PedidoEntity {
    const clienteEntity = ClienteConverter.toClienteEntity(pedido.cliente);
    const itensPedidosEntity = ItemPedidoConverter.toItensPedidoEntity(
      pedido.itensPedido,
    );

    return new PedidoEntity(
      pedido.codigoPedido,
      clienteEntity,
      itensPedidosEntity,
      pedido.precoTotal,
    );
  }
}
