import { Usuario } from "../../entities/Usuario"
import { UsuarioRequestDTO } from "./UsuarioRequestDTO"
import { IUsuarioRepository } from "../../repositories/adapters/IUsuarioRepository"

export class CadastrarUsuarioService {
  
  constructor(private usuarioRepository: IUsuarioRepository){}

  public async handle(usuarioRequest: UsuarioRequestDTO): Promise<Usuario> {
    this.verificaCamposObrigatorios(usuarioRequest)
    this.verificaSenha(usuarioRequest)

    const {nome, email, senha} = usuarioRequest
    await this.validaEmail(email)

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
      if(!usuario[campo]) 
        throw new Error(`Campo ${campo} não informado!`)
    }
  }

  private async validaEmail(email: string): Promise<void> {
    const usuarioBD = await this.usuarioRepository.buscarUsuarioPorEmail(email) 
    if(usuarioBD) {
      const isEmailInvalido = usuarioBD.email === email
      
      if(isEmailInvalido) 
        throw new Error("E-mail informado não pode ser utilizado!")
    }
  }
    
}
