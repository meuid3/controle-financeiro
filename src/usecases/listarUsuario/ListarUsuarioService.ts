import { IUsuarioRepository } from "../../repositories/adapters/IUsuarioRepository";

export class ListarUsuarioService {
  
  constructor(private usuarioRepository: IUsuarioRepository) {}

  handle() {
    throw new Error('Servico listar usuário criado')
  }
}