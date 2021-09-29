import { Despesa } from "../../entities/Despesa"
import { IDespesaRepository } from "../../repositories/adapters/IDespesaRepository"

export class ListarDespesaService {
  
  constructor(private despesaRepository: IDespesaRepository) {}

  public async executar(): Promise <Despesa[]> {
    return await this.despesaRepository.listarDespesas()
  }
}