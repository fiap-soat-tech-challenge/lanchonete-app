import { ItemPedido } from '../../domain/model/item-pedido';
import { ItemPedidoEntity } from '../entities/item-pedido.entity';
import { ProdutoConverter } from '../shared/produto.converter';

export class ItemPedidoConverter {
  public static toItemPedido(entity: ItemPedidoEntity): ItemPedido {
    return new ItemPedido(
      entity.id,
      ProdutoConverter.toProduto(entity.produto),
      entity.quantidade,
      entity.preco,
    );
  }

  public static toItensPedido(
    items: Array<ItemPedidoEntity>,
  ): Array<ItemPedido> {
    return items.map((item) => ItemPedidoConverter.toItemPedido(item));
  }

  public static toItemPedidoEntity(item: ItemPedido): ItemPedidoEntity {
    return new ItemPedidoEntity(item.produto, item.quantidade, item.preco);
  }

  public static toItensPedidoEntity(
    items: Array<ItemPedido>,
  ): Array<ItemPedidoEntity> {
    return items.map((item) => ItemPedidoConverter.toItemPedidoEntity(item));
  }
}
