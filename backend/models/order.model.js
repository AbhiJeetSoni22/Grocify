import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
        ref:'user'
    },
    items:[{
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'product',
            required: true
        },
        quantity:{
            type: Number,
            required: true
        },
    }],
    amount:{
        type: Number,
        required: true
    },
    address:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'address',
        required: true
    },
    status:{
        type: String,
        default: 'order placed',
    },
    paymentType:{
        type: String,
        required: true
    },
    isPaid:{
        type: Boolean,
        default: false
    }
}, { timestamps: true });
const Order = mongoose.models.order || mongoose.model("Order", orderSchema);
export default Order;