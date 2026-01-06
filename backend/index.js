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
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
await connectDB();
// Connect to Cloudinary
await connectCloudinary();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  "https://grocify-uyuf.onrender.com",
  "http://3.109.228.147",
  "https://d2pre52kmkfxgn.cloudfront.net/"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  },
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
    console.log(`Server is running on ${PORT}`);
});