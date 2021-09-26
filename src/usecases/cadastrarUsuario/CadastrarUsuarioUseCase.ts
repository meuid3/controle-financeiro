import { Usuario } from "../../entities/Usuario"
import { UsuarioRequestDTO } from "./UsuarioRequestDTO"
import { IUsuarioRepository } from "../../repositories/adapters/IUsuarioRepository"

export class CadastrarUsuarioUseCase {
  
  constructor(private usuarioRepository: IUsuarioRepository){}

  public async handle(usuarioRequest: UsuarioRequestDTO): Promise<Usuario> {
    this.verificaCamposObrigatorios(usuarioRequest)
    this.verificaSenha(usuarioRequest)

    const {nome, email, senha} = usuarioRequest

    return await this.usuarioRepository.cadastrar({
      nome,
      email,
      senha
    })
  }

  private verificaSenha({senha, confirmarSenha}: UsuarioRequestDTO): void {
    if(senha !== confirmarSenha)
      throw new Error("As senhas não conferem")
  }

  private verificaCamposObrigatorios(usuario: any): void {
    const camposObrigatorios = [
      'nome',
      'email',
      'senha',
      'confirmarSenha'
    ]

    for(let campo of camposObrigatorios) {
      if(!usuario[campo]) {
        throw new Error(`Campo ${campo} não informado!`)
      }
    }
  }
    
}
