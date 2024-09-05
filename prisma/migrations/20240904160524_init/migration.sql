-- CreateTable
CREATE TABLE "Law" (
    "id" SERIAL NOT NULL,
    "år" INTEGER NOT NULL,
    "emne" TEXT NOT NULL,
    "overskrift" TEXT NOT NULL,

    CONSTRAINT "Law_pkey" PRIMARY KEY ("id")
);
