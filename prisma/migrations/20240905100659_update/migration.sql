/*
  Warnings:

  - The `deltundersagid` column on the `laws` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "laws" DROP COLUMN "deltundersagid",
ADD COLUMN     "deltundersagid" INTEGER;
