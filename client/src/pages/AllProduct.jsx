import React, { useEffect, useState } from 'react'
import ProductCard from '../components/Dashboard/ProductCard';
import { useAppContext } from '../context/AppContext';

const AllProduct = () => {
  const { products, searchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([])
  useEffect(()=>{
  if(searchQuery.length > 0){
    setFilteredProducts( products.filter(
        product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
    ))
  }
  else{
    setFilteredProducts(products)
  }
  },[products, searchQuery])

  return (
    <div className='mt-16 flex flex-col'>
      <div className='flex flex-col items-start w-max'>
        <p className='text-2xl font-medium uppercase'>All Products</p>
        <div className='w-16 h-0.5 bg-primary rounded-full'>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-12 lg:grid-cols-5 mt-6'>
          {
            filteredProducts.filter((product)=> product.inStock).map((product,index)=>(
                <ProductCard key={index} product={product} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default AllProduct
