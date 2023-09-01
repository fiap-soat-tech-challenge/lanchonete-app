import { Produto } from '../domain/model/produto';
import { ProdutoRepository } from '../domain/repositories/produto.repository';
import { Categoria } from '../domain/model/categoria';

export class ProdutosUseCases {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  async getAllProdutos(): Promise<Array<Produto>> {
    return await this.produtoRepository.findAll();
  }

  async getProdutosByCategoria(categoria: Categoria): Promise<Array<Produto>> {
    return await this.produtoRepository.findByCategoria(categoria);
  }

  async getProdutoById(id: number): Promise<Produto> {
    return await this.produtoRepository.findById(id);
  }

  async addProduto(produto: Produto): Promise<Produto> {
    return await this.produtoRepository.insert(produto);
  }

  async updateProduto(produtoId: number, produto: Produto): Promise<void> {
    const produceCurrent = await this.produtoRepository.findById(produtoId);
    produceCurrent.nome = produto.nome;
    produceCurrent.descricao = produto.descricao;
    produceCurrent.preco = produto.preco;
    produceCurrent.categoria = produto.categoria;
    await this.produtoRepository.update(produtoId, produto);
  }

  async deleteProduto(produtoId: number): Promise<void> {
    return await this.produtoRepository.delete(produtoId);
  }
}
