import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";



const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClick = () => {
    navigate("/login");
  }

  return (
    <header className="bg-white sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
        <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center" onClick={()=> setIsMenuOpen(false)}>
              <img src="/favicon.svg" alt="Favicon" className="w-8 h-8" />
              <h1 className=" text-2xl font-bold text-gray-700">rocify</h1>
            </div>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link className="text-gray-600 hover:text-green-600 transition duration-300 font-medium">
                Features
              </Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-green-600 transition duration-300 font-medium">
                How It Works
              </Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-green-600 transition duration-300 font-medium">
                Testimonials
              </Link>
            </li>
          </ul>
        </nav>
        
        <button onClick={handleClick} className="bg-green-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-700 transition duration-300 hidden md:block">
          Get Started
        </button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none transition-transform duration-300 transform hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu with Smooth Transition */}
      <div className={`md:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "max-h-96 py-4 shadow-md" : "max-h-0"}`}>
        <div className="container mx-auto px-6">
          <ul className="flex flex-col space-y-4 pb-2">
            <li>
              <a 
                href="#features" 
                className="block text-gray-600 hover:text-green-600 transition duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#how-it-works" 
                className="block text-gray-600 hover:text-green-600 transition duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
            </li>
            <li>
              <a 
                href="#testimonials" 
                className="block text-gray-600 hover:text-green-600 transition duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
            </li>
            <li className="pt-2">
              <button 
                className="w-full bg-green-600 text-white px-4 py-3 rounded-full shadow-md hover:bg-green-700 transition duration-300 font-medium"
                onClick={handleClick}
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;