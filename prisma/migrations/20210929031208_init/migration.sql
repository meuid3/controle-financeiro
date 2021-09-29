/*
  Warnings:

  - You are about to drop the column `dataCompora` on the `Despesa` table. All the data in the column will be lost.
  - Added the required column `dataCompra` to the `Despesa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Despesa" DROP COLUMN "dataCompora",
ADD COLUMN     "dataCompra" TIMESTAMP(3) NOT NULL;
