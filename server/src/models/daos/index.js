import { BusinessesDAO } from "./businesses.dao.js"
import { OrdersDAO } from "./orders.dao.js"
import { ProductsDAO } from "./products.dao.js"
import { UsersDAO } from "./users.dao.js"

const bussinessesDAO = new BusinessesDAO()
const ordersDAO = new OrdersDAO()
const productsDAO = new ProductsDAO()
const usersDAO = new UsersDAO()

export const getDAOS = () => {
    return {
        bussinessesDAO,
        ordersDAO,
        productsDAO,
        usersDAO
    }
}