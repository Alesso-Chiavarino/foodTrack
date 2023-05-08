import { Schema, model } from "mongoose";

const collection = 'orders'
const schema = new Schema({
    order_number: {
        type: String,
        required: true,
        trim: true,
    },
    bussines: {
        type: Schema.Types.ObjectId,
        ref: 'bussineses',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    status: {
        type: String,
        enum: ['PENDING', 'COMPLETED', 'REJECTED'],
        default: 'PENDING',
    },
    products: [
        {
            reference: {type: Schema.Types.ObjectId, ref: 'products'},
            quantity: {type: Number, required: true},
            price: {type: Number, required: true},
        }
    ],
    total_price: {
        type: Number,
        default: 0,
    },
})

const OrdersModel = new model(collection, schema)
export default OrdersModel