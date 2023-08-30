import { MigrationInterface, QueryRunner } from 'typeorm';

export class Pedidos1693356613378 implements MigrationInterface {
  name = 'Pedidos1693356613378';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "pedidos" ("id" SERIAL NOT NULL, "codigoPedido" integer NOT NULL, "precoTotal" integer NOT NULL, "situacao" character varying NOT NULL, "dataHoraCadastro" TIMESTAMP NOT NULL DEFAULT now(), "clienteId" integer, CONSTRAINT "PK_ebb5680ed29a24efdc586846725" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "item_pedidos" ("id" SERIAL NOT NULL, "quantidade" integer NOT NULL, "preco" integer NOT NULL, "produtoId" integer, "pedidoId" integer, CONSTRAINT "REL_dc9af4c453fb66abd4f8ca244f" UNIQUE ("produtoId"), CONSTRAINT "PK_80e1951572eeb61a8f2743f8bd3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "pedidos" ADD CONSTRAINT "FK_485346a40b61bb8ae3a98f5400c" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "item_pedidos" ADD CONSTRAINT "FK_dc9af4c453fb66abd4f8ca244f4" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "item_pedidos" ADD CONSTRAINT "FK_e4f47f8a5d7b2a7647c0601cc9c" FOREIGN KEY ("pedidoId") REFERENCES "pedidos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "item_pedidos" DROP CONSTRAINT "FK_e4f47f8a5d7b2a7647c0601cc9c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "item_pedidos" DROP CONSTRAINT "FK_dc9af4c453fb66abd4f8ca244f4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "pedidos" DROP CONSTRAINT "FK_485346a40b61bb8ae3a98f5400c"`,
    );
    await queryRunner.query(`DROP TABLE "item_pedidos"`);
    await queryRunner.query(`DROP TABLE "pedidos"`);
  }
}
