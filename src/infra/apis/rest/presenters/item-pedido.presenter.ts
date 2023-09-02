import { ItemPedido } from '../../../../domain/model/item-pedido';
import { ProdutoPresenter } from './produto.presenter';

export class ItemPedidoPresenter {
  readonly produto: ProdutoPresenter;
  readonly quantidade: number;
  readonly preco: number;

  constructor(item: ItemPedido) {
    this.produto = new ProdutoPresenter(item.produto);
    this.quantidade = item.quantidade;
    this.preco = item.preco / 100;
  }
}
