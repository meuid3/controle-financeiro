import { Request, Response } from 'express'
import { TipoPagamentoRepository } from '../repositories/TipoPagamentoRepository'
import { ListarTipoPagamentoService } from '../usecases/listarTipoPagamento/ListarTipoPagamentoService'
import { CadastrarTipoPagamentoService } from '../usecases/cadastrarTipoPagamento/CadastrarTipoPagamentoService'

class TipoPagamentoController {

  public async cadastrarTipoPagamento(request: Request, response: Response) {
    try {
      const tipoPagamento = request.body
      const tipoPagamentoService = new CadastrarTipoPagamentoService(tipoPagamentoRepository()) 
      const tipoPagamentoCadastrado = await tipoPagamentoService.executar(tipoPagamento)
      response.json(tipoPagamentoCadastrado)

    } catch(error) {
      const msg = (error as Error).message
      response.status(500).json({message: msg})
    }
  }

  public async listarTiposPagamento(request: Request, response: Response) {
    try {
      const tipoPagamentoService = new ListarTipoPagamentoService(tipoPagamentoRepository())
      const tiposPagamentos = await tipoPagamentoService.executar()
      response.json(tiposPagamentos)
      
    } catch(error) {
      const msg = (error as Error).message
      response.status(500).json({message: msg})
    }
  }
}

const tipoPagamentoRepository = () => {
  return new TipoPagamentoRepository()
}

export default new TipoPagamentoController()