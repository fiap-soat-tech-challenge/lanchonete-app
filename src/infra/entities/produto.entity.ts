import { Categoria } from '../../domain/model/categoria';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'produtos' })
export class ProdutoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  preco: number;

  @CreateDateColumn()
  dataCadastro: Date;

  @Column({
    type: 'enum',
    enum: Categoria,
  })
  categoria: Categoria;

  constructor(
    nome: string,
    descricao: string,
    preco: number,
    categoria: Categoria,
  ) {
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.categoria = categoria;
  }
}
