import { Usuario } from '../../entities/Usuario'

export interface IUsuarioRepository {
  cadastrar(usuario: Usuario): Promise<Usuario>
  buscarUsuarioPorEmail(email: string): Promise<Usuario | null>
}
