import { CheckoutInterface } from '../domain/adapters/checkout.interface';
import { Pedido } from '../domain/model/pedido';

export class CheckoutUseCases {
  constructor(private readonly checkoutService: CheckoutInterface) {}

  async makePagamento(pedido: Pedido): Promise<void> {
    // TODO: fase 2
    console.log(pedido);
  }
}
