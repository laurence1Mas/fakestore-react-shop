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
        shortdescription: "A comfortable casual t-shirt"
    },
    {
        id: 2,
        name: "Classic Shoes",
        price: 120,
        img: "400/400?random=2",
        badge: "NEW",
        rating: 5,
        shortdescription: "A comfortable casual t-shirt"
    },
    {
        id: 3,
        name: "Elegant Watch",
        price: 250,
        img: "400/400?random=3",
        badge: "BEST",
        rating: 4,
        shortdescription: "A comfortable casual t-shirt "
    },
    {
        id: 4,
        name: "Stylish Sunglasses",
        price: 90,
        img: "400/400?random=4",
        badge: "HOT",
        rating: 3.5,
        shortdescription: "A comfortable casual t-shirt "
    }
]

function NewArrivalSection() {
    return (
        <section className="py-12 px-8 md:px-56">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-6">New Arrival</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default NewArrivalSection;   