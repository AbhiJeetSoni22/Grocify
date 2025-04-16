
import User from "../models/user.model.js";

// update user cart data : /api/cart/update


export const updateCart = async (req, res) => {
    try {
        const {userId, cartItems }= req.body;
        await User.findByIdAndUpdate(userId, { cartItems }, { new: true });  
        return res.status(200).json({ success: true, message: 'Cart updated successfully', userId });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}