import { PagamentoRepository } from '../../domain/repositories/pagamento.repository';
import { Pagamento } from '../../domain/model/pagamento';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PagamentoEntity } from '../entities/pagamento.entity';
import { Pedido } from '../../domain/model/pedido';
import { PagamentoConverter } from '../shared/pagamento.converter';

export class PagamentoRepositoryImpl implements PagamentoRepository {
  constructor(
    @InjectRepository(PagamentoEntity)
    private readonly pagamentoEntityRepository: Repository<PagamentoEntity>,
  ) {}

  async updateStatus(pagamentoId: number, pagamento: Pagamento): Promise<void> {
    await this.pagamentoEntityRepository.update(
      pagamentoId,
      PagamentoConverter.toEntity(pagamento),
    );
  }

  async getPagamentoByPedido(pedido: Pedido): Promise<Pagamento | null> {
    const pagamentoEntity = await this.pagamentoEntityRepository.findOneBy({
      pedido: { id: pedido.id },
    });
    if (pagamentoEntity === null) return null;
    return PagamentoConverter.toPagamento(pagamentoEntity);
  }

  async getPagamentoById(id: number): Promise<Pagamento | null> {
    const pagamentoEntity = await this.pagamentoEntityRepository.findOneBy({
      id: id,
    });
    if (pagamentoEntity === null) return null;
    return PagamentoConverter.toPagamento(pagamentoEntity);
  }

  async savePagamento(pagamento: Pagamento): Promise<Pagamento> {
    const pagamentoByPedido = await this.getPagamentoByPedido(pagamento.pedido);
    if (pagamentoByPedido) {
      return pagamentoByPedido;
    }

    const pagamentoToInsert = PagamentoConverter.toEntity(pagamento);
    const pagamentoEntity =
      await this.pagamentoEntityRepository.save(pagamentoToInsert);
    return PagamentoConverter.toPagamento(pagamentoEntity);
  }
}
