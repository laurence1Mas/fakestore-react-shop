import React from "react";
import ProductCard from "@/components/ui/productCard";

const products = [
  {
    id: 1,
    name: "Leather Handbag",
    price: 75,
    img: "400/400?random=1",
    badge: "SALE",
    rating: 4,
  },
  {
    id: 2,
    name: "Classic Shoes",
    price: 120,
    img: "400/400?random=2",
    badge: "NEW",
    rating: 5,
  },
]



function BestSelleProduct() {
    return (
        <section className="container mx-auto py-12">
            <h2 className="text-2xl font-bold mb-6">Best Seller Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
export default BestSelleProduct;