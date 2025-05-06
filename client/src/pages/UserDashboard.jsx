import React, { useEffect } from 'react';
import { useNavigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../components/Dashboard/Navbar';
import Footer from '../components/Dashboard/Footer';
import Home from './Home';
import AllProduct from './AllProduct';
import ProductCategory from './ProductCategory';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import AddAddress from './AddAddress';
import MyOrders from './MyOrders';
import { Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie';

const UserDashboard = () => {
  const navigate = useNavigate();
  const isSellerPath = useLocation().pathname.includes('seller');
  useEffect(() => {
    // Check for token in localStorage or cookies
    const token = localStorage.getItem('token') || Cookies.get('token');
    console.log('cookies',token)
    
    console.log(token)
    if (!token) {
      navigate('/landing'); // Redirect to the landing page if no token is found
    }
  }, []);

  return (
    <div className="w-full">
      {!isSellerPath && <Navbar />}
      <Toaster />
      <div className={`${isSellerPath ? '' : 'mt-10 px-6 md:px-16 lg-px-24 xl:px-32 2xl:px-40'}`}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<AllProduct />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  );
};

export default UserDashboard;
