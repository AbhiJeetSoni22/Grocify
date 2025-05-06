import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets.js";
import {useAppContext} from "../../context/AppContext"
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
    const {searchQuery ,setUser, setSearchQuery , getCartCount,axios} = useAppContext()

  // creating logout function
  const handleLogout = async() => {
    try {
      const {data}= await axios.get('/api/user/logout');
      if(data.success){
        toast.success(data.message);
        setUser('null')
        navigate('/landing')
        localStorage.removeItem('token')
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error('error during logout')
    }
  };

  useEffect(()=>{
    if(searchQuery.length >0 ){
      navigate('/dashboard/products')
    }
  },[searchQuery])

  return (
    <nav className="bg-white w-full mx-auto sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="w-full px-14 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center" onClick={()=> setIsMenuOpen(false)}>
              <img src="/favicon.svg" alt="Favicon" className="w-8 h-8" />
              <h1 className=" text-2xl font-bold text-gray-700">rocify</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-lg font-medium text-gray-600 hover:text-primary hover:bg-green-50 transition duration-300"
              >
                Home
              </NavLink>
              <NavLink
                to="/dashboard/products"
                className="block px-3 py-2 rounded-md text-lg font-medium text-gray-600 hover:text-primary hover:bg-green-50 transition duration-300"
              >
                All Product
              </NavLink>

              <NavLink
                to="/dashboard/contact"
                className="block px-3 py-2 rounded-md text-lg font-medium text-gray-600 hover:text-primary hover:bg-green-50 transition duration-300"
              >
                Contact
              </NavLink>
          

              {/* Search Bar */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search groceries..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Cart Icon */}
              <div className="relative cursor-pointer" onClick={()=> navigate('/dashboard/cart')}>
                <svg
                  className="w-6 h-6 text-gray-700 hover:text-primary transition duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  { getCartCount()}
                </span>
              </div>

              {/* User Profile */}
              <div className="relative group ">
                <img
                  src={assets.profile_icon}
                  alt=""
                  width={40}
                  className="cursor-pointer"
                />
                <ul className="hidden group-hover:block absolute top-10 border-1 right-0 bg-white shadow-border rounded-md  border-gray-300 py-2.5 w-40 text-sm z-40 ">
                  <li onClick={()=> navigate('/dashboard/my-orders')} className="p-1.5 pl-3 hover:bg-gray-100 cursor-pointer">
                    My Orders
                  </li>
                  <li className="p-1 pl-3 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
                    <span>Logout</span>
                    <button
                      onClick={handleLogout}
                      className="text-red-500 hover:text-red-600 transition duration-300 cursor-pointer"
                      title="Logout"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
             
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
          <Link
             to={"/dashboard/cart"}
              className="flex items-center text-gray-700 hover:text-primary "
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute top-3 right-21.5 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none transition duration-300 "
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
          to='/dashboard'
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-green-50 transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
          to="/dashboard/products"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-green-50 transition duration-300"
          >
            All Product
          </NavLink>

          <NavLink
           to="/dashboard/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-green-50 transition duration-300"
          >
            Contact
          </NavLink>
          <NavLink
            to="/dashboard/my-orders"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-green-50 transition duration-300"
          >
            My Order
          </NavLink>

          {/* Mobile Search */}
          <div className="px-3 py-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search groceries..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          {/* Mobile Cart and Profile */}
          <div className="px-3 py-2 flex items-center justify-between">
          

            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-primary-dull"
            >
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <img
                  src={assets.profile_icon}
                  alt=""
                  width={50}
                  className="cursor-pointer"
                />
              </div>
              {/* Logout Icon */}
              <button
                onClick={handleLogout}
                className="text-red-500 ml-1.5 hover:text-red-600 transition duration-300 cursor-pointer"
                title="Logout"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
