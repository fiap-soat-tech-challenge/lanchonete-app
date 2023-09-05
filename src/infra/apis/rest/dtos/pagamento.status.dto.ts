import { StatusPagamento } from '../../../../domain/model/status-pagamento';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PagamentoStatusDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O Id do pagamento é obrigatório' })
  @IsNumber({}, { message: 'O Id do pagamento é inválido' })
  readonly pagamentoId: number;

  @ApiProperty()
  @IsEnum(StatusPagamento, { message: 'O status do pagamento não é válido' })
  readonly status: StatusPagamento;
}
