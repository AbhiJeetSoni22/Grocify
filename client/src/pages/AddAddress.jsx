import React, { useState } from 'react'
import { assets } from '../assets/assets'

const InputField = ({type,placeholder, name, handleChange, address})=>(
    <input
    className='w-full px-2 my-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition'
    type={type} 
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required />
)


const AddAddress = () => {

    const [address,setAddress]= useState({
      firstName:'',
      lastName:'',
      email:'',
      street:'',
      city:'',
      state:'',
      zipcode:'',
      country:'',
      phone:'',
    })

    const handleChange = (e)=>{
      const {name, value }= e.target;
      setAddress((prevAddress)=>({
        ...prevAddress,
        [name]:value,
      }))
    }
    const onSubmitHandler = async (e)=>{
        e.preventDefault();
    }
  return (
    <div className='pb-16 mt-16'>
      <p className='text-2xl md:text-3xl text-gray-500'>Add Shipping <span 
      className='font-semibold text-primary'>Address</span></p>
      <div className='flex flex-row-reverse md:flex-row justify-between mt-10'>
        <div className=''>
           <form onSubmit={onSubmitHandler}>

              <div className='grid grid-cols-2 gap-4'>
                <InputField handleChange={handleChange} address={address} name='firstName' type='text' placeholder='First name'  />
                <InputField handleChange={handleChange} address={address} name='lastName' type='text' placeholder='Last name'  />
              </div>
              
                <InputField handleChange={handleChange} address={address} name='email' type='email' placeholder='Email'  />
                <InputField handleChange={handleChange} address={address} name='street' type='text' placeholder='Street'  />

                <div className='grid grid-cols-2 gap-4'>
                  <InputField handleChange={handleChange} address={address} name='city' type='text' placeholder='City'  />
                  <InputField handleChange={handleChange} address={address} name='state' type='text' placeholder='State'  />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <InputField handleChange={handleChange} address={address} name='Zipcode' type='number' placeholder='Zip Code'  />
                  <InputField handleChange={handleChange} address={address} name='country' type='text' placeholder='Country'  />
                </div>

                <InputField handleChange={handleChange} address={address} name='phone' type='text' placeholder='Phone Number'  />

                <button type='submit' className='w-full bg-primary text-white py-3 cursor-pointer uppercase rounded mt-4 hover:bg-primary/80 transition'>Add Address</button>
           </form>
        </div>
        <img className='md:mr-16 mb-16 md:mt-0' src={assets.add_address_iamge} alt="" />

      </div>
    </div>
  )
}

export default AddAddress
