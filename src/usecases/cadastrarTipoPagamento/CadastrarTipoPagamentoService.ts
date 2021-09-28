import { TipoPagamento } from '../../entities/TipoPagamento'
import { ITipoPagamentoRepository } from '../../repositories/adapters/ITipoPagamentoRepository'

export class CadastrarTipoPagamentoService {

  constructor(private tipoPagamentoRepository: ITipoPagamentoRepository) {}

  public async executar(tipoPagamento: TipoPagamento): Promise<TipoPagamento> {
    return await this.tipoPagamentoRepository.cadastrar(tipoPagamento)
  }
}