import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PagamentoQrcodeDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O Id do pedido é obrigatório' })
  @IsNumber({}, { message: 'O Id do pedido é inválido' })
  readonly pedidoId: number;
}
