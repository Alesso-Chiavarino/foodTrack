import { BusinessesService } from "../services/businesses.service.js"
import { HTTP_STATUS, successResponse } from "../utils/api.utils.js"

const businessesService = new BusinessesService()

export class BusinessesController {
    static async getBusinesses(req, res, next) {
        try {
            const businesses = await businessesService.getBusinesses()
            const res = successResponse(businesses)
            res.status(HTTP_STATUS.OK).json(res)
        }
        catch (err) {
            next(err)
        }
    }

    static async getBusinessById(req, res, next) {
        try {
            const { id } = req.params
            const business = await businessesService.getBusinessById(id)
            const res = successResponse(business)
            res.status(HTTP_STATUS.OK).json(res)
        }
        catch (err) {
            next(err)
        }
    }

    static async createBusiness(req, res, next) {
        try {
            const businessPayload = req.body
            const newBusiness = await businessesService.createBusiness(businessPayload)
            const res = successResponse(newBusiness)
            res.status(HTTP_STATUS.CREATED).json(res)
        }
        catch (err) {
            next(err)
        }
    }

    static async addProductToBusiness(req, res, next) {
        try {
            const { id } = req.params
            const productPayload = req.body
            const updatedBusiness = await businessesService.addProductToBusiness(id, productPayload)
            const res = successResponse(updatedBusiness)
            res.status(HTTP_STATUS.OK).json(res)
        }
        catch (err) {
            next(err)
        }
    }


}