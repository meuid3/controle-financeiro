import { Categoria } from "../../entities/Categoria";
import { Despesa } from "../../entities/Despesa";

export interface IDespesaRepository {
  cadastrar(): Promise <Despesa>
  listarCategoria(): Promise <Despesa>
  listarCategorias(): Promise <Despesa[]>
  excluirCategoria(): Promise<void>
}