import { ClienteRepository } from '../../domain/repositories/cliente.repository';
import { Cliente } from '../../domain/model/cliente';
import { ClienteEntity } from '../entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, InsertResult, Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ClienteConverter } from '../shared/cliente.converter';

export class ClienteRepositoryImpl implements ClienteRepository {
  constructor(
    @InjectRepository(ClienteEntity)
    private readonly clienteEntityRepository: Repository<ClienteEntity>,
  ) {}

  async findAll(): Promise<Cliente[]> {
    const clienteEntities = await this.clienteEntityRepository.find();
    return clienteEntities.map((entity) => ClienteConverter.toCliente(entity));
  }

  async findByCpf(cpf: string): Promise<Cliente | null> {
    const clienteEntity = await this.clienteEntityRepository.findOneBy({
      cpf: Equal(cpf),
    });
    if (clienteEntity === null) return null;
    return ClienteConverter.toCliente(clienteEntity);
  }

  async findByEmail(email: string): Promise<Cliente | null> {
    const clienteEntity = await this.clienteEntityRepository.findOneBy({
      email: Equal(email),
    });
    if (clienteEntity === null) return null;
    return ClienteConverter.toCliente(clienteEntity);
  }

  async insert(cliente: Cliente): Promise<Cliente> {
    const entityToInsert = ClienteConverter.toClienteEntity(cliente);
    const clienteEntity =
      await this.clienteEntityRepository.save(entityToInsert);
    return ClienteConverter.toCliente(clienteEntity);
  }
}
