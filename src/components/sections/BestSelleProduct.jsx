import React from "react";
import ProductCard from "@/components/ui/productCard";
import useBestSeller from "@/hooks/useBestSeller";

function BestSelleProduct() {
    const { products, loading } = useBestSeller();
    if (loading)        return (
            <section className="py-12 text-center">
                <p>Loading best seller products...</p>
            </section>
        );
    return (
        <section className="py-12 px-8 md:px-56">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-6">Best Seller Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default BestSelleProduct;