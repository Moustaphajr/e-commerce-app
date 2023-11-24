/*
  Warnings:

  - Added the required column `libelle` to the `Produit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produit" ADD COLUMN     "libelle" TEXT NOT NULL;
