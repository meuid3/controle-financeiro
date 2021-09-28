import { Router } from 'express'
import TipoPagamentoController from '../controllers/tipoPagamentoController' 

const tipoPagamentoRouter = Router()

tipoPagamentoRouter.post('/cadastrar', TipoPagamentoController.cadastrarTipoPagamento)
tipoPagamentoRouter.get('/', TipoPagamentoController.listarTiposPagamento)

export {tipoPagamentoRouter}