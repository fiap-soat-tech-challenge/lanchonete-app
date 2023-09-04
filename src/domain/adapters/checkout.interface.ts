import { Pedido } from '../model/pedido';

export interface CheckoutInterface {
  pagamento(pedido: Pedido): Promise<void>;
}
