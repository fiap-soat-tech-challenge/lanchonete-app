import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StatusPagamento } from '../../domain/model/status-pagamento';
import { PedidoEntity } from './pedido.entity';

@Entity({ name: 'pagamentos' })
export class PagamentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => PedidoEntity, { eager: true })
  @JoinColumn()
  pedido: PedidoEntity;

  @Column({
    type: 'enum',
    enum: StatusPagamento,
    default: StatusPagamento.PENDENTE,
  })
  status: StatusPagamento;

  constructor(pedido: PedidoEntity, status: StatusPagamento) {
    this.pedido = pedido;
    this.status = status;
  }
}
