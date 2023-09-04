import { Cliente } from '../model/cliente';

export interface ClienteRepository {
  findAll(): Promise<Cliente[]>;
  findByCpf(cpf: string): Promise<Cliente | null>;
  findByEmail(email: string): Promise<Cliente | null>;
  insert(cliente: Cliente): Promise<Cliente>;
}
