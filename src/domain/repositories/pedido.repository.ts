import { Pedido } from '../model/pedido';

export interface PedidoRepository {
  findAll(): Promise<Pedido[]>;
  insert(pedido: Pedido): Promise<Pedido>;
}
