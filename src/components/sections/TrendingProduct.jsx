import { useState } from "react";
import ProductCard from "@/components/ui/productCard";
import useTrending from "@/hooks/useTrending";

const categories = [
  "all",
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics"
];

const TrendingProducts = () => {
  const { products, loading } = useTrending();
  const [active, setActive] = useState("all");

  if (loading)
    return (
      <section className="py-12 text-center">
        Loading trending products...
      </section>
    );

  const filtered =
    active === "all"
      ? products
      : products.filter(p => p.category === active);

  return (
    <section className="py-12 px-8 md:px-56">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">
          Trending Products
        </h2>

        {/* Tabs */}
        <div className="flex bg-muted justify-center gap-3 mb-8 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2  text-sm transition
              ${active === cat
                  ? "bg-orange-500 text-white"
                  : "bg-muted hover:bg-muted/60"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
