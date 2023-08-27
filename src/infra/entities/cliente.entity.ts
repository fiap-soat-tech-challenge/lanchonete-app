import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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
}
