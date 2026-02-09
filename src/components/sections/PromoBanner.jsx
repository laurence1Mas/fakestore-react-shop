import React from "react";
import { Button } from "@/components/ui/button";

const PromoBanner = () => {
  return (
    <section className="relative w-full h-[450px] flex items-center bg-[#EAC8C4] overflow-hidden font-sans">
      
      {/* L'IMAGE avec fondu pour supprimer la bordure gauche */}
      <div 
        className="absolute right-0 top-0 h-full w-full md:w-[65%] z-10"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%)'
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
          alt="Fashion Model"
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* LE TEXTE */}
      <div className="container mx-auto px-6 md:px-24 z-20 relative pointer-events-none">
        <div className="pointer-events-auto max-w-lg">
          <p className="text-[11px] md:text-[13px] tracking-[0.25em] uppercase mb-2 font-medium text-gray-800 antialiased">
            Fashion doesn't lead it follows
          </p>
          
          {/* TAILLE DIMINUÉE ICI : passage de 8xl à 6xl (ou 5xl sur mobile) */}
          <h1 className="text-4xl md:text-6xl font-[900] leading-tight text-black mb-1 tracking-tight antialiased">
            30% OFF
          </h1>
          
          <p className="text-sm md:text-base tracking-[0.15em] mb-8 uppercase text-gray-800 font-semibold antialiased">
            On Premium Shirts
          </p>

          <Button 
            variant="default" 
            size="lg" 
            className="bg-[#FF7E1A] hover:bg-[#E66D12] text-white rounded-none px-10 py-6 uppercase text-[10px] font-bold tracking-[0.2em] transition-all shadow-none"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;