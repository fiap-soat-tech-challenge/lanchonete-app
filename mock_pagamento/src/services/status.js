export const mudarStatusDePagamento = async (idPedido) => {
  const response = await fetch(
    'http://localhost:3000/api/pagamento/processar',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idPedido, status: 'APROVADO' }),
    },
  );

  const data = await response.json();

  return data;
};
