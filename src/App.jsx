import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/layout";
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

import Home from "./pages/home";
import About from "./pages/about";
import Features from "./pages/features";
import Product from "./pages/product";
import Blog from "./pages/blog";
import Cart from "./pages/cart";
import Login from "./pages/auth/login";
import SignIn from "./pages/auth/signin";
import Footer from "./components/layouts/Footer";
import "./style.css";
import { CartProvider } from "./services/cartService";
function App() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/product" element={<Product />} />
              <Route path="/blog" element={<Blog />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
