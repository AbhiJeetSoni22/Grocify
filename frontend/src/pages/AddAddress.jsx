import React, { useState } from "react";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";
import { useAppContext } from "../context/AppContext";

const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <div className="relative w-full">
    <input
      className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-lg outline-none text-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition"
      type={type}
      name={name}
      value={address[name]}
      onChange={handleChange}
      required
    />
    <label className="absolute left-3 top-2 text-gray-400 text-sm transition-all 
      peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
      peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary">
      {placeholder}
    </label>
  </div>
);

const AddAddress = () => {
  const { navigate, axios } = useAppContext();

  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("/api/address/add", { address });

      if (data.success) {
        toast.success(data.message);
        setTimeout(() => navigate("/dashboard/cart"), 1000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">

        {/* Left Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Add <span className="text-primary">Shipping Address</span>
          </h2>

          <form onSubmit={onSubmitHandler} className="space-y-4">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField {...{ handleChange, address }} name="firstName" type="text" placeholder="First Name" />
              <InputField {...{ handleChange, address }} name="lastName" type="text" placeholder="Last Name" />
            </div>

            <InputField {...{ handleChange, address }} name="email" type="email" placeholder="Email Address" />
            <InputField {...{ handleChange, address }} name="street" type="text" placeholder="Street Address" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField {...{ handleChange, address }} name="city" type="text" placeholder="City" />
              <InputField {...{ handleChange, address }} name="state" type="text" placeholder="State" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField {...{ handleChange, address }} name="zipcode" type="number" placeholder="Zip Code" />
              <InputField {...{ handleChange, address }} name="country" type="text" placeholder="Country" />
            </div>

            <InputField {...{ handleChange, address }} name="phone" type="text" placeholder="Phone Number" />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition disabled:opacity-60"
            >
              {loading ? "Adding..." : "Add Address"}
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center">
          <img
            className="max-w-sm"
            src={assets.add_address_iamge}
            alt="Add Address"
          />
        </div>
      </div>
    </div>
  );
};

export default AddAddress;