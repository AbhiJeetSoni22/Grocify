import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("")
  // Fetch all products
  const fetchProducts = async () => {
     try {
      const { data } = await axios.get('/api/product/list')
      if(data.success){
        setProducts(data.products)
      }
      else{
        toast.error(data.message)
      }
     } catch (error) {
      console.log(error);
      toast.error(error.message); 
     }
  };
  //fetch seller status
  const fetchSeller= async()=>{
    try {
      const {data} = await axios.get('/api/seller/is-auth')
      
      if(data.success){
        setIsSeller(true);
      }else{
        setIsSeller(false);
      }
    } catch (error) {
      setIsSeller(false)
      console.log(error)
    }
  }

  // FETCH USER AUTH STATUS , user Data nd Cart Items
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/is-auth");
      console.log(data.success)
      if (data.success) {
       
        setUser(data.user);
        setCartItems(data.user?.cartItems);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log(error)
      setUser(null);
    }
  };

  // Add product to cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to Cart");
  };

  // Update cart item quantity
  const updateCartItemQuantity = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Quantity updated");
  };

  // Remove cart item
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }
    toast.success("Removed from Cart");
    setCartItems(cartData);
  };

  // get cart item count
  const getCartCount = ()=>{
    let totalCount =0;
    for(const item in cartItems){
      totalCount+= cartItems[item]
    }
    return totalCount;
  }

  // get cart total amount
  const getCartAmount =()=>{
    let totalAmount = 0;
    for(const items in cartItems){
      let itemInfo = products.find((product)=> product._id === items);
      if(cartItems[items] > 0){
        totalAmount += itemInfo.offerPrice * cartItems[items]
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  }
  useEffect(() => {
    fetchUser();
    fetchProducts();
    fetchSeller();
  }, []);

  useEffect(()=>{
    const updateCart = async()=>{
      try {
        const {data}= await axios.post('/api/cart/update', {cartItems})
        
        if(!data.success){
          toast.error(data.message)
        }
      } catch (error) {
        console.log(error)
      }
    }

    if(user){
      updateCart();
    }
  },[cartItems])

  const value = {
    navigate,
    isSeller,
    setIsSeller,
    user,
    setUser,
    products,
    setProducts,
    currency,
    addToCart,
    updateCartItemQuantity,
    removeFromCart,
    cartItems,
    setCartItems,
    searchQuery,
    setSearchQuery,
    getCartCount,
    getCartAmount,
    axios,
    fetchProducts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};