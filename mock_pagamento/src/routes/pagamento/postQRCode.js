import QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';
import { mudarStatusDePagamento } from '../../services/status';

export default async (request, response) => {
  const valor = request.body.valor;
  const idPedido = request.body.idPedido;

  const qrcodePagamento = {
    id: uuidv4(),
    valor: valor,
  };

  setTimeout(() => {
    mudarStatusDePagamento(idPedido);
  }, 5000);

  response.json({
    qrcode: await QRCode.toDataURL(JSON.stringify(qrcodePagamento)),
    ...qrcodePagamento,
  });
};
