import { Router } from "express"
import  usuarioController from '../controllers/usuarioController'

const usuarioRouter = Router()
usuarioRouter.post('/criar', usuarioController.cadastrarUsuario)

export {usuarioRouter}