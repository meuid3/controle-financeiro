import { IUsuarioRepository } from "../../repositories/adapters/IUsuarioRepository";

export class ListarUsuarioService {
  
  constructor(private usuarioRepository: IUsuarioRepository) {}

  public async executar() {
    return await this.usuarioRepository.listarUsuarios()
  }
}