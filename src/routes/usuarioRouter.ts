import { Router } from "express"
import  usuarioController from '../controllers/usuarioController'

const usuarioRouter = Router()
usuarioRouter.post('/cadastrar', usuarioController.cadastrarUsuario)
usuarioRouter.get('/', usuarioController.listarUsuario)

export {usuarioRouter}