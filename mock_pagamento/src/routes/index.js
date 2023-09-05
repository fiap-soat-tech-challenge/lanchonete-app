import { Router } from 'express';
import pagamento from './pagamento/index.js';

var routes = Router();

routes.use('/pagamento', pagamento);

export default routes;
