import { TipoPagamento } from '../../entities/TipoPagamento'
import { ITipoPagamentoRepository } from '../../repositories/adapters/ITipoPagamentoRepository';

export class ListarTipoPagamentoService {
  
  constructor(private tipoPagamento: ITipoPagamentoRepository){}

  public async executar(): Promise<TipoPagamento[]> {
    return await this.tipoPagamento.listarTiposPagamento()
  }
}