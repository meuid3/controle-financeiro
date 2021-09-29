import { Despesa } from "../../entities/Despesa";
import { IDespesaRepository } from "../../repositories/adapters/IDespesaRepository";

export class CadastrarDespesaService {
  
  constructor(private despesaRepository: IDespesaRepository) {}

  public async executar(despesa: Despesa): Promise <Despesa> { 
    const dataCompra = new Date(despesa.dataCompra)
    despesa.dataCompra = dataCompra
    const despesaCadastrada = await this.despesaRepository.cadastrar(despesa)

    return despesaCadastrada
  }
}