import React from "react";
import Navbar from "../../components/navbar/Navbar";
import BannerSection from "../../components/bannerSection/BannerSection";
import FeaturedCategory from "../../components/featured category/FeaturedCategory";
import PromoBar from "../../components/promoBar/PromoBar";
import CategoryBanner from "../../components/categoryBanner/CategoryBanner";
import InfoSection from "../../components/infoSection/InfoSection";
import Footer1 from "../../components/footer/Footer1";


const Hompage = () => {
  return (
    <div>
      <PromoBar />
      <Navbar />
      <BannerSection />
      <FeaturedCategory />
      <CategoryBanner/>
      <InfoSection/>
      <Footer1/>
    </div>
  );
};

export default Hompage;
