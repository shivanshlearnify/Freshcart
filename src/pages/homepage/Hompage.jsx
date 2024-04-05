import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import BannerSection from '../../components/bannerSection/BannerSection'
import FeaturedCategory from '../../components/featured category/FeaturedCategory'

const Hompage = () => {
  return (
    <div>
        <Navbar/>
        <BannerSection/>
        <FeaturedCategory/>
    </div>
  )
}

export default Hompage