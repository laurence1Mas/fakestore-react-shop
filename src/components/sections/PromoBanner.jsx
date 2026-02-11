import React from "react";
import { Button } from "@/components/ui/button";
import PromoImg from "../../assets/images/promo.png";

function PromoBanner() {
  return (
    <section className="relative w-full h-[15rem] flex justify-between items-center md:px-56 bg-red-200/30 overflow-hidden">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-8 md:px-0 py-4 ">
        <p className="text-lg md:xl  tracking-[0] uppercase  font-medium ">
          Fashion doesn't lead it follows
        </p>

        <h1 className="text-3xl md:text-4xl font-[900] leading-tight tracking-tight ">
          30% <span>OFF</span>
        </h1>

        <p className="text-lg md:text-xl tracking-[0] mb-3 uppercase font-semibold">
          On Premium Shirts
        </p>

        <Button variant="default" size="lg" className="shadow-none">
          Shop Now
        </Button>
      </div>

      <div className="hidden md:block w-1/3 h-full overflow-hidden ">
        <img
          src={PromoImg}
          alt="Fashion Model"
          className="w-full h-full object-cover object-center "
        />
      </div>
    </section>
  );
}

export default PromoBanner;
