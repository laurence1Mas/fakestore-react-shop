import React from "react";
import Header from "./components/layouts/Header";
import TrendingProducts from "./components/sections/TrendingProduct";
import FeaturesBar from "./components/sections/FeaturesBar";
import BlogSection from "./components/sections/BlogSection";
import BestSelleProduct from "./components/sections/BestSelleProduct";
import "./style.css";

function App() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <FeaturesBar />
                <TrendingProducts />
                <BestSelleProduct />
                <BlogSection />
            <main className="flex-1">

            </main>
        </div>
    );
}
export default App;
