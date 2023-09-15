import QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';
import { mudarStatusDePagamento } from '../../services/status.js';

export default async (request, response) => {
  const valor = request.body.valor;
  const pagamentoId = request.body.pagamentoId;

  const qrcodePagamento = {
    id: uuidv4(),
    valor: valor,
    pagamentoId: pagamentoId,
  };

  setTimeout(() => {
    mudarStatusDePagamento(pagamentoId);
  }, 10000);

  response.json({
    qrcode: await QRCode.toDataURL(JSON.stringify(qrcodePagamento)),
    ...qrcodePagamento,
  });
};
