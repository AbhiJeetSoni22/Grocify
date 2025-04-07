import React from 'react'
import MainBanner from '../components/Dashboard/MainBanner';
import Categories from '../components/Dashboard/Categories';
import BestSeller from '../components/Dashboard/BestSeller';
import BottomBanner from '../components/Dashboard/BottomBanner';
import NewsLatter from '../components/Dashboard/NewsLatter';

const Home = () => {
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
