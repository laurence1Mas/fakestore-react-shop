import React from "react";
const brands = [
    "CHANEL", 
    "KENZO", 
    "GUCCI", 
    "PRADA", 
    "MOSCHINO",
];

function BrandsSection() {
    return (
        <section className="py-12 px-8 md:px-56 bg-gray-50">
            <h2 className="text-2xl font-bold mb-6">Brands & Clients</h2>
            <div className="container mx-auto flex flex-wrap justify-center gap-8 md:gap-16 px-4">
            {brands.map((brand) => (
                <span
                key={brand} className="text-xl md:text-2xl font-bold text-gray-300 tracking-widest hover:text-gray-500 transition-colors">
                    {brand}
                </span>
            ))}
            </div>
        </section>
    );
}
export default BrandsSection;