export interface UsuarioRequestDTO {
  id?: number
  nome: string
  email: string
  senha: string
  confirmarSenha: string
}

export interface UsuarioResponseDTO {
  id?: number
  nome: string
  email: string
}