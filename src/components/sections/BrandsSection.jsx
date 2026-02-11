import React from "react";
import Marque1 from "../../assets/images/marque1.png";
import Marque2 from "../../assets/images/marque2.png";
import Marque3 from "../../assets/images/marque3.png";
import Marque4 from "../../assets/images/marque4.png";
import Marque5 from "../../assets/images/marque5.png";
import Marque6 from "../../assets/images/marque6.png";

const brands = [Marque1, Marque2, Marque3, Marque4, Marque5, Marque6];

function BrandsSection() {
  return (
    <section className="py-12  ">
      <h2 className="text-2xl font-bold mb-6  px-8 md:px-56">
        Brands & Clients
      </h2>

      <div className="grid grid-cols-3 justify-center items-center gap-8 md:grid-cols-6  px-8 py-8 md:px-56 bg-secondary/50">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="w-full h-10 flex items-center justify-center"
          >
            <img
              src={brand}
              alt={`Brand ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrandsSection;
