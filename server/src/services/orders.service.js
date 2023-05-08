import { getDAOS } from "../models/daos/index.js";
import { HttpError, HTTP_STATUS } from "../utils/api.utils.js";

const { usersDAO, bussinessesDAO, ordersDAO, productsDAO } = getDAOS()

export class OrdersService {

    async getOrders() {
        const orders = await ordersDAO.getOrders()
        return orders
    }

    async getOrderById(id) {

        if (!id) {
            throw new HttpError('No order ID provided', HTTP_STATUS.BAD_REQUEST)
        }

        const order = await ordersDAO.getOrderById(id)

        if (!order) {
            throw new HttpError(`Order with ID ${id} not found`, HTTP_STATUS.NOT_FOUND)
        }
        
        return order
    }

    async createOrder(payload) {

        const { user, bussiness, products } = payload

        if (!user || !bussiness) {
            throw new HttpError('Missing fields', HTTP_STATUS.BAD_REQUEST)
        }

        const bussinessDB = await bussinessesDAO.getBussinessById(bussiness)

        if (!bussinessDB) {
            throw new HttpError(`Bussiness with ID ${bussiness} not found`, HTTP_STATUS.NOT_FOUND)
        }

        const userDB = await usersDAO.getUserById(user)

        if (!userDB) {
            throw new HttpError(`User with ID ${user} not found`, HTTP_STATUS.NOT_FOUND)
        }

        if (!products || !Array.isArray(products) || !products.length) {
            throw new HttpError('Products must be an array', HTTP_STATUS.BAD_REQUEST)
        }

        const productsMap = products.reduce((acc, product) => {
            acc[product.reference] = product.quantity
            return acc
        }, {})

        const productsIds = Object.keys(productsMap)

        const productsFilter = { _id: { $in: productsIds } }

        const productsDB = await productsDAO.getProducts(productsFilter)

        if (!productsDB || !productsDB.length) {
            throw new HttpError(`Products not found`, HTTP_STATUS.NOT_FOUND)
        }

        let totalPrice = 0
        const productPayload = productsDB.map(product => {
            const reference = product._id
            const quantity = productsMap[reference]
            const price = product.price

            totalPrice += price * quantity
            return {
                reference,
                quantity,
                price
            }
        })

        const orderNumber = Date.now()

        const newOrderPayload = {
            orderNumber,
            user,
            bussiness,
            satus: 'PENDING',
            products: productPayload,
            total_price: totalPrice
        }

        const newOrder = await ordersDAO.createOrder(newOrderPayload)
        return newOrder

    }

    async resolveOrder(id, resolution) {
        if(!id || !resolution) {
            throw new HttpError('Missing fields', HTTP_STATUS.BAD_REQUEST)
        }

        if(resolution !== 'COMPLETED' || resolution !== 'REJECTED') {
            throw new HttpError('Invalid resolution', HTTP_STATUS.BAD_REQUEST)
        }

        let order = await ordersDAO.getOrderById(id)

        if(!order) {
            throw new HttpError(`Order with ID ${id} not found`, HTTP_STATUS.NOT_FOUND)
        }

        order.status = resolution
        const updatedOrder = await ordersDAO.updateOrder(id, order)
        return updatedOrder
    }
}