import { Controller, Get, Req } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { Request } from 'express';

@ApiExcludeController()
@Controller('/')
export class HomeController {
  @Get()
  home(@Req() request: Request): object {
    console.log(
      `${request.protocol}://${request.get('Host')}${request.originalUrl}`,
    );
    return {
      message: 'Bem-vindo a API Lanchonete!',
      docs: `${request.protocol}://${request.get('Host')}${
        request.originalUrl
      }api/docs`,
    };
  }
}
