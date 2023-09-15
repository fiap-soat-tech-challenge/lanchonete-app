import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, } from 'typeorm';
import { PedidoEntity } from './pedido.entity';
import { ProdutoEntity } from './produto.entity';

@Entity({ name: 'item_pedidos' })
export class ItemPedidoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProdutoEntity, { eager: true })
  produto: ProdutoEntity;

  @Column()
  quantidade: number;

  @Column()
  preco: number;

  @ManyToOne(() => PedidoEntity, (pedido) => pedido.itensPedido)
  pedido: PedidoEntity;

  constructor(produto: ProdutoEntity, quantidade: number, preco: number) {
    this.produto = produto;
    this.quantidade = quantidade;
    this.preco = preco;
  }
}
