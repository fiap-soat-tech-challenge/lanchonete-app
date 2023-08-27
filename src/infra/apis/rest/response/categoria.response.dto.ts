import { ApiProperty } from '@nestjs/swagger';

export class CategoriaResponseDto {
  @ApiProperty()
  readonly nome: string;

  public constructor(nome: string) {
    this.nome = nome;
  }
}
