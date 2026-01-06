import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//register User: /api/user/register
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({success:false, message: "Please fill all the fields" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success:false, message: "User already exists" });
        }
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "3d",
        });
        // Set cookie with JWT token
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
        });
        return res.status(201).json({ success:true, user: { id: user._id, name: user.name, email: user.email } });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success:false, message: "Server error" });
        
    }
}

// Login User: /api/user/login
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success:false, message: "Please fill all the fields" });
        }
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success:false, message: "Invalid credentials" });
        }
        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success:false, message: "Invalid credentials" });
        }
        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "3d",
        });
        
        // Set cookie with JWT token
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
        });
        return res.status(200).json({ success:true,token, user: { id: user._id, name: user.name, email: user.email } ,message:"Logged In Successfully" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success:false, message: error.message });
        
    }
}

// checkAuth: /api/user/is-auth
export const isAuth = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await User.findById(userId).select("-password");
        if (!user) {
            return res.status(200).json({ success: false, message: "User not found" }); // Return success: false
        }
        return res.status(200).json({ success: true, user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

// Logout User: /api/user/logout
export const logoutUser = async (req, res) => {
    try {
        res.clearCookie('token',{
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        });
        return res.status(200).json({ success:true, message: "Logged out successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success:false, message: error.message });
        
    }
}
