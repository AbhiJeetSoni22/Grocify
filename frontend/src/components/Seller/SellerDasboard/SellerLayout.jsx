import React from 'react';
import { useAppContext } from '../../../context/AppContext';
import { assets } from '../../../assets/assets';
import { Link, Outlet, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';


const SellerLayout = () => {
  const { axios,navigate } = useAppContext();
  const location = useLocation(); // Get current path

  const sidebarLinks = [
    { name: "Add Products", path: "/seller-dashboard/", icon: assets.add_icon },
    { name: "Product List", path: "/seller-dashboard/product-list", icon: assets.product_list_icon },
    { name: "Orders", path: "/seller-dashboard/orders", icon: assets.order_icon },
  ];

  const logout = async () => {
    try {
      const { data } = await axios.get('/api/seller/logout');
      if (data.success) {
        toast.success(data.message);
        navigate('/landing');
        localStorage.removeItem('sellerToken');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        <Link to='/seller-dashboard'>
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <img src="/favicon.svg" alt="Favicon" className="w-8 h-8" />
              <h1 className="text-2xl font-bold text-gray-700">rocify</h1>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button onClick={logout} className='border rounded-full text-sm px-4 py-1.5 transition hover:bg-red-500 hover:text-gray-50 cursor-pointer'>Logout</button>
        </div>
      </div>
      <div className='flex'>
        <div className="md:w-64 w-16 border-r h-[95vh] text-base border-gray-300 pt-4 flex flex-col ">
          {sidebarLinks.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              className={`flex items-center py-3 px-4 gap-3 ${
                location.pathname === item.path // Manual active check
                  ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary"
                  : "hover:bg-gray-100/90 border-white"
              }`}
            >
              <img src={item.icon} className='w-7 h-7' alt="" />
              <p className="md:block hidden text-center">{item.name}</p>
            </Link>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default SellerLayout;