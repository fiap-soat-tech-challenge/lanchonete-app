import { Router } from 'express';
import postQRCode from './postQRCode.js';
import getPagamento from './getPagamento.js';


var routes = Router();

routes.post('/qrcode', postQRCode);
routes.get('/:idpagamento', getPagamento);

export default routes;