import { ClienteEntity } from '../entities/cliente.entity';
import { Cliente } from '../../domain/model/cliente';

export class ClienteConverter {
  public static toCliente(clienteEntity: ClienteEntity): Cliente {
    if (clienteEntity === null || clienteEntity === undefined) return null;
    return new Cliente(
      clienteEntity.id,
      clienteEntity.cpf,
      clienteEntity.nome,
      clienteEntity.email,
      clienteEntity.telefone,
      clienteEntity.dataHoraCadastro,
    );
  }

  public static toClienteEntity(cliente: Cliente): ClienteEntity {
    if (cliente === null) return null;
    const clienteEntity = new ClienteEntity(
      cliente.cpf,
      cliente.nome,
      cliente.email,
      cliente.telefone,
    );
    if (cliente.id && cliente.dataHoraCadastro) {
      clienteEntity.id = cliente.id;
      clienteEntity.dataHoraCadastro = cliente.dataHoraCadastro;
    }
    return clienteEntity;
  }
}
