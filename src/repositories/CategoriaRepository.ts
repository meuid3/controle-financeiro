import { Categoria, PrismaClient } from ".prisma/client";
import { ICategoriaRepository } from "./adapters/ICategoriaRepository";


export class CategoriaRepository implements ICategoriaRepository {

  private prisma = new PrismaClient()
  
  async cadastrar(categoria: Categoria): Promise<Categoria> {
    const categoriaCadastrada = await this.prisma.categoria.create({
      data: categoria
    })

    return categoriaCadastrada
  }

  async listarCategoria(): Promise<Categoria[]> {
    return await this.prisma.categoria.findMany()
  }
   
}