

//place order COD: /api/order/cod

import Order from "../models/order.model.js";
import Product from "../models/product.model.js";

export const placeOrderCOD = async (req, res) => {
    try {
        const { userId, items, address } = req.body;
        if(!address || !items.length === 0 || !userId) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }
       // calculate amount using items
       let amount = await items.reduce(async (acc, item) => {
        const product = await Product.findById(item.product);
        return acc + (product.offerPrice * item.quantity);
       },0);
       // add tax charge (2%)
         amount += Math.floor(amount * 0.02);
    
        await Order.create({
            userId,
            items,
            address,
            amount,
            paymentType: 'COD',
            isPaid: false
        });

        // Create order in the database (assuming you have an Order model)
        
        return res.status(200).json({ success: true, message: 'Order placed successfully'});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

//get order by userId : /api/order/user
export const getUserOrder = async (req, res) => {
    try {
        const { userId } = req.body;
        if(!userId) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }
        const orders = await Order.find({ userId, $or:[{paymentType:'COD'}, {isPaid:true}] }).populate("items.product").populate("address").sort({ createdAt: -1 });
        return res.status(200).json({ success: true, orders });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

// get all orders for seller or admine : /api/order/seller

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({$or:[{paymentType:'COD'}, {isPaid:true}] }).populate("items.product").populate("address").sort({ createdAt: -1 });
        return res.status(200).json({ success: true, orders });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
        
    }
}