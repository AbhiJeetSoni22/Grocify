import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SellerLayout from '../components/Seller/SellerDasboard/SellerLayout';
import AddProduct from '../components/Seller/SellerDasboard/AddProduct';
import Orders from '../components/Seller/SellerDasboard/Orders';
import ProductList from '../components/Seller/SellerDasboard/ProductList';
import { Toaster } from 'react-hot-toast';

const SellerDashboard = () => {
  const navigate= useNavigate();
 const token = localStorage.getItem('sellerToken');
 useEffect(()=>{
  if(!token){
    navigate('/seller-login')
  }
  
 },[])
  return (
    <>
    <Toaster/>
    <Routes>
      <Route path="/" element={<SellerLayout />}>
        <Route index element={<AddProduct />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product-list" element={<ProductList />} />
      </Route>
    </Routes>
    </>
  );
};

export default SellerDashboard;
