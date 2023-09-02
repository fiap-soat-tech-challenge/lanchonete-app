import { Pedido } from '../model/pedido';

export interface PedidoRepository {
  findAll(): Promise<Pedido[]>;
  findLastCodigo(): Promise<number | null>;
  insert(pedido: Pedido): Promise<Pedido>;
}
