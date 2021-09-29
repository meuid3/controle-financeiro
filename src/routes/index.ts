import { Router } from 'express'
import { usuarioRouter } from './usuarioRouter'
import { tipoPagamentoRouter } from './tipoPagamentoRouter'
import { categoriaRouter } from './categoriaRouter'
import { despesaRouter } from './despesaRouter'

const router = Router()

router.use('/usuario', usuarioRouter)
router.use('/tipoPagamento', tipoPagamentoRouter)
router.use('/categoria', categoriaRouter)
router.use('/despesa', despesaRouter)

export {router}