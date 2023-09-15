import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/index.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routes.get('/ping', (request, response) => {
  response.send('pong');
})
app.use('/', routes);

app.listen(port, () => {
  console.log(`Mock Pagamento iniciado na porta ${port}`)
})