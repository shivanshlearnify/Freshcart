import BannerSection from "../../components/bannerSection/BannerSection";
import FeaturedCategory from "../../components/featured category/FeaturedCategory";
import CategoryBanner from "../../components/categoryBanner/CategoryBanner";
import InfoSection from "../../components/infoSection/InfoSection";
import PopularProducts from "../../components/popularProducts/PopularProducts";

const Hompage = () => {
  return (
    <div>
      <BannerSection />
      <FeaturedCategory />
      <CategoryBanner />
      <PopularProducts />
      <InfoSection />
    </div>
  );
};

export default Hompage;
