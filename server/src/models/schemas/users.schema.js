import { Schema, Model } from "mongoose";

const collection = 'users'
const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    rol: {
        type: String,
        enum: ['USER', 'BUSSINES', 'ADMIN'],
        default: 'USER',
    },
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'orders',
        }
    ]
})

const UsersModel = new Model(collection, schema)
export default UsersModel