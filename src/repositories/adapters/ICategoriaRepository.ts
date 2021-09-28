import { Categoria } from ".prisma/client";

export interface ICategoriaRepository {
  cadastrar(categoria: Categoria): Promise<Categoria>
  listarCategoria(): Promise<Categoria[]>
}