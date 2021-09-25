import { Request, Response } from 'express'
import { CadastrarUsuarioUseCase } from '../usecases/cadastrarUsuario/CadastrarUsuarioUseCase'
import { UsuarioRepository } from '../repositories/UsuarioRepository'

class UsuarioController {

  async cadastrarUsuario(request: Request, response: Response) {
    try {
      const usuario = request.body
      const usuarioRepository = new UsuarioRepository()
      const cadastrarUsuarioService = new CadastrarUsuarioUseCase(usuarioRepository)
      const result = await cadastrarUsuarioService.handle(usuario)
      response.json(result)
    }
    catch(error) {
      response.status(500).json(error)
    }
  }
}

export default new UsuarioController()
