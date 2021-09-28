import { Router } from 'express'
import { usuarioRouter } from './usuarioRouter'
import { tipoPagamentoRouter } from './tipoPagamentoRouter'
import { categoriaRouter } from './categoriaRouter'

const router = Router()

router.use('/usuario', usuarioRouter)
router.use('/tipoPagamento', tipoPagamentoRouter)
router.use('/categoria', categoriaRouter)

export {router}