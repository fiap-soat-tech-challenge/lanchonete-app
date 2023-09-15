import * as dotenv from 'dotenv';

dotenv.config();

export const mudarStatusDePagamento = async (pagamentoId) => {
  const response = await fetch(
    `http://${process.env.LACHONETE_HOST}:${process.env.LACHONETE_PORT}/api/pagamentos/processar`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pagamentoId, status: 'APROVADO' }),
    },
  );

  console.log(`[${new Date().toLocaleString('pt-BR')}] Status code ${response.status} - ${response.statusText}`);
  if (response.status !== 200) {
      const data = await response.json();
      console.log(data);
  }
};
