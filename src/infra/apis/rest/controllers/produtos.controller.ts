import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger';
import { CategoriaPresenter } from '../presenters/categoria.presenter';
import { ProdutoPresenter } from '../presenters/produto.presenter';

@ApiTags('Produtos')
@ApiResponse({ status: '5XX', description: 'Erro interno do sistema' })
@Controller('/api/produtos')
export class ProdutosController {
  @ApiOperation({
    summary: 'Lista todos os produtos',
    description:
      'Retorna uma lista de todos os produtos ou uma lista vazia se nenhum produto for encontrado',
  })
  @ApiOkResponse({
    isArray: true,
    type: ProdutoPresenter,
  })
  @Get()
  listar(): Array<CategoriaPresenter> {
    // TODO: implementar com repositories
    return [];
  }

  @ApiOperation({
    summary: 'Busca todos os produtos por categoria',
    description: 'Retorna todos os produtos de uma determinada categoria',
  })
  @ApiOkResponse({
    isArray: true,
    type: ProdutoPresenter,
  })
  @ApiNotFoundResponse({
    description: 'A categoria fornecida não foi encontrada',
  })
  @Get(':categoria')
  buscarPorCategoria(
    @Param('categoria') categoria: string,
  ): Array<ProdutoPresenter> {
    // TODO: implementar com repositories
    console.log(categoria);
    return [];
  }

  @ApiOperation({
    summary: 'Cadastra um novo produto',
    description:
      'Faz o cadastro de uma novo produto e retorna o produto em caso de sucesso',
  })
  @ApiOkResponse({
    type: ProdutoPresenter,
  })
  @ApiBadRequestResponse({
    description: 'Dados inválidos ou incorretos',
  })
  @Post()
  incluir(): ProdutoPresenter {
    // TODO: implementar com repositories
    return null;
  }

  @ApiOperation({
    summary: 'Altera um produto existente',
    description: 'Altera um produto já cadastrado no sistema',
  })
  @ApiOkResponse({
    type: ProdutoPresenter,
  })
  @ApiBadRequestResponse({
    description: 'Dados inválidos ou incorretos',
  })
  @Put()
  alterar(): ProdutoPresenter {
    // TODO: implementar com repositories
    return null;
  }

  @ApiOperation({
    summary: 'Exclui um produto existente',
    description: 'Exclui um produto cadastrado no sistema',
  })
  @ApiOkResponse()
  @ApiNotFoundResponse({
    description: 'O Id do produto fornecido não foi encontrado',
  })
  @Delete()
  excluir(): void {
    // TODO: implementar com repositories
  }
}
