import { PedidoRepository } from '../domain/repositories/pedido.repository';
import { Pedido } from '../domain/model/pedido';

export class PedidoUseCases {
  constructor(private readonly pedidoRepository: PedidoRepository) {}

  async getAllPedidos(): Promise<Array<Pedido>> {
    return await this.pedidoRepository.findAll();
  }

  async getNextCodigo(): Promise<number> {
    const lastPedido = await this.pedidoRepository.findLast();
    if (lastPedido === null) {
      return 1;
    }
    return lastPedido.codigoPedido + 1;
  }

  async addPedido(pedido: Pedido): Promise<Pedido> {
    return await this.pedidoRepository.insert(pedido);
  }
}
