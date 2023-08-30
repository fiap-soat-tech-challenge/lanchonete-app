import { Cliente } from '../model/cliente';

export interface ClienteRepository {
  findAll(): Promise<Cliente[]>;
  findByCpf(cpf: string): Promise<Cliente>;
  insert(cliente: Cliente): Promise<Cliente>;
}
