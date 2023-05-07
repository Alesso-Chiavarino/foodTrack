import { Schema, Model } from "mongoose";

const collection = 'businesses'
const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'products',
        }
    ],
})

const BusinessesModel = new Model(collection, schema)
export default BusinessesModel