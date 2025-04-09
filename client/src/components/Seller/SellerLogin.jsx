import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const SellerLogin = () => {
  const navigate = useNavigate();
  const { setUser,isSeller, setIsSeller } = useAppContext();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(()=>{
    if(isSeller){
        navigate('/seller-dashboard');
    }
  },[isSeller])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle seller login logic here
    setUser({
      email: formData.email,
      password: formData.password
    });
    setIsSeller(true);
    // After successful login
    
    console.log('Seller Login submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md"
        data-aos="zoom-in"
      >
        <div className="p-8">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 flex items-center">
                <div className="flex items-center">
                  <img src="/favicon.svg" alt="Favicon" className="w-8 h-8" />
                  <h1 className="text-2xl font-bold text-gray-700">rocify</h1>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2"> <span className='text-primary-dull'>Seller</span> Login</h2>
          <p className="text-gray-600 text-center mb-8">Login to manage your store</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary-dull outline-none transition duration-300"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition duration-300"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg shadow-md hover:bg-primary-dull transition duration-300 font-medium transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Not a seller yet?{' '}
              <Link to="/seller/signup" className="text-primary font-medium hover:text-primary-dull transition duration-300">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;
