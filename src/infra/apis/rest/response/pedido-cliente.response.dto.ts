import { Cliente } from '../../../../domain/model/cliente';
import { ApiProperty } from '@nestjs/swagger';

export class PedidoClienteResponseDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly cpf: string;

  @ApiProperty()
  readonly nome: string;

  public constructor(cliente: Cliente) {
    this.id = cliente.id;
    this.cpf = cliente.cpf;
    this.nome = cliente.nome;
  }
}
