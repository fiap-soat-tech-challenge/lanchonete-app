import { Situacao } from '../../domain/model/situacao';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ItemPedidoEntity } from './item-pedido.entity';
import { ClienteEntity } from './cliente.entity';

@Entity({ name: 'pedidos' })
export class PedidoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigoPedido: number;

  @ManyToOne(() => ClienteEntity)
  cliente: ClienteEntity;

  @OneToMany(() => ItemPedidoEntity, (item) => item.pedido)
  itensPedido: Array<ItemPedidoEntity>;

  @Column()
  precoTotal: number;

  @Column()
  situacao: Situacao;

  @Column()
  dataHoraCadastro: Date;
}