/*
  Warnings:

  - You are about to drop the column `emne` on the `Law` table. All the data in the column will be lost.
  - You are about to drop the column `overskrift` on the `Law` table. All the data in the column will be lost.
  - You are about to drop the column `år` on the `Law` table. All the data in the column will be lost.
  - Added the required column `afstemningskonklusion` to the `Law` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kategoriid` to the `Law` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nummer` to the `Law` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nummernumerisk` to the `Law` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nummerpostfix` to the `Law` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nummerprefix` to the `Law` table without a default value. This is not possible if the table is not empty.
  - Added the required column `offentlighedskode` to the `Law` table without a default value. This is not possible if the table is not empty.
  - Added the required column `opdateringsdato` to the `Law` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periodeid` to the `Law` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resume` to the `Law` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statsbudgetsag` to the `Law` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusid` to the `Law` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titel` to the `Law` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titelkort` to the `Law` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeid` to the `Law` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Law" DROP COLUMN "emne",
DROP COLUMN "overskrift",
DROP COLUMN "år",
ADD COLUMN     "afgørelse" TEXT,
ADD COLUMN     "afgørelsesdato" TEXT,
ADD COLUMN     "afgørelsesresultatkode" TEXT,
ADD COLUMN     "afstemningskonklusion" TEXT NOT NULL,
ADD COLUMN     "baggrundsmateriale" TEXT,
ADD COLUMN     "begrundelse" TEXT,
ADD COLUMN     "deltundersagid" TEXT,
ADD COLUMN     "fremsatundersagid" TEXT,
ADD COLUMN     "kategoriid" TEXT NOT NULL,
ADD COLUMN     "lovnummer" TEXT,
ADD COLUMN     "lovnummerdato" TEXT,
ADD COLUMN     "nummer" TEXT NOT NULL,
ADD COLUMN     "nummernumerisk" TEXT NOT NULL,
ADD COLUMN     "nummerpostfix" TEXT NOT NULL,
ADD COLUMN     "nummerprefix" TEXT NOT NULL,
ADD COLUMN     "offentlighedskode" TEXT NOT NULL,
ADD COLUMN     "opdateringsdato" TEXT NOT NULL,
ADD COLUMN     "paragraf" TEXT,
ADD COLUMN     "paragrafnummer" TEXT,
ADD COLUMN     "periodeid" TEXT NOT NULL,
ADD COLUMN     "resume" TEXT NOT NULL,
ADD COLUMN     "retsinformationsurl" TEXT,
ADD COLUMN     "rådsmødedato" TEXT,
ADD COLUMN     "statsbudgetsag" TEXT NOT NULL,
ADD COLUMN     "statusid" TEXT NOT NULL,
ADD COLUMN     "titel" TEXT NOT NULL,
ADD COLUMN     "titelkort" TEXT NOT NULL,
ADD COLUMN     "typeid" TEXT NOT NULL;
