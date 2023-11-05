import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  readonly cpf: string;
}
