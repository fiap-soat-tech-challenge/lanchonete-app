import { ClienteRepository } from '../../domain/repositories/cliente.repository';
import { Cliente } from '../../domain/model/cliente';
import { ClienteEntity } from '../entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';

export class ClienteRepositoryImpl implements ClienteRepository {
  constructor(
    @InjectRepository(ClienteEntity)
    private readonly clienteEntityRepository: Repository<ClienteEntity>,
  ) {}

  async findAll(): Promise<Cliente[]> {
    const clienteEntities = await this.clienteEntityRepository.find();
    return clienteEntities.map((entity) => this.toCliente(entity));
  }

  async findByCpf(cpf: string): Promise<Cliente> {
    const clienteEntity = await this.clienteEntityRepository.findOneBy({
      cpf: Equal(cpf),
    });
    if (clienteEntity) {
      return this.toCliente(clienteEntity);
    }
    throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
  }

  async insert(cliente: Cliente): Promise<void> {
    const clienteEntity = this.toClienteEntity(cliente);
    await this.clienteEntityRepository.insert(clienteEntity);
  }

  private toCliente(clienteEntity: ClienteEntity): Cliente {
    return new Cliente(
      clienteEntity.id,
      clienteEntity.cpf,
      clienteEntity.nome,
      clienteEntity.email,
      clienteEntity.telefone,
      clienteEntity.dataHoraCadastro,
    );
  }

  private toClienteEntity(cliente: Cliente): ClienteEntity {
    return new ClienteEntity(
      cliente.cpf,
      cliente.nome,
      cliente.email,
      cliente.telefone,
    );
  }
}
