import { ArrayNotEmpty, IsOptional, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ItemPedidoDto } from './item-pedido.dto';

export class PedidoDto {
  @ApiProperty()
  @IsOptional()
  @Matches(/\d{3}\.\d{3}\.\d{3}-\d{2}/gm, {
    message: 'Formato de CPF inválido. Use o formato 123.456.789-00',
  })
  clienteCpf: string;

  @ApiProperty({ isArray: true, type: ItemPedidoDto })
  @ArrayNotEmpty({ message: 'Lista de Itens do pedido inválida!' })
  itensPedido: Array<ItemPedidoDto>;
}
