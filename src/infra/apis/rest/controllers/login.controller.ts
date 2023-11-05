import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LoginDto } from '../dtos/login.dto';

@ApiTags('Login')
@ApiResponse({ status: 401, description: 'Não autorizado' })
@Controller('/login')
export class LoginController {
  @ApiOperation({
    summary: 'Fazer a autenticação na API',
    description: 'Retorna um token JWT para utilizar nas demais requisições',
  })
  @ApiOkResponse({
    status: '2XX',
  })
  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login(@Body() loginDto: LoginDto): object {
    return {};
  }
}
