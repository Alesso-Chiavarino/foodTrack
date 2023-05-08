import { getDAOS } from "../models/daos/index.js";
import { HttpError, HTTP_STATUS } from "../utils/api.utils.js";

const { bussinessesDAO } = getDAOS()

export class BusinessesService {
    async getBusinesses() {
        const businesses = await bussinessesDAO.getBusinesses()
        return businesses
    }
    async getBusinessById(id) {
        if (!id) {
            throw new HttpError("Missing id", HTTP_STATUS.BAD_REQUEST)
        }

        const business = await bussinessesDAO.getBusinessById(id)

        if (!business) {
            throw new HttpError("Business not found", HTTP_STATUS.NOT_FOUND)
        }

        return business
    }
    async createBusiness(payload) {

        const { name, products } = payload

        if (!name || !products) {
            throw new HttpError("Missing fields", HTTP_STATUS.BAD_REQUEST)
        }

        if (!Array.isArray(payload) || !payload.length) {
            throw new HttpError("Invalid fields, payload must be an array", HTTP_STATUS.BAD_REQUEST)
        }

        const productsFilter = { _id: { $in: products } }
        const productsDb = await bussinessesDAO.getProducts(productsFilter)

        if(!productsDb || !productsDb.length) {
            throw new HttpError("Products not found", HTTP_STATUS.NOT_FOUND)
        }

        const newBusinessesPayload = {
            name,
            products: productsDb.map(product => product._id)
        }

        const newBusiness = await bussinessesDAO.createBusiness(newBusinessesPayload)

        return newBusiness

    }
    async addProduct(businessId, productId) {

        if(!businessId && !productId) {
            throw new HttpError("Missing fields", HTTP_STATUS.BAD_REQUEST)
        }

        const business = await bussinessesDAO.getBusinessById(businessId)

        if(!business) {
            throw new HttpError("Business not found", HTTP_STATUS.NOT_FOUND)
        }

        const product = await bussinessesDAO.getProductById(productId)

        if(!product) {
            throw new HttpError("Product not found", HTTP_STATUS.NOT_FOUND)
        }

        const newBusiness = await bussinessesDAO.addProduct(businessId, productId)

        return newBusiness
    }
}