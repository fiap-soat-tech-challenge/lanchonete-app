import { Test } from '@nestjs/testing';
import { CategoriasController } from '../../../../../src/infra/apis/rest/controllers/categorias.controller';
import { CategoriaPresenter } from '../../../../../src/infra/apis/rest/presenters/categoria.presenter';

describe('CategoriasController', () => {
  let categoriasController: CategoriasController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CategoriasController],
    }).compile();

    categoriasController =
      moduleRef.get<CategoriasController>(CategoriasController);
  });

  describe('listar', () => {
    it('deveria retornar uma lista de CategoriaPresenter', async () => {
      const result: Array<CategoriaPresenter> = [
        new CategoriaPresenter('LANCHE'),
        new CategoriaPresenter('ACOMPANHAMENTO'),
        new CategoriaPresenter('BEBIDA'),
        new CategoriaPresenter('SOBREMESA'),
        // new CategoriaPresenter('COMIDA'), // descomente para falhar teste
      ];

      expect(categoriasController.listar()).toEqual(result);
    });
  });
});
