import { ApiProperty } from '@nestjs/swagger';
import { Cliente } from '../../../../domain/model/cliente';

export class ClienteResponseDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly cpf: string;

  @ApiProperty()
  readonly nome: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly telefone: string;

  @ApiProperty()
  readonly dataHoraCadastro: Date;

  public constructor(cliente: Cliente) {
    this.id = cliente.id;
    this.cpf = cliente.cpf;
    this.nome = cliente.nome;
    this.email = cliente.email;
    this.telefone = cliente.telefone;
    this.dataHoraCadastro = cliente.dataHoraCadastro;
  }
}
