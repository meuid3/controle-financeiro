import { Request, Response } from 'express'
import { UsuarioRepository } from '../repositories/UsuarioRepository'
import { CadastrarUsuarioService } from '../usecases/cadastrarUsuario/CadastrarUsuarioService'
import { ListarUsuarioService } from '../usecases/listarUsuario/ListarUsuarioService'

class UsuarioController {

  async cadastrarUsuario(request: Request, response: Response) {
    try {
      const usuario = request.body
      
      const cadastrarUsuarioService = new CadastrarUsuarioService(usuarioRepository())
      const usuarioCadastrado = await cadastrarUsuarioService.executar(usuario)
      response.json(usuarioCadastrado)
    }
    catch(error) {
      const  msg = (error as Error).message;
      response.status(500).json({message: msg})
    }
  }

  async listarUsuario(request: Request, response: Response) {
    try {
      const listarUsuarioService = new ListarUsuarioService(usuarioRepository())
      const usuarios = await listarUsuarioService.executar()
      response.json(usuarios)

    } catch(error) {
      const  msg = (error as Error).message;
      response.status(500).json({message: msg})
    }
  }
}

const usuarioRepository = () => {
  return new UsuarioRepository()
}

export default new UsuarioController()
