import { PagamentoEntity } from '../entities/pagamento.entity';
import { Pagamento } from '../../domain/model/pagamento';
import { PedidoConverter } from './pedido.converter';

export class PagamentoConverter {
  public static toPagamento(entity: PagamentoEntity): Pagamento {
    const pedido = PedidoConverter.toPedido(entity.pedido);
    return new Pagamento(entity.id, pedido, entity.status);
  }

  public static toEntity(pagamento: Pagamento): PagamentoEntity {
    const pedidoEntity = PedidoConverter.toEntity(pagamento.pedido);
    return new PagamentoEntity(pedidoEntity, pagamento.status);
  }
}
