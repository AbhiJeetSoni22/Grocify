import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {
  const { setUser, navigate, axios } = useAppContext();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true); // Set loading to true when submitting
      
      const { data } = await axios.post('/api/user/login', {
        email: formData.email,
        password: formData.password,
      });
     
      if(data.success) {
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
        toast.success('Logged In successfully!');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Invalid credentials");
      console.error('Login error:', error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const fillDemoCredentials = () => {
    setFormData({
      email: 'demo@gmail.com',
      password: '12345'
    });
    toast.success('Demo credentials filled!');
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
                <div className="flex items-center" >
                  <img src="/favicon.svg" alt="Favicon" className="w-8 h-8" />
                  <h1 className=" text-2xl font-bold text-gray-700">rocify</h1>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-gray-600 text-center mb-8">Login to your account to continue shopping</p>

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
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              </div>
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
              disabled={isLoading} // Disable button when loading
              className={`w-full bg-primary text-white py-3 rounded-lg shadow-md transition duration-300 font-medium transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${
                isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary-dull'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Please wait...
                </span>
              ) : 'Login'}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={fillDemoCredentials}
              className="w-full bg-amber-500 text-white py-3 rounded-lg shadow-md hover:bg-amber-600 transition duration-300 font-medium transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-opacity-50"
            >
              Demo Credentials
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary font-medium hover:text-primary-dull transition duration-300">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;