import ProductsModel from '../schemas/products.schema.js'

export class ProductsDAO {
    async getProducts(filter = {}) {
        const products = await ProductsModel.find(filter).lean()
        return products
    }
    async getProductById(id) {
        const product = await ProductsModel.findOne({ _id: id }).lean()
        return product
    }
}