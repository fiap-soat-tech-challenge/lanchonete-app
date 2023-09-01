import { PedidoRepository } from '../../domain/repositories/pedido.repository';
import { Pedido } from '../../domain/model/pedido';

export class PedidoRepositoryImpl implements PedidoRepository {
  async findAll(): Promise<Pedido[]> {
    return Promise.resolve([]);
  }

  async insert(pedido: Pedido): Promise<Pedido> {
    return Promise.resolve(undefined);
  }
}