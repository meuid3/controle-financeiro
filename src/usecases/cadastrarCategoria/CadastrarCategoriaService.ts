import { Categoria } from ".prisma/client";
import { ICategoriaRepository } from "../../repositories/adapters/ICategoriaRepository";

export class CadastrarCategoriaService {

  constructor(private categoriaRepository: ICategoriaRepository){}

  public async executar(categoria: Categoria): Promise <Categoria> {
    return await this.categoriaRepository.cadastrar(categoria)
  }
}