import { PedidoRepository } from '../domain/repositories/pedido.repository';
import { Pedido } from '../domain/model/pedido';
import { Situacao } from '../domain/model/situacao';

export class PedidoUseCases {
  constructor(private readonly pedidoRepository: PedidoRepository) {}

  async getAllPedidos(): Promise<Array<Pedido>> {
    return await this.pedidoRepository.findAll();
  }

  async getAllPedidosSorted(): Promise<Array<Pedido>> {
    const allPedidos = await this.getAllPedidos();

    return allPedidos
      .filter((pedido) => {
        return pedido.situacao !== 'FINALIZADO';
      })
      .sort((a, b) => {
        const ordemSituacao = [
          Situacao.PRONTO,
          Situacao.EM_PREPARACAO,
          Situacao.RECEBIDO,
        ];

        return (
          ordemSituacao.indexOf(a.situacao) - ordemSituacao.indexOf(b.situacao)
        );
      });
  }

  async getPedidoById(id: number): Promise<Pedido> {
    return await this.pedidoRepository.findById(id);
  }

  async getNextCodigo(): Promise<number> {
    const lastPedido = await this.pedidoRepository.findLastCodigo();
    if (lastPedido === null) {
      return 1;
    }
    return lastPedido + 1;
  }

  async addPedido(pedido: Pedido): Promise<Pedido> {
    return await this.pedidoRepository.insert(pedido);
  }
}
