/*
  Warnings:

  - Changed the type of `nummernumerisk` on the `laws` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "laws" ALTER COLUMN "titel" DROP NOT NULL,
ALTER COLUMN "titelkort" DROP NOT NULL,
ALTER COLUMN "offentlighedskode" DROP NOT NULL,
DROP COLUMN "nummernumerisk",
ADD COLUMN     "nummernumerisk" INTEGER NOT NULL,
ALTER COLUMN "nummerpostfix" DROP NOT NULL,
ALTER COLUMN "resume" DROP NOT NULL,
ALTER COLUMN "afstemningskonklusion" DROP NOT NULL,
ALTER COLUMN "opdateringsdato" DROP NOT NULL,
ALTER COLUMN "statsbudgetsag" DROP NOT NULL,
ALTER COLUMN "periodeid" DROP NOT NULL;
