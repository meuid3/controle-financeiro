import { Request, Response } from 'express'
import { UsuarioRepository } from '../repositories/UsuarioRepository'
import { CadastrarUsuarioUseCase } from '../usecases/cadastrarUsuario/CadastrarUsuarioUseCase'

class UsuarioController {

  async cadastrarUsuario(request: Request, response: Response) {
    try {
      const usuario = request.body
      const usuarioRepository = new UsuarioRepository()
      const cadastrarUsuarioUseCase = new CadastrarUsuarioUseCase(usuarioRepository)
      const usuarioCadastrado = await cadastrarUsuarioUseCase.handle(usuario)
      response.json(usuarioCadastrado)
    }
    catch(error) {
      const  msg = (error as Error).message;
      response.json({message: msg})
    }
  }
}

export default new UsuarioController()
