import React from "react";
import Header from "./components/layouts/Header";
import TrendingProducts from "./components/sections/TrendingProduct";
import FeaturesBar from "./components/sections/FeaturesBar";
import "./style.css";

function App() {
    return (
        <div className="flex min-h-screen flex-col">

            <Header />
            <main className="flex-1">
                <FeaturesBar />
                <TrendingProducts />
            </main>
        </div>
    );
}
export default App;
