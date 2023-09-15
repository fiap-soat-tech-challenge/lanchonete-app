import { Injectable } from '@nestjs/common';
import { PagamentoQrcodePresenter } from '../apis/rest/presenters/pagamento.qrcode.presenter';
import { Pagamento } from '../../domain/model/pagamento';

@Injectable()
export class PagamentoService {
  async generateCode(pagamento: Pagamento): Promise<PagamentoQrcodePresenter> {
    const response = await fetch(`http://localhost:3001/pagamento/qrcode`, {
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
