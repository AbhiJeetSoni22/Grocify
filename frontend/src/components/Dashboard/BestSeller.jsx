import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../../context/AppContext'
const BestSeller = () => {
  const { products } = useAppContext()

  return (
    <div className='px-3 sm:px-4 lg:px-5 w-full overflow-x-hidden'>
      <p className='text-2xl md:text-3xl font-medium mb-4 md:mb-6'>Best Sellers</p>
      <div className='grid grid-cols-1 min-[480px]:grid-cols-2 min-[760px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                     gap-3 sm:gap-4 md:gap-6 w-full'>
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCard key={index} product={product} className="w-full" />
          ))}
      </div>
    </div>
  )
}

export default BestSeller