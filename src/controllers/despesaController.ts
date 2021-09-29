import { Request, Response } from 'express'
import { DespesaRepository } from '../repositories/DespesaRepository'
import { CadastrarDespesaService } from '../usecases/cadastrarDespesa/CadastrarDespesaService'

class DespesaController {

  public async cadastrar(request: Request, response: Response) {
    try {
      const despesa = request.body
      const despesaService = new CadastrarDespesaService(despesaRepository())
      const despesaCadastrada = await despesaService.executar(despesa)
      response.json(despesaCadastrada)
      
    } catch(error) {
      const msg = (error as Error).message
      response.status(500).json({message: msg})
    }
  }

}

const despesaRepository = () => {
  return new DespesaRepository()
}

export default new DespesaController()