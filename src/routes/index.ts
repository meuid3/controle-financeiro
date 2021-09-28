import { Router } from 'express'
import { usuarioRouter } from './usuarioRouter'
import { tipoPagamentoRouter } from './tipoPagamentoRouter'

const router = Router()

router.use('/usuario', usuarioRouter)
router.use('/tipoPagamento', tipoPagamentoRouter)

export {router}