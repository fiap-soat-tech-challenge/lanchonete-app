import { ApiProperty } from '@nestjs/swagger';

export class PagamentoQrcodePresenter {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly qrcode: string;

  @ApiProperty()
  readonly valor: number;

  public constructor(id: number, qrcode: string, valor: number) {
    this.id = id;
    this.qrcode = qrcode;
    this.valor = valor / 100;
  }
}
