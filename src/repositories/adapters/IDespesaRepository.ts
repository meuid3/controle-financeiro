import { Despesa } from "../../entities/Despesa";

export interface IDespesaRepository {
  cadastrar(despesa:Despesa): Promise <Despesa>
  listarDespesa(id: number): Promise <Despesa>
  listarDespesas(): Promise <Despesa[]>
  excluirDespesa(): Promise<void>
}