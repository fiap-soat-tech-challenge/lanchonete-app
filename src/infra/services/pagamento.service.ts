import { Injectable } from '@nestjs/common';
import { PagamentoQrcodePresenter } from '../apis/rest/presenters/pagamento.qrcode.presenter';
import { Pagamento } from '../../domain/model/pagamento';
import * as process from 'process';

@Injectable()
export class PagamentoService {
  async generateCode(pagamento: Pagamento): Promise<PagamentoQrcodePresenter> {
    const response = await fetch(process.env.PAYMENT_URL, {
      method: 'POST',
      body: JSON.stringify({
        valor: pagamento.pedido.precoTotal,
        pagamentoId: pagamento.id,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const { id, qrcode, valor } = await response.json();

    return new PagamentoQrcodePresenter(id, qrcode, valor);
  }
}
