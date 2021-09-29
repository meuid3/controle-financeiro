export interface Despesa {
  id?: number
  descricao: string
  valor: number
  parcelas: number
  dataCompra: Date,
  categoriaId: number
  tipoPagamentoId: number
}