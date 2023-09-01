import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class ItemPedidoDto {
  @ApiProperty()
  @IsInt({ message: 'Id do produto incorreto' })
  produtoId: number;

  @ApiProperty()
  @IsInt({ message: 'A quantidade do produto é inválida' })
  quantidade: number;
}
