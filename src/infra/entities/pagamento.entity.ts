import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { Pedido } from '../../domain/model/pedido';
import { StatusPagamento } from '../../domain/model/status-pagamento';
import { PedidoEntity } from './pedido.entity';

@Entity({ name: 'pagamentos' })
export class PagamentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => PedidoEntity)
  @JoinColumn()
  pedido: PedidoEntity;

  @Column({
    type: 'enum',
    enum: StatusPagamento,
    default: StatusPagamento.PENDENTE,
  })
  status: StatusPagamento;

  constructor(id: number, pedido: PedidoEntity, status: StatusPagamento) {
    this.id = id;
    this.pedido = pedido;
    this.status = status;
  }
}
