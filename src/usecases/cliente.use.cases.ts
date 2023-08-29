import { ClienteRepository } from '../domain/repositories/cliente.repository';
import { Cliente } from '../domain/model/cliente';

export class ClienteUseCases {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  async getAllClientes(): Promise<Array<Cliente>> {
    return await this.clienteRepository.findAll();
  }

  async getClienteByCpf(): Promise<Cliente> {
    return null;
  }

  async addCliente(cliente: Cliente): Promise<void> {
    await this.clienteRepository.insert(cliente);
  }
}
