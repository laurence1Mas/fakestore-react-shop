import React from "react";
import Header from "./components/layouts/Header";
import TrendingProducts from "./components/sections/TrendingProduct";
import "./style.css";

function App() {
    return (
        <div className="flex min-h-screen flex-col">

            <Header />
            <main className="flex-1">
                <TrendingProducts />
            </main>
        </div>
    );
}
export default App;
