import React, { useState, useMemo } from "react";
import ProductCard from "@/components/ui/productCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import useProducts from "@/hooks/useProducts";

export default function Product() {
  const { products: allProducts, loading } = useProducts();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(1000);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const perPage = 8;

  // categories dynamiques depuis API
  const categories = useMemo(() => {
    const unique = [...new Set(allProducts.map(p => p.category))];
    return ["All", ...unique];
  }, [allProducts]);

  // prix max dynamique
  const maxPrice = useMemo(() => {
    if (!allProducts.length) return 1000;
    return Math.ceil(Math.max(...allProducts.map(p => p.price)));
  }, [allProducts]);

  // filtrage
  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      const categoryMatch =
        selectedCategory === "All" || p.category === selectedCategory;
      const priceMatch = p.price <= priceRange;
      return categoryMatch && priceMatch;
    });
  }, [allProducts, selectedCategory, priceRange]);

  // pagination
  const totalPages = Math.ceil(filtered.length / perPage);

  const products = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  if (loading) {
    return <div className="pt-40 text-center">Loading products...</div>;
  }

  return (
    <div className="pt-28 px-4 md:px-12 pb-16">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center space-y-6 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold">
          Discover products made for everyday life
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          Browse our curated collection of quality items.
        </p>
      </section>

      <div className="max-w-7xl mx-auto grid md:grid-cols-[260px_1fr] gap-10">

        {/* ASIDE FILTER */}
        <aside className="space-y-8">
          <Card className="p-5 space-y-4">
            <h2 className="font-semibold text-lg">Category</h2>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setSelectedCategory(c);
                  setCurrentPage(1);
                }}
                className={`block text-left w-full hover:text-orange-500 capitalize ${selectedCategory === c ? "font-semibold text-orange-500" : ""
                  }`}
              >
                {c}
              </button>
            ))}
          </Card>

          <Card className="p-5 space-y-4">
            <h2 className="font-semibold text-lg">
              Max Price: ${priceRange}
            </h2>
            <input
              type="range"
              min={0}
              max={maxPrice}
              value={priceRange}
              onChange={(e) => {
                setPriceRange(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="w-full"
            />
          </Card>
        </aside>

        {/* PRODUCTS */}
        <div className="space-y-10">
          <div className="grid grid-cols-2 md:grid-cols-3 mt-auto lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div className="h-full mt-auto" key={product.id} onClick={() => setSelectedProduct(product)}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <Button
                key={i}
                variant={currentPage === i + 1 ? "default" : "outline"}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background max-w-lg w-full rounded-2xl p-6 space-y-4 relative">
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>

            <img
              src={selectedProduct.img}
              className="rounded-xl w-full h-64 object-contain bg-white p-6"
            />

            <h2 className="text-2xl font-semibold">{selectedProduct.name}</h2>

            <p className="text-muted-foreground">
              {selectedProduct.description}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">
                ${selectedProduct.price}
              </span>
              <Button className="bg-orange-500 hover:bg-orange-600">
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

