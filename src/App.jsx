import React from "react";
import Header from "./components/layouts/Header";
import TrendingProducts from "./components/sections/TrendingProduct";
import FeaturesBar from "./components/sections/FeaturesBar";
import BlogSection from "./components/sections/BlogSection";
import BestSelleProduct from "./components/sections/BestSelleProduct";
import "./style.css";
import HeroBanner from "./components/sections/HeroBanner";
import BrandsSection from "./components/sections/BrandsSection";
import NewArrivalSection from "./components/sections/NewArrivalSection";
import PromoBanner from "./components/sections/PromoBanner";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <FeaturesBar />
        <TrendingProducts />
        <BestSelleProduct />
        <PromoBanner />
        <NewArrivalSection />
        <BrandsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
export default App;
