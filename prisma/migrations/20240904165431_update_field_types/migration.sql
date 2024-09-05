/*
  Warnings:

  - The `lovnummer` column on the `laws` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `typeid` on the `laws` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `kategoriid` on the `laws` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `statusid` on the `laws` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `periodeid` on the `laws` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "laws" DROP COLUMN "typeid",
ADD COLUMN     "typeid" INTEGER NOT NULL,
DROP COLUMN "kategoriid",
ADD COLUMN     "kategoriid" INTEGER NOT NULL,
DROP COLUMN "statusid",
ADD COLUMN     "statusid" INTEGER NOT NULL,
DROP COLUMN "periodeid",
ADD COLUMN     "periodeid" INTEGER NOT NULL,
DROP COLUMN "lovnummer",
ADD COLUMN     "lovnummer" INTEGER;
