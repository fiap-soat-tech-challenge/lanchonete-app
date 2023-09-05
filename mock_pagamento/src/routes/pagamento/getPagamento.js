export default async (request, response) => {
  response.send({
    id: request.params.id,
    status: 'pagamento confirmado',
    codigo: 200,
  });
};
