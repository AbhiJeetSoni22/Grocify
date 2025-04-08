import React, { useEffect } from 'react'
import MainBanner from '../components/Dashboard/MainBanner';
import Categories from '../components/Dashboard/Categories';
import BestSeller from '../components/Dashboard/BestSeller';
import BottomBanner from '../components/Dashboard/BottomBanner';
import NewsLatter from '../components/Dashboard/NewsLatter';
import { useAppContext } from '../context/AppContext';

const Home = () => {
  const {setSearchQuery} = useAppContext();
  useEffect(()=>{
    setSearchQuery('')
  },[])
  return (
    <div>
      <MainBanner />
      <Categories/>
      <BestSeller/>
      <BottomBanner/>
      <NewsLatter/>
    </div>
  )
}

export default Home
