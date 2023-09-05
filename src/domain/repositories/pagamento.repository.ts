import { Pagamento } from '../model/pagamento';
import { Pedido } from '../model/pedido';

export interface PagamentoRepository {
  getPagamentoByPedido(pedido: Pedido): Promise<Pagamento | null>;
  getPagamentoById(id: number): Promise<Pagamento | null>;
  updateStatus(pagamentoId: number, pagamento: Pagamento): Promise<void>;
}
