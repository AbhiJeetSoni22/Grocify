import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SellerLayout from '../components/Seller/SellerDasboard/SellerLayout';
import AddProduct from '../components/Seller/SellerDasboard/AddProduct';
import Orders from '../components/Seller/SellerDasboard/Orders';
import ProductList from '../components/Seller/SellerDasboard/ProductList';

const SellerDashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<SellerLayout />}>
        <Route index element={<AddProduct />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product-list" element={<ProductList />} />
      </Route>
    </Routes>
  );
};

export default SellerDashboard;
