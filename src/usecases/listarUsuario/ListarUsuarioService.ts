import { IUsuarioRepository } from "../../repositories/adapters/IUsuarioRepository";

export class ListarUsuarioService {
  
  constructor(private usuarioRepository: IUsuarioRepository) {}

  public async handle() {
    return await this.usuarioRepository.listarUsuarios()
  }
}