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
}
