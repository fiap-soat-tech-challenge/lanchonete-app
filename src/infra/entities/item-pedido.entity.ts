import { Produto } from '../../domain/model/produto';
import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export class ItemPedidoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Produto)
  @JoinColumn()
  produto: Produto;

  @Column()
  quantidade: number;

  @Column()
  preco: number;
}
