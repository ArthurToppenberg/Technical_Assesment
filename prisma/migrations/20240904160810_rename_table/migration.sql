/*
  Warnings:

  - You are about to drop the `Law` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Law";

-- CreateTable
CREATE TABLE "Laws" (
    "id" SERIAL NOT NULL,
    "typeid" TEXT NOT NULL,
    "kategoriid" TEXT NOT NULL,
    "statusid" TEXT NOT NULL,
    "titel" TEXT NOT NULL,
    "titelkort" TEXT NOT NULL,
    "offentlighedskode" TEXT NOT NULL,
    "nummer" TEXT NOT NULL,
    "nummerprefix" TEXT NOT NULL,
    "nummernumerisk" TEXT NOT NULL,
    "nummerpostfix" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "afstemningskonklusion" TEXT NOT NULL,
    "periodeid" TEXT NOT NULL,
    "afgørelsesresultatkode" TEXT,
    "baggrundsmateriale" TEXT,
    "opdateringsdato" TEXT NOT NULL,
    "statsbudgetsag" TEXT NOT NULL,
    "begrundelse" TEXT,
    "paragrafnummer" TEXT,
    "paragraf" TEXT,
    "afgørelsesdato" TEXT,
    "afgørelse" TEXT,
    "rådsmødedato" TEXT,
    "lovnummer" TEXT,
    "lovnummerdato" TEXT,
    "retsinformationsurl" TEXT,
    "fremsatundersagid" TEXT,
    "deltundersagid" TEXT,

    CONSTRAINT "Laws_pkey" PRIMARY KEY ("id")
);
