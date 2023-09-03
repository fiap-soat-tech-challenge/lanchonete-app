import { ClienteRepository } from '../domain/repositories/cliente.repository';
import { Cliente } from '../domain/model/cliente';

export class ClienteUseCases {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  async getAllClientes(): Promise<Array<Cliente>> {
    return await this.clienteRepository.findAll();
  }

  async getClienteByCpf(cpf: string): Promise<Cliente | null> {
    return await this.clienteRepository.findByCpf(cpf);
  }

  async addCliente(cliente: Cliente): Promise<Cliente> {
    return await this.clienteRepository.insert(cliente);
  }
}
