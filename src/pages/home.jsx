import HeroBanner from "../components/sections/HeroBanner";
import FeaturesBar from "../components/sections/FeaturesBar";
import TrendingProducts from "../components/sections/TrendingProduct";
import BestSelleProduct from "../components/sections/BestSelleProduct";
import NewArrivalSection from "../components/sections/NewArrivalSection";
import BrandsSection from "../components/sections/BrandsSection";
import PromoBanner from "../components/sections/PromoBanner";
import BlogSection from "../components/sections/BlogSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FeaturesBar />
      <TrendingProducts />
      <BestSelleProduct />
      <NewArrivalSection />
      <BrandsSection />
      <PromoBanner />
      <BlogSection />
    </>
  );
}
