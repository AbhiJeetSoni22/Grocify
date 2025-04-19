import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="flex-grow">
      <div className="container mx-auto px-6 py-12 md:py-20 flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <div 
          className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Groceries Delivered in <span className="text-green-600">Under 30 Minutes</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Fresh produce, pantry staples, and household essentials delivered to your door. 
            Spend less time shopping and more time doing what you love.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
            <button 
              onClick={()=> navigate('/login')}
              className="bg-green-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 font-medium transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
            >
              Order Now
            </button>
            <button 
              onClick={() => navigate('/seller-login')}
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition-all duration-300 font-medium transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
            >
              Seller Login
            </button>
          </div>
          <div className="mt-10 flex justify-center lg:justify-start space-x-4">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                <img 
                  className="w-10 h-10 rounded-full border-2 border-white transition-transform duration-300 hover:scale-110" 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Customer" 
                />
                <img 
                  className="w-10 h-10 rounded-full border-2 border-white transition-transform duration-300 hover:scale-110" 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Customer" 
                />
                <img 
                  className="w-10 h-10 rounded-full border-2 border-white transition-transform duration-300 hover:scale-110" 
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  alt="Customer" 
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Trusted by 10,000+ customers</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-4 h-4 text-yellow-400 transition-transform duration-300 hover:scale-125" 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div 
          className="lg:w-1/2 relative"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div className="relative transform transition-all duration-500 hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Fresh groceries"
              className="rounded-2xl shadow-xl w-full max-w-lg mx-auto"
            />
            <div 
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block transform transition-all duration-300 hover:scale-110"
            >
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg 
                    className="w-6 h-6 text-green-600 animate-pulse" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-xs text-gray-500">Average delivery</p>
                  <p className="font-bold text-gray-800">25 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;