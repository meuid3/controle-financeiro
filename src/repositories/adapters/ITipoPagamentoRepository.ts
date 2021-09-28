import { TipoPagamento } from '../../entities/TipoPagamento'

export interface ITipoPagamentoRepository {
  cadastrar(tipoPagamento: TipoPagamento): Promise <TipoPagamento>
  listarTiposPagamento(): Promise <TipoPagamento[]>
  ativarTipoPagamento(): Promise <TipoPagamento>
  inativarTipoPagamento(): Promise <TipoPagamento>
}