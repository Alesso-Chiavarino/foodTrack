import { Schema, model } from "mongoose";

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

const BusinessesModel = new model(collection, schema)
export default BusinessesModel