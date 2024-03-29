import mongoose from "mongoose";
import productsModel from "./products.model";


const Schema = mongoose.Schema;


const CartSchema = new Schema({
    productID:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: productsModel
    },
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    quantity:{
        type:Number,
        required: true,
    },
    subtotal:{
        type: Number,
        required: true,
    },
    thumbnail:{
        type: String,
        required: true,
    },
});


export default mongoose.model("Cart", CartSchema)