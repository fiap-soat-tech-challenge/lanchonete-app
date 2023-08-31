import { Categoria } from '../../../../domain/model/categoria';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsCurrency,
  IsEnum,
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Produto } from '../../../../domain/model/produto';

export class ProdutoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @MinLength(3, { message: 'O nome deve ter no mínimo 3 caracteres' })
  @MaxLength(250, { message: 'O nome deve ter no mínimo 250 caracteres' })
  readonly nome: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'A descrição é obrigatório' })
  @MinLength(3, { message: 'A descrição deve ter no mínimo 3 caracteres' })
  @MaxLength(250, { message: 'A descrição deve ter no mínimo 250 caracteres' })
  readonly descricao: string;

  @ApiProperty()
  @IsCurrency(
    {
      symbol: 'R$',
      require_symbol: true,
      allow_space_after_symbol: true,
      symbol_after_digits: false,
      allow_negatives: false,
      parens_for_negatives: false,
      negative_sign_before_digits: false,
      negative_sign_after_digits: false,
      allow_negative_sign_placeholder: false,
      thousands_separator: '.',
      decimal_separator: ',',
      allow_decimal: true,
      require_decimal: true,
      digits_after_decimal: [2],
      allow_space_after_digits: false,
    },
    { message: 'Preço informado é inválido' },
  )
  readonly preco: string;

  @ApiProperty()
  @IsEnum(Categoria, { message: 'A categoria não é válida' })
  readonly categoria: Categoria;

  public toProduto() {
    return new Produto(
      this.nome,
      this.descricao,
      parseFloat(this.preco),
      this.categoria,
    );
  }
}
