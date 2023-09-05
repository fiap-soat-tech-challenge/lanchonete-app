import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1693879992691 implements MigrationInterface {
  name = 'Migrations1693879992691';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."pagamentos_status_enum" AS ENUM('PENDENTE', 'APROVADO', 'REPROVADO')`,
    );
    await queryRunner.query(
      `CREATE TABLE "pagamentos" ("id" SERIAL NOT NULL, "status" "public"."pagamentos_status_enum" NOT NULL DEFAULT 'PENDENTE', "pedidoId" integer, CONSTRAINT "REL_e8c4f5ace7785fbee73279c10d" UNIQUE ("pedidoId"), CONSTRAINT "PK_0127f8bc8386b0e522c7cc5a9fc" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "pagamentos" ADD CONSTRAINT "FK_e8c4f5ace7785fbee73279c10d4" FOREIGN KEY ("pedidoId") REFERENCES "pedidos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "pagamentos" DROP CONSTRAINT "FK_e8c4f5ace7785fbee73279c10d4"`,
    );
    await queryRunner.query(`DROP TABLE "pagamentos"`);
    await queryRunner.query(`DROP TYPE "public"."pagamentos_status_enum"`);
    await queryRunner.query(
      `ALTER TABLE "pedidos" ADD CONSTRAINT "FK_485346a40b61bb8ae3a98f5400c" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
