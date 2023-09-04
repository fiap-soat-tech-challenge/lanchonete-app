import { Injectable } from '@nestjs/common';
import { CheckoutInterface } from '../../../../../domain/adapters/checkout.interface';
import { Pedido } from '../../../../../domain/model/pedido';

@Injectable()
export class CheckoutService implements CheckoutInterface {
  pagamento(pedido: Pedido): Promise<void> {
    return Promise.resolve(undefined);
  }
}
