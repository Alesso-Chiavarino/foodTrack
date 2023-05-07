import { getDAOS } from "../models/daos/index.js";
import { HttpError, HTTP_STATUS } from "../utils/HttpError.js";

const { usersDAO, bussinessesDAO, ordersDAO, productsDAO } = getDAOS()

export class UsersService {

    async getOrders(){
        const orders = await ordersDAO.getOrders()
        return orders
    }

    async getOrderById(id){
        if(!id) {
            throw new HttpError('No order ID provided', HTTP_STATUS.BAD_REQUEST)
        }
        const order = await ordersDAO.getOrderById(id)
        if(!order){
            throw new HttpError(`Order with ID ${id} not found`, HTTP_STATUS.NOT_FOUND)
        }
        return order
    }

    async createOrder(payload){

        const {user, bussiness, products} = payload

        if(!user || !bussiness){
            throw new HttpError('Missing fields', HTTP_STATUS.BAD_REQUEST)
        }

        const bussinessDB = await bussinessesDAO.getBussinessById(bussiness)

        if(!bussinessDB){
            throw new HttpError(`Bussiness with ID ${bussiness} not found`, HTTP_STATUS.NOT_FOUND)
        }

        const userDB = await usersDAO.getUserById(user)

        if(!userDB){
            throw new HttpError(`User with ID ${user} not found`, HTTP_STATUS.NOT_FOUND)
        }

        if(!products || !Array.isArray(products) || !products.length){
            throw new HttpError('Products must be an array', HTTP_STATUS.BAD_REQUEST)
        }


    }

    async resolveOrder(id, resolution){}
}