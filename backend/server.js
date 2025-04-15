import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './configs/db.js';
import 'dotenv/config.js';
import userRouter from './routes/user.route.js';
import sellerRouter from './routes/seller.routes.js';
import connectCloudinary from './configs/cloudinary.js';
import productRouter from './routes/product.route.js';
import cartRouter from './routes/cart.route.js';
import addressRouter from './routes/address.route.js';
import orderRouter from './routes/order.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
await connectDB();
// Connect to Cloudinary
await connectCloudinary();

// Define allowed origins for CORS
const allowedOrigins = ['http://localhost:5173'];

// Middleware configuration
app.use(express.json()); // Add this to parse JSON request bodies
app.use(cookieParser());
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/user', userRouter);
app.use('/api/seller', sellerRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter)
app.use('/api/address', addressRouter);
app.use('/api/order',orderRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});