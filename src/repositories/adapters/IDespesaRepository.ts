import { Categoria } from "../../entities/Categoria";

export interface IDespesaRepository {
  cadastrar(): Promise <Categoria>
  listarCategoria(): Promise <Categoria>
  listarCategorias(): Promise <Categoria[]>
  excluirCategoria(): Promise<void>
}