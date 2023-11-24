-- CreateTable
CREATE TABLE "Produit" (
    "id" SERIAL NOT NULL,
    "prix" TEXT NOT NULL,
    "isDisponible" BOOLEAN NOT NULL,
    "image" TEXT,

    CONSTRAINT "Produit_pkey" PRIMARY KEY ("id")
);
