-- CreateTable
CREATE TABLE "TipoPagamento" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,

    CONSTRAINT "TipoPagamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Despesa" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "parcelas" INTEGER NOT NULL,
    "dataCompora" TIMESTAMP(3) NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "tipoPagamentoId" INTEGER NOT NULL,

    CONSTRAINT "Despesa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Despesa_categoriaId_unique" ON "Despesa"("categoriaId");

-- CreateIndex
CREATE UNIQUE INDEX "Despesa_tipoPagamentoId_unique" ON "Despesa"("tipoPagamentoId");

-- AddForeignKey
ALTER TABLE "Despesa" ADD CONSTRAINT "Despesa_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Despesa" ADD CONSTRAINT "Despesa_tipoPagamentoId_fkey" FOREIGN KEY ("tipoPagamentoId") REFERENCES "TipoPagamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
