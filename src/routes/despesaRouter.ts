import { Router } from "express"
import DespesaController from '../controllers/despesaController'

const despesaRouter = Router()

despesaRouter.post('/cadastrar', DespesaController.cadastrar)

export {despesaRouter}