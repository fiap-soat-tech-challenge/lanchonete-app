import { ProdutoEntity } from '../entities/produto.entity';
import { Produto } from '../../domain/model/produto';

export class ProdutoConverter {
  public static toProduto(produtoEntity: ProdutoEntity): Produto {
    return new Produto(
      produtoEntity.id,
      produtoEntity.nome,
      produtoEntity.descricao,
      produtoEntity.preco,
      produtoEntity.dataCadastro,
      produtoEntity.categoria,
    );
  }

  public static toProdutoEntity(produto: Produto): ProdutoEntity {
    return new ProdutoEntity(
      produto.nome,
      produto.descricao,
      produto.preco,
      produto.categoria,
    );
  }
}