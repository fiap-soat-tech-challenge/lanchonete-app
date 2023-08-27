import { Categoria } from '../../domain/model/categoria';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class ProdutoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  preco: number;

  @Column()
  dataCadastro: Date;

  @Column({
    type: 'enum',
    enum: Categoria,
  })
  categoria: Categoria;
}
