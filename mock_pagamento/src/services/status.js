export const mudarStatusDePagamento = async (pagamentoId) => {
  const response = await fetch(
    'http://localhost:3000/api/pagamentos/processar', // TODO: Arrumar URL
    {
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
