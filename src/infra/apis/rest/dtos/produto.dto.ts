import { Categoria } from '../../../../domain/model/categoria';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, MaxLength, Min, MinLength } from 'class-validator';
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
  @Min(0, { message: 'Preço informado é inválido' })
  readonly preco: number;

  @ApiProperty()
  @IsEnum(Categoria, { message: 'A categoria não é válida' })
  readonly categoria: Categoria;

  public toProduto() {
    return new Produto(this.nome, this.descricao, this.preco, this.categoria);
  }
}
