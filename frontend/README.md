# Grocify – Grocery Delivery Web App (Frontend)

Grocify is a modern, full-stack e-commerce platform for grocery shopping, built with the MERN stack. This repository contains the **React + Vite** frontend for Grocify.

## Features

- Browse and search for grocery products by category
- Product detail pages with images, pricing, and descriptions
- Add to cart, update quantities, and remove items
- Address management for fast checkout
- Place orders with Cash on Delivery or online payment
- View and track your orders
- Responsive UI with Tailwind CSS
- Real-time notifications with react-hot-toast

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/)
- [react-hot-toast](https://react-hot-toast.com/)

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/grocify.git
   cd grocify/client
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the `client` directory:
   ```
   VITE_CURRENCY="₹"
   VITE_BACKEND_URL="http://localhost:5000"
   ```
   Adjust `VITE_BACKEND_URL` to your backend URL in production.

4. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173).

### Building for Production

```sh
npm run build
# or
yarn build
```

The production-ready files will be in the `dist/` directory.

## Deployment

- The frontend can be deployed on platforms like **Render**, **Netlify**, or **Vercel**.
- Set the `VITE_BACKEND_URL` environment variable to your deployed backend API URL.

## Folder Structure

```
client/
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   ├── context/
  │   ├── pages/
  │   ├── App.jsx
  │   ├── main.jsx
  │   └── index.css
  ├── .env
  ├── package.json
  ├── tailwind.config.js
  └── vite.config.js
```

## License

This project is licensed under the MIT License.

---

**Grocify** – Daily Needs,