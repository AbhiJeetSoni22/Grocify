# Grocify – Grocery Delivery Web App (Backend)

This is the backend API for **Grocify**, a modern, full-stack e-commerce platform for grocery shopping. The backend is built with **Node.js**, **Express.js**, and **MongoDB**.

## Features

- User registration and authentication (JWT, cookies)
- Seller authentication and dashboard
- Product management (CRUD for sellers)
- Cart and order management
- Address management for users
- Secure API endpoints with middleware
- Image uploads via Cloudinary
- Role-based access for users and sellers

## Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Cloudinary](https://cloudinary.com/)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [cookie-parser](https://github.com/expressjs/cookie-parser)
- [CORS](https://github.com/expressjs/cors)

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB database (local or Atlas)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/grocify.git
   cd grocify/backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development

   # Cloudinary credentials
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   # Seller demo credentials
   SELLER_EMAIL=admin@example.com
   SELLER_PASSWORD=admine123
   ```

4. Start the server:
   ```sh
   npm start
   ```

   The API will be available at [http://localhost:5000](http://localhost:5000).

## API Endpoints

- `POST /api/user/register` – Register a new user
- `POST /api/user/login` – User login
- `GET /api/user/is-auth` – Check user authentication
- `POST /api/address/add` – Add a new address
- `GET /api/address/get` – Get user addresses
- `POST /api/order/cod` – Place order (Cash on Delivery)
- `GET /api/order/user` – Get user orders
- `GET /api/order/seller` – Get all orders for seller/admin
- `POST /api/product/add` – Add a new product (seller)
- `GET /api/product/list` – Get all products

...and more.

## Deployment

- Can be deployed on platforms like **Render**, **Heroku**, or **Vercel**.
- Set all environment variables in the deployment dashboard.

## License

This project is licensed under the MIT License.

---

**Grocify** – Powering