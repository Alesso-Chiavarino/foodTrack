import { Router } from 'express'
import { BusinessesController } from '../../controllers/businesses.controller.js'

const router = Router()

router.get('/', BusinessesController.getBusinesses)
router.get('/:id', BusinessesController.getBusinessById)
router.post('/', BusinessesController.createBusiness)
router.put('/:id', BusinessesController.addProductToBusiness)

export default router