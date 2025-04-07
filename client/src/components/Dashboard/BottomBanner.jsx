import React from 'react'
import{ assets, features } from '../../assets/assets'

const BottomBanner = () => {
  return (
    <div className='relative mt-24'>
      <img src={ assets.bottom_banner_image} alt="banner" className='w-full hidden md:block' />
      <img src={ assets.bottom_banner_image_sm} alt="banner" className='w-full  md:hidden' />
      <div className='absolute inset-0 flex flex-col md:justify-center md:items-end items-center pt-16 md:pt-0 md:pr-24'>  
           <div >
            <h1 className='text-xl md:text-3xl font-semibold text-primary mb-6'>Why We are the Best ?</h1>
            {
              features.map((feature, index) => (
                <div key={index} className='flex items-center mt-2 gap-4'>
                  <img src={feature.icon} alt={feature.title} className='md:w-11 w-8' />
                  <div>
                  <h2 className='text-lg md:text-xl font-semibold '>{feature.title}</h2>
                  <p className='text-gray-500/70 text-xs md:text-sm'>{feature.description}</p>

                  </div>
                </div>
              ))
            }
           </div>
      </div>
    </div>
  )
}

export default BottomBanner
