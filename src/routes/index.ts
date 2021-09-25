import { Router } from 'express'
import { usuarioRouter } from './usuarioRouter'

const router = Router()
router.use('/usuario', usuarioRouter)

export {router}