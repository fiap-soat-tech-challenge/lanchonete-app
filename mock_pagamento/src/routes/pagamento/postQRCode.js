import QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';

export default async (request, response) => {

    const valor = request.body.valor;

    const qrcodePagamento = {
        id:uuidv4(),
        valor: valor
    }
    

    response.json({
        qrcode: await QRCode.toDataURL(JSON.stringify(qrcodePagamento)),
        ...qrcodePagamento
    })
}