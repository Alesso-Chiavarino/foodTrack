import { Router } from 'express'
import usersRouter from './users/users.router.js'
import ordersRouter from './orders/orders.router.js'
import businessesRouter from './businesses/businesses.router.js'

const router = Router()

router.use('/users', usersRouter)
router.use('/orders', ordersRouter)
router.use('/businesses', businessesRouter)

export default router