import { ItemPedido } from '../model/item-pedido';

export interface ItemPedidoRepository {
  findAll(): Promise<ItemPedido[]>;
}
