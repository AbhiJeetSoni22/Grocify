import React from 'react';
import Navbar from '../components/Dashboard/Navbar';

import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './Home';
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Dashboard/Footer';
import AllProduct from './AllProduct';
import ProductCategory from './ProductCategory';
import ProductDetails from './ProductDetails';
import Cart from './Cart';

const UserDashboard = () => {
  const isSellerPath = useLocation().pathname.includes('seller');
  return (
    <div className="w-full">
     {isSellerPath ? null: <Navbar />}
    <Toaster/>
      <div className={ `${isSellerPath ? "": "mt-10 px-6 md:px-16 lg-px-24 xl:px-32 2xl:px-40"}`}>
        <Routes>
          {/* Use index route for MainBanner */}
          <Route index element={<Home/>} />
          <Route path="/products" element={<AllProduct />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
     {!isSellerPath && <Footer/>}
    </div>
  );
};

export default UserDashboard;
