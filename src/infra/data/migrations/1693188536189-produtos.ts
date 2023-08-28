import { MigrationInterface, QueryRunner } from 'typeorm';

export class Produtos1693188536189 implements MigrationInterface {
  name = 'Produtos1693188536189';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."produtos_categoria_enum" AS ENUM('Lanche', 'Acompanhando', 'Bebida', 'Sobremesa')`,
    );
    await queryRunner.query(
      `CREATE TABLE "produtos" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "preco" integer NOT NULL, "dataCadastro" TIMESTAMP NOT NULL, "categoria" "public"."produtos_categoria_enum" NOT NULL, CONSTRAINT "PK_a5d976312809192261ed96174f3" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "produtos"`);
    await queryRunner.query(`DROP TYPE "public"."produtos_categoria_enum"`);
  }
}
