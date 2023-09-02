import { Produto } from '../../domain/model/produto';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PedidoEntity } from './pedido.entity';
import { ProdutoEntity } from './produto.entity';

@Entity({ name: 'item_pedidos' })
export class ItemPedidoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => ProdutoEntity)
  @JoinColumn()
  produto: Produto;

  @Column()
  quantidade: number;

  @Column()
  preco: number;

  @ManyToOne(() => PedidoEntity, (pedido) => pedido.itensPedido)
  pedido: PedidoEntity;

  constructor(produto: Produto, quantidade: number, preco: number) {
    this.produto = produto;
    this.quantidade = quantidade;
    this.preco = preco;
  }
}
