import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
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
import { UseCasesProxyModule } from '../../../usecases-proxy/use-cases-proxy.module';
import { UseCaseProxy } from '../../../usecases-proxy/use-case-proxy';
import { ClienteUseCases } from '../../../../usecases/cliente.use.cases';

@ApiTags('Clientes')
@ApiResponse({ status: '5XX', description: 'Erro interno do sistema' })
@Controller('/api/clientes')
export class ClientesController {
  constructor(
    @Inject(UseCasesProxyModule.CLIENTE_USECASES_PROXY)
    private clienteUseCasesUseCaseProxy: UseCaseProxy<ClienteUseCases>,
  ) {}
  @ApiOperation({
    summary: 'Listagem de clientes cadastrados',
    description: 'Retorna a lista de clientes cadastrados no sistema',
  })
  @ApiOkResponse({
    isArray: true,
    type: ClientePresenter,
  })
  @Get()
  async listar(): Promise<Array<ClientePresenter>> {
    const allClientes = await this.clienteUseCasesUseCaseProxy
      .getInstance()
      .getAllClientes();
    return allClientes.map((cliente) => new ClientePresenter(cliente));
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
  async cadastrar(@Body() clienteDto: ClienteDto): Promise<ClientePresenter> {
    // TODO: Arrumar validacao de campos unicos (CPF e email)
    const cliente = await this.clienteUseCasesUseCaseProxy
      .getInstance()
      .addCliente(clienteDto.toCliente());
    return new ClientePresenter(cliente);
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
  async buscarPorCpf(@Param('cpf') cpf: string): Promise<ClientePresenter> {
    const clienteByCpf = await this.clienteUseCasesUseCaseProxy
      .getInstance()
      .getClienteByCpf(cpf);
    return new ClientePresenter(clienteByCpf);
  }
}
