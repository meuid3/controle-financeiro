import { Request, Response } from 'express'
import { CategoriaRepository } from '../repositories/CategoriaRepository'
import { ListarCategoriasService } from '../usecases/listarCategorias/ListarCategoriasService'
import { CadastrarCategoriaService } from '../usecases/cadastrarCategoria/CadastrarCategoriaService'

class CategoriaContoller {
  public async cadastrar(request: Request, response: Response) {
    try {
      const categoria = request.body
      const categoriaService = new CadastrarCategoriaService(categoriaRepository())
      const categoriaCadastrada = await categoriaService.executar(categoria)
      response.json(categoriaCadastrada)
      
    } catch(error) {
      const msg = (error as Error).message
      response.status(500).json({message: msg})
    }
  }

  public async listarCategorias(request: Request, response: Response) {
    try {
      const categoriaService = new ListarCategoriasService(categoriaRepository())
      const categorias = await categoriaService.executar()
      response.json(categorias)

    } catch(error) {
      const msg = (error as Error).message
      response.status(500).json({message: msg})
    }
  }
}

const categoriaRepository = () => {
  return new CategoriaRepository()
}

export default new CategoriaContoller()