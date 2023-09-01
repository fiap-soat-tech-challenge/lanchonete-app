import { ItemPedidoRepository } from '../../domain/repositories/item-pedido.repository';
import { ItemPedido } from '../../domain/model/item-pedido';

export class ItemPedidoRepositoryImpl implements ItemPedidoRepository {
  findAll(): Promise<ItemPedido[]> {
    return Promise.resolve([]);
  }
}
