import { Usuario } from "../entities/Usuario"
import { PrismaClient } from '@prisma/client'
import { IUsuarioRepository } from "./adapters/IUsuarioRepository"

export class UsuarioRepository implements IUsuarioRepository {
  
  private prisma = new PrismaClient()

  async cadastrar(usuario: Usuario):Promise<Usuario>  {

    const persist = await this.prisma.user.create({
      data: usuario
    })
    return persist
  }
}