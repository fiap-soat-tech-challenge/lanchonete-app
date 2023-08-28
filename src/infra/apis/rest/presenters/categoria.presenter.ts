import { ApiProperty } from '@nestjs/swagger';

export class CategoriaPresenter {
  @ApiProperty()
  readonly nome: string;

  public constructor(nome: string) {
    this.nome = nome;
  }
}
