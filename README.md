# Grocify - Online Grocery Marketplace

A full-stack MERN (MongoDB, Express, React, Node.js) application for online grocery shopping with multi-vendor support.

## 📋 Project Overview

Grocify is a comprehensive e-commerce platform that allows users to browse and purchase groceries from multiple sellers. It includes features for customers, sellers, and administrators to manage products, orders, and user accounts.

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **File Storage**: Cloudinary
- **Other**: Multer (for file uploads)

### Frontend
- **Framework**: React.js
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Linting**: ESLint

## 📁 Project Structure

```
Grocify/
├── backend/
│   ├── configs/           # Configuration files (DB, Cloudinary, Multer)
│   ├── controllers/       # Request handlers
│   ├── middlewares/       # Authentication and custom middlewares
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── index.js          # Server entry point
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/    # Reusable React components
    │   ├── pages/        # Page components
    │   ├── context/      # Context API for state management
    │   ├── assets/       # Static assets
    │   └── App.jsx       # Main App component
    ├── vite.config.js
    ├── tailwind.config.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn
- MongoDB
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Grocify
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

### Configuration

#### Backend Configuration
Create a `.env` file in the `backend` directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
JWT_SECRET=your_jwt_secret
PORT=5000
```

#### Frontend Configuration
Create a `.env` file in the `frontend` directory:
```env
VITE_API_URL=http://localhost:5000
```

## 📦 Running the Project

### Start Backend Server
```bash
cd backend
npm start
```
Server will run on `http://localhost:5000`

### Start Frontend Development Server
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:5173`

## ✨ Features

### User Features
- User authentication (Login/Signup)
- Browse products by category
- Add products to cart
- Place orders
- View order history
- Manage addresses
- User dashboard

### Seller Features
- Seller authentication
- Add and manage products
- View orders
- Seller dashboard
- Product inventory management

### Admin Features
- User and order management
- Monitor marketplace activity

## 📚 API Endpoints

### User Routes
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Product Routes
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product (Seller)
- `PUT /api/products/:id` - Update product (Seller)
- `DELETE /api/products/:id` - Delete product (Seller)

### Cart Routes
- `GET /api/cart` - Get cart items
- `POST /api/cart` - Add to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove from cart

### Order Routes
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details

### Address Routes
- `GET /api/addresses` - Get saved addresses
- `POST /api/addresses` - Add new address
- `PUT /api/addresses/:id` - Update address
- `DELETE /api/addresses/:id` - Delete address

## 🔐 Authentication

The project uses JWT (JSON Web Tokens) for authentication:
- User authentication via `authUser.middleware.js`
- Seller authentication via `authSeller.middleware.js`

## 🎨 Components

### Dashboard Components
- `Navbar` - Navigation bar
- `MainBanner` - Hero section banner
- `ProductCard` - Product display card
- `Cart` - Shopping cart
- `BestSeller` - Featured sellers section
- `Categories` - Product categories
- `Footer` - Footer section

### Seller Components
- `SellerLogin` - Seller authentication
- `SellerLayout` - Seller dashboard layout
- `AddProduct` - Add new product form
- `ProductList` - List seller's products
- `Orders` - View seller's orders

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Grocify - A MERN Stack E-commerce Platform

## 📞 Support

For support, email support@grocify.com or open an issue in the repository.

---

**Happy Coding!** 🎉
