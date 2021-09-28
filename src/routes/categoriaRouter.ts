import { Router } from 'express'
import categoriaController from '../controllers/categoriaController'

const categoriaRouter = Router()

categoriaRouter.post('/cadastrar', categoriaController.cadastrar)
categoriaRouter.get('/', categoriaController.listarCategorias)

export {categoriaRouter}