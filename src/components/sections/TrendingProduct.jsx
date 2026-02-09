import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState } from "react";

const categories = ["Men's", "Women's", "Handbags", "Accessories"];

const products = [
  {
    id: 1,
    name: "Classic Polo Shirt",
    category: "Men's",
    price: 49.99,
    img: "seed/prod1/300/400",
  },
  {
    id: 2,
    name: "Summer Dress",
    category: "Women's",
    price: 79.99,
    img: "seed/prod2/300/400",
  },
  {
    id: 3,
    name: "Leather Handbag",
    category: "Bags",
    price: 129.99,
    img: "seed/prod3/300/400",
  },
  {
    id: 4,
    name: "Gold Watch",
    category: "Accessories",
    price: 199.99,
    img: "seed/prod4/300/400",
  },
];

const TrendingProducts = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-12 px-8 md:px-56">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">
          Trending Products
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-between items-center gap-4 mb-8 flex-wrap bg-secondary/50 overflow-hidden">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActive(i)}
              className={`text-xs  md:text-lg font-normal px-4 py-2  w-1/5 transition-all duraction-300 ${
                active === i
                  ? "bg-orange-500 text-white border-orange-500"
                  : null
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p) => (
            <Card
              key={p.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={`https://picsum.photos/${p.img}`}
                alt={p.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <p className="text-xs text-orange-500 mb-1">{p.category}</p>
                <h3 className="font-semibold text-sm mb-1">{p.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="font-bold text-orange-500">${p.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
