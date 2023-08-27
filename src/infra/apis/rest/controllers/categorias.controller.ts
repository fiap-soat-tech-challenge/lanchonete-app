import { Controller, Get } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CategoriaResponseDto } from '../response/categoria.response.dto';
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
    type: CategoriaResponseDto,
  })
  @Get()
  listar(): Array<CategoriaResponseDto> {
    return Object.keys(Categoria).map(
      (categoria) => new CategoriaResponseDto(categoria),
    );
  }
}
