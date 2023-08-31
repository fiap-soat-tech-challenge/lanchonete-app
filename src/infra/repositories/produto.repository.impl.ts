import { ProdutoRepository } from '../../domain/repositories/produto.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { ProdutoEntity } from '../entities/produto.entity';
import { Produto } from '../../domain/model/produto';
import { Categoria } from '../../domain/model/categoria';
import { HttpException, HttpStatus } from '@nestjs/common';

export class ProdutoRepositoryImpl implements ProdutoRepository {
  constructor(
    @InjectRepository(ProdutoEntity)
    private readonly produtoEntityRepository: Repository<ProdutoEntity>,
  ) {}

  async delete(id: number): Promise<void> {
    await this.produtoEntityRepository.delete(id);
  }

  async findAll(): Promise<Produto[]> {
    const produtoEntities = await this.produtoEntityRepository.find();
    return produtoEntities.map((entity) => this.toProduto(entity));
  }

  async findByCategoria(categoria: Categoria): Promise<Produto[]> {
    const produtosEntityByCategoria = await this.produtoEntityRepository.findBy(
      { categoria: Equal(categoria) },
    );
    return produtosEntityByCategoria.map((entity) => this.toProduto(entity));
  }

  async findById(id: number): Promise<Produto> {
    const produtoEntity = await this.produtoEntityRepository.findOneBy({ id: Equal(id) });
    if (produtoEntity) {
      return this.toProduto(produtoEntity);
    }
    throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
  }

  async insert(produto: Produto): Promise<Produto> {
    const produtoToInsert = this.toProdutoEntity(produto);
    const produtoEntity =
      await this.produtoEntityRepository.save(produtoToInsert);
    return this.toProduto(produtoEntity);
  }

  async update(produtoId: number, produto: Produto): Promise<void> {
    await this.produtoEntityRepository.update(
      produtoId,
      this.toProdutoEntity(produto),
    );
  }

  private toProduto(produtoEntity: ProdutoEntity): Produto {
    return new Produto(
      produtoEntity.id,
      produtoEntity.nome,
      produtoEntity.descricao,
      produtoEntity.preco,
      produtoEntity.dataCadastro,
      produtoEntity.categoria,
    );
  }

  private toProdutoEntity(produto: Produto): ProdutoEntity {
    return new ProdutoEntity(
      produto.nome,
      produto.descricao,
      produto.preco,
      produto.categoria,
    );
  }
}