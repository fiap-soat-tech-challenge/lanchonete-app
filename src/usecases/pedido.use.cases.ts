import { PedidoRepository } from '../domain/repositories/pedido.repository';
import { Pedido } from '../domain/model/pedido';
import { Situacao } from '../domain/model/situacao';
import { NotFoundException } from '../domain/exceptions/not-found.exception';
import { ItemPedido } from '../domain/model/item-pedido';
import { ClienteRepository } from '../domain/repositories/cliente.repository';
import { Inject } from '@nestjs/common';
import { UseCasesProxyModule } from '../infra/usecases-proxy/use-cases-proxy.module';
import { UseCaseProxy } from '../infra/usecases-proxy/use-case-proxy';
import { ClienteUseCases } from './cliente.use.cases';

export class PedidoUseCases {
  constructor(
    private readonly pedidoRepository: PedidoRepository,
    // private readonly clienteRepository: ClienteRepository,
    private clienteUseCases: ClienteUseCases,
  ) {}

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
    const pedido = await this.pedidoRepository.findById(id);

    if (pedido === null) {
      throw new NotFoundException('Id do pedido não existe!');
    }

    return pedido;
  }

  async getNextCodigo(): Promise<number> {
    const lastPedido = await this.pedidoRepository.findLastCodigo();
    if (lastPedido === null) {
      return 1;
    }
    return lastPedido + 1;
  }

  async addPedido(
    clienteCpf: string,
    items: Array<ItemPedido>,
  ): Promise<Pedido> {
    let cliente = null;
    if (clienteCpf !== '' && clienteCpf !== null && clienteCpf !== undefined) {
      cliente = await this.clienteUseCases.getClienteByCpf(clienteCpf);
    }

    const nextCodigo = await this.getNextCodigo();

    const pedido = new Pedido(nextCodigo, cliente, items);
    return await this.pedidoRepository.insert(pedido);
  }

  async updateStatusPedido(pedidoId: number, situacao: Situacao) {
    const pedido = await this.getPedidoById(pedidoId);
    pedido.situacao = situacao;
    await this.pedidoRepository.update(pedidoId, pedido);
  }
}
