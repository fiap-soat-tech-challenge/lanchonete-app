import { ItemPedido } from '../domain/model/item-pedido';
import { ItemPedidoRepository } from '../domain/repositories/item-pedido.repository';

export class ItemPedidoUseCases {
  constructor(private readonly itemPedidoRepository: ItemPedidoRepository) {}

  async getItemPedidoByCpf(): Promise<Array<ItemPedido>> {
    return await this.itemPedidoRepository.findAll();
  }
}
