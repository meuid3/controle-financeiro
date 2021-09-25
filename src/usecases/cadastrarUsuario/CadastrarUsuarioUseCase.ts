import { Usuario } from "../../entities/Usuario";
import { IUsuarioRepository } from "../../repositories/adapters/IUsuarioRepository";

export class CadastrarUsuarioUseCase {
  
  constructor(private usuarioRepository: IUsuarioRepository){}

  public async handle(usuario: Usuario): Promise<any> {
      
    if(!usuario) {
      throw new Error('Dados não informados')
    }
    
    return await this.usuarioRepository.cadastrar(usuario)
  }
}
