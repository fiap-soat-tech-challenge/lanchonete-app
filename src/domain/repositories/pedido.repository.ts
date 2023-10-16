import { Pedido } from '../model/pedido';

export interface PedidoRepository {
  findAll(): Promise<Pedido[]>;
  findById(id: number): Promise<Pedido | null>;
  findLastCodigo(): Promise<number | null>;
  insert(pedido: Pedido): Promise<Pedido>;
  update(id: number, pedido: Pedido): Promise<void>;
}
