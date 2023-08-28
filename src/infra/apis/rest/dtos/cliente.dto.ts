import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class ClienteDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O cpf é obrigatório' })
  @Matches(/\d{3}\.\d{3}\.\d{3}-\d{2}/gm, {
    message: 'Formato de CPF inválido. Use o formato 123.456.789-00',
  })
  cpf: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @MinLength(3, { message: 'O nome deve ter no mínimo 3 caracteres' })
  @MaxLength(250, { message: 'O nome deve ter no mínimo 250 caracteres' })
  nome: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O email é obrigatório' })
  @IsEmail({}, { message: 'O e-mail deve ser válido' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O telefone é obrigatório' })
  @Matches(/\([0-9]{2}\)\s[0-9]{4,5}-[0-9]{4}/gm, {
    message: 'Formato de telefone inválido. Use o formato (99) 99999-9999',
  })
  telefone: string;
}
