import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Signup = () => {
  const { setUser,axios } = useAppContext()
  const [formData, setFormData, navigate] = useState({
    name: '',
    email: '',
    password: '',
   
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  try {
      e.preventDefault();
      // Handle signup logic here
      const { data }= await axios.post('/api/user/register',{
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
      if(data.success){
        setUser(data.user);
        navigate('/dashboard');
        toast.success('Account created successfully!');
      }
      else{
        toast.error(data.message);
      }
  } catch (error) {
      toast.error('Email already exists!');
    setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          password: ''
        })
    }, 2000);
      console.error('Signup error:', error);
  }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md"
        data-aos="zoom-in"
      >
        <div className="md:p-8 p-6 ">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2">
             
              <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center" >
              <img src="/favicon.svg" alt="Favicon" className="w-8 h-8" />
              <h1 className=" text-2xl font-bold text-gray-700">rocify</h1>
            </div>
          </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Create Account</h2>
          <p className="text-gray-600 text-center md:mb-8 mb-4">Join Grocify for faster deliveries</p>

          <form onSubmit={handleSubmit} className="md:space-y-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3  rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition duration-300"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition duration-300"
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
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition duration-300"
                placeholder="••••••••"
                required
              />
            </div>

          

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-green-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="#" className="text-primary hover:text-primary-dull">Terms</a> and <a href="#" className="text-primary hover:text-primary-dull">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg shadow-md hover:bg-primary-dull transition duration-300 font-medium transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-primary font-medium hover:text-primary-dull transition duration-300">
                Login
              </Link>
            </p>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Signup;