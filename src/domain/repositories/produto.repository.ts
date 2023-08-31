import { Produto } from '../model/produto';
import { Categoria } from '../model/categoria';

export interface ProdutoRepository {
  findAll(): Promise<Produto[]>;
  findByCategoria(categoria: Categoria): Promise<Produto[]>;
  findById(id: number): Promise<Produto>;
  insert(produto: Produto): Promise<Produto>;
  update(id: number, produto: Produto): Promise<void>;
  delete(id: number): Promise<void>;
}
