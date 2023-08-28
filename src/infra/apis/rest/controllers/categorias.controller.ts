import { Controller, Get } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CategoriaPresenter } from '../presenters/categoria.presenter';
import { Categoria } from '../../../../domain/model/categoria';

@ApiTags('Categorias')
@ApiResponse({ status: '5XX', description: 'Erro interno do sistema' })
@Controller('/api/categorias')
export class CategoriasController {
  @ApiOperation({
    summary: 'Lista todas as categorias',
    description: 'Retorna uma lista de todas as categorias',
  })
  @ApiOkResponse({
    status: '2XX',
    isArray: true,
    type: CategoriaPresenter,
  })
  @Get()
  listar(): Array<CategoriaPresenter> {
    return Object.keys(Categoria).map(
      (categoria) => new CategoriaPresenter(categoria),
    );
  }
}
