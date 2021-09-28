import { TipoPagamento } from "../entities/TipoPagamento";
import { ITipoPagamentoRepository } from "./adapters/ITipoPagamentoRepository";

export class TipoPagamentoRepository implements ITipoPagamentoRepository {
  cadastrar(tipoPagamento: TipoPagamento): Promise<TipoPagamento> {
    throw new Error("Method not implemented.");
  }

  listarTiposPagamento(): Promise<TipoPagamento> {
    throw new Error("Method not implemented.");
  }

  ativarTipoPagamento(): Promise<TipoPagamento> {
    throw new Error("Method not implemented.");
  }
  
  inativarTipoPagamento(): Promise<TipoPagamento> {
    throw new Error("Method not implemented.");
  }
  
}