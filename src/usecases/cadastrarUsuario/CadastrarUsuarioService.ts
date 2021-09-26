import { hash } from 'bcryptjs'
import { UsuarioRequestDTO, UsuarioResponseDTO } from "./UsuarioDTO"
import { IUsuarioRepository } from "../../repositories/adapters/IUsuarioRepository"
import { ErrorCampoObrigatorioNaoInformado } from "../../errors/CampoObrigatorioError"

export class CadastrarUsuarioService {
  
  constructor(private usuarioRepository: IUsuarioRepository){}

  public async handle(usuarioRequest: UsuarioRequestDTO): Promise<UsuarioResponseDTO> {
    this.verificaCamposObrigatorios(usuarioRequest)
    this.verificaSenha(usuarioRequest)

    const {nome, email, senha} = usuarioRequest
    await this.validaDisponibilidadeEmail(email)

    const senhaCriptografada = await hash(senha,10)

    const usuarioCadastrado = await this.usuarioRepository.cadastrar({
      nome,
      email,
      senha: senhaCriptografada
    })

    if(usuarioCadastrado) {
      return {
        id: usuarioCadastrado.id,
        nome: usuarioCadastrado.nome,
        email: usuarioCadastrado.email
      }
    }

    throw new Error("Erro ao cadastrar o novo Usuário")
  }

  private verificaSenha({senha, confirmarSenha}: UsuarioRequestDTO): void {

    if(senha.length < 6)
      throw new Error("A senha deve possuir no mínimo 6 caracteres")

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
        ErrorCampoObrigatorioNaoInformado(campo)
    }
  }

  private async validaDisponibilidadeEmail(email: string): Promise<void> {
    const usuarioBD = await this.usuarioRepository.buscarUsuarioPorEmail(email) 
    if(usuarioBD) {
      const isEmailInvalido = usuarioBD.email === email
      
      if(isEmailInvalido) 
        throw new Error("E-mail informado não pode ser utilizado!")
    }
  }
    
}
