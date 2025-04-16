import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import toast from 'react-hot-toast';
import { useAppContext } from '../context/AppContext';

const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    className="w-full px-2 my-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition"
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required
  />
);

const AddAddress = () => {
  const {user,navigate,axios} = useAppContext();
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post('/api/address/add', { address }); // Changed to POST
      console.log(data);
      if (data.success) {
        toast.success(data.message);
        setTimeout(() => {
          navigate('/dashboard/cart');
        }, 1000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('An unexpected error occurred');
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, []);
  return (
    <div className="pb-16 mt-16 px-4 md:px-8">
      <p className="text-2xl md:text-3xl text-gray-500 text-center md:text-left">
        Add Shipping <span className="font-semibold text-primary">Address</span>
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-10 items-center md:items-start">
        <div className="w-full md:w-1/2">
          <form onSubmit={onSubmitHandler}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="firstName"
                type="text"
                placeholder="First name"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="lastName"
                type="text"
                placeholder="Last name"
              />
            </div>

            <InputField
              handleChange={handleChange}
              address={address}
              name="email"
              type="email"
              placeholder="Email"
            />
            <InputField
              handleChange={handleChange}
              address={address}
              name="street"
              type="text"
              placeholder="Street"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="city"
                type="text"
                placeholder="City"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="state"
                type="text"
                placeholder="State"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="zipcode"
                type="number"
                placeholder="Zip Code"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="country"
                type="text"
                placeholder="Country"
              />
            </div>

            <InputField
              handleChange={handleChange}
              address={address}
              name="phone"
              type="text"
              placeholder="Phone Number"
            />

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 cursor-pointer uppercase rounded mt-4 hover:bg-primary/80 transition"
            >
              Add Address
            </button>
          </form>
        </div>
        <img
          className="w-full md:w-1/2 max-w-md md:mr-16 mb-8 md:mb-0"
          src={assets.add_address_iamge}
          alt="Add Address"
        />
      </div>
    </div>
  );
};

export default AddAddress;
