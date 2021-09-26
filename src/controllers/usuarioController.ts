import { Request, Response } from 'express'
import { UsuarioRepository } from '../repositories/UsuarioRepository'
import { CadastrarUsuarioService } from '../usecases/cadastrarUsuario/CadastrarUsuarioService'

class UsuarioController {

  async cadastrarUsuario(request: Request, response: Response) {
    try {
      const usuario = request.body
      const usuarioRepository = new UsuarioRepository()
      const cadastrarUsuarioService = new CadastrarUsuarioService(usuarioRepository)
      const usuarioCadastrado = await cadastrarUsuarioService.handle(usuario)
      response.json(usuarioCadastrado)
    }
    catch(error) {
      const  msg = (error as Error).message;
      response.status(500).json({message: msg})
    }
  }
}

export default new UsuarioController()
