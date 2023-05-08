import { OrdersService } from "../services/orders.service.js"
import { HTTP_STATUS, successResponse } from "../utils/api.utils.js"

const ordersService = new OrdersService()
export class OrdersController {
    static async getOrders(req, res, next) {
        try {
            const orders = await ordersService.getOrders()
            const res = successResponse(orders)
            res.status(HTTP_STATUS.OK).json(res)
        }
        catch (err) {
            next(err)
        }
    }

    static async getOrderById(req, res, next) {
        try {
            const { id } = req.params
            const order = await ordersService.getOrderById(id)
            const res = successResponse(order)
            res.status(HTTP_STATUS.OK).json(res)
        }
        catch (err) {
            next(err)
        }
    }

    static async createOrder(req, res, next) {
        try {
            const orderPayload = req.body
            const newOrder = await ordersService.createOrder(orderPayload)
            const res = successResponse(newOrder)
            res.status(HTTP_STATUS.CREATED).json(res)
        }
        catch (err) {
            next(err)
        }
    }

    static async resolveOrder(req, res, next) {
        try {
            const { id } = req.params
            const { resolution } = req.body
            const order = await ordersService.resolveOrder(id, resolution)
            const res = successResponse(order)
            res.status(HTTP_STATUS.OK).json(res)
        }
        catch (err) {
            next(err)
        }
    }


}