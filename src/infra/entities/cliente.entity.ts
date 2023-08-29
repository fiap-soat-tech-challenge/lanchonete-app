import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clientes' })
export class ClienteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  cpf: string;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  telefone: string;

  @Column()
  dataHoraCadastro: Date;

  public constructor(
    cpf: string,
    nome: string,
    email: string,
    telefone: string,
  ) {
    this.cpf = cpf;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }
}
