import { Cliente } from '../../domain/model/cliente';
import { ItemPedido } from '../../domain/model/item-pedido';
import { Situacao } from '../../domain/model/situacao';
import { Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class PedidoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigoPedido: number;

  @ManyToOne(() => Cliente)
  cliente: Cliente;

  @OneToMany(() => ItemPedido, () => {})
  itensPedido: Array<ItemPedido>;

  @Column()
  precoTotal: number;

  @Column()
  situacao: Situacao;

  @Column()
  dataHoraCadastro: Date;
}