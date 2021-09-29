import { Despesa } from "../../entities/Despesa";

export interface IDespesaRepository {
  cadastrar(despesa:Despesa): Promise <Despesa>
  listarCategoria(id: number): Promise <Despesa>
  listarCategorias(): Promise <Despesa[]>
  excluirCategoria(): Promise<void>
}