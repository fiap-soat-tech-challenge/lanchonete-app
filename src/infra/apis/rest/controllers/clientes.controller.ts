import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ClientePresenter } from '../presenters/cliente.presenter';
import { ClienteDto } from '../dtos/cliente.dto';

@ApiTags('Clientes')
@ApiResponse({ status: '5XX', description: 'Erro interno do sistema' })
@Controller('/api/clientes')
export class ClientesController {
  @ApiOperation({
    summary: 'Listagem de clientes cadastrados',
    description: 'Retorna a lista de clientes cadastrados no sistema',
  })
  @ApiOkResponse({
    isArray: true,
    type: ClientePresenter,
  })
  @Get()
  listar(): Array<ClientePresenter> {
    // TODO: implementar com repositories
    return [];
  }

  @ApiOperation({
    summary: 'Cadastro de cliente',
    description:
      'Realiza o cadastro de um novo cliente com os dados fornecidos e retorna o cliente cadastrado',
  })
  @ApiCreatedResponse({
    type: ClientePresenter,
  })
  @ApiBadRequestResponse({
    description: 'Dados inválidos ou incorretos',
  })
  @Post()
  cadastrar(@Body() clienteDto: ClienteDto): ClientePresenter {
    console.log(clienteDto);
    return null;
  }

  @ApiOperation({
    summary: 'Pesquisa um cliente pelo CPF',
    description: 'Retorna um cliente pelo CPF, se for encontrado',
  })
  @ApiCreatedResponse({
    type: ClientePresenter,
  })
  @ApiNotFoundResponse({
    description: 'O CPF do cliente fornecido não foi encontrado',
  })
  @Get(':cpf')
  buscarPorCpf(@Param('cpf') cpf: string) {
    console.log(cpf);
    // TODO: implementar com repositories
    return null;
  }
}
