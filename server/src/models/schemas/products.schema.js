import { Schema, model } from "mongoose";

const collection = 'products'

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        default: 0,
    },
    thumbnail_url: {
        type: String,
    },
})

const ProductsModel = new model(collection, schema)

export default ProductsModel