import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './configs/db.js';
import 'dotenv/config.js';
import userRouter from './routes/user.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
await connectDB();

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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});