import { Categoria } from ".prisma/client";
import { TipoPagamento } from "./TipoPagamento";

export interface Despesa {
  id?: number
  descricao: string
  categoria: Categoria
  tipoPagamento: TipoPagamento
  valor: number
  parcelas: number
  dataCompora: Date
}