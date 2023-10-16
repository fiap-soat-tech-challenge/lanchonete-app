import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { Situacao } from '../../../../domain/model/situacao';

export class PedidoStatusDto {
  @ApiProperty()
  @IsEnum(Situacao, { message: 'O status do pedido não é válido' })
  readonly status: Situacao;
}
