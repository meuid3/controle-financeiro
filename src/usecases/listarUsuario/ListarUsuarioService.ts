import { IUsuarioRepository } from "../../repositories/adapters/IUsuarioRepository";

export class ListarUsuarioService {
  
  constructor(private usuarioRepository: IUsuarioRepository) {}

  public async handle() {
    throw new Error('Servico listar usuário criado')
  }
}