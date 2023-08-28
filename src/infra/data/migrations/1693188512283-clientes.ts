import { MigrationInterface, QueryRunner } from 'typeorm';

export class Clientes1693188512283 implements MigrationInterface {
  name = 'Clientes1693188512283';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "clientes" ("id" SERIAL NOT NULL, "cpf" character varying NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "telefone" character varying NOT NULL, "dataHoraCadastro" TIMESTAMP NOT NULL, CONSTRAINT "UQ_fd1214820b9f05720b26a917630" UNIQUE ("cpf"), CONSTRAINT "UQ_3cd5652ab34ca1a0a2c7a255313" UNIQUE ("email"), CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "clientes"`);
  }
}
