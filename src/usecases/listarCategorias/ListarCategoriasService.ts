import { Categoria } from ".prisma/client";
import { ICategoriaRepository } from "../../repositories/adapters/ICategoriaRepository";

export class ListarCategoriasService {
  
  constructor(private categoriaRepository: ICategoriaRepository) {}
  
  public async executar(): Promise <Categoria[]> {
    return await this.categoriaRepository.listarCategoria()
  }
}