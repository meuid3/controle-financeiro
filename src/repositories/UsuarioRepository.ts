import { Usuario } from "../entities/Usuario"
import { PrismaClient } from '@prisma/client'
import { IUsuarioRepository } from "./adapters/IUsuarioRepository"

export class UsuarioRepository implements IUsuarioRepository {

  private prisma = new PrismaClient()

  async cadastrar(usuario: Usuario):Promise<Usuario>  {
    const persist = await this.prisma.usuario.create({
      data: usuario
    })
    return persist
  }

  async buscarUsuarioPorEmail(email: string): Promise<Usuario | null> {
    const usuario = await this.prisma.usuario.findUnique({
      where: {
        email: email
      }
    })

    return usuario
  }

  async listarUsuarios(): Promise <any[]> {
    const usuarios = await this.prisma.usuario.findMany({
      select:{
        id: true,
        nome: true,
        email: true
      }
    })
  
    return usuarios
  }
}