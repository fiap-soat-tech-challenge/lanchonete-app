import { StatusPagamento } from '../domain/model/status-pagamento';
import { PagamentoRepository } from '../domain/repositories/pagamento.repository';
import { Pagamento } from '../domain/model/pagamento';
import { Pedido } from '../domain/model/pedido';

export class PaymentUseCases {
  constructor(private readonly pagamentoRepository: PagamentoRepository) {}

  async updateStatus(
    pagamentoId: number,
    status: StatusPagamento,
  ): Promise<void> {
    const pagamento =
      await this.pagamentoRepository.getPagamentoById(pagamentoId);
    if (pagamento.status === StatusPagamento.APROVADO) return;
    pagamento.status = status;
    await this.pagamentoRepository.updateStatus(pagamento.id, pagamento);
  }

  async getPagamento(pedido: Pedido): Promise<Pagamento> {
    return await this.pagamentoRepository.getPagamentoByPedido(pedido);
  }

  async getPagamentoById(id: number): Promise<Pagamento> {
    return await this.pagamentoRepository.getPagamentoById(id);
  }

  async addPagamento(pagamento: Pagamento): Promise<Pagamento> {
    return await this.pagamentoRepository.savePagamento(pagamento);
  }
}
