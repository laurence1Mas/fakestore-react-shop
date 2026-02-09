import React from "react";
import { Button } from "@/components/ui/button";
import Profil1 from "../../assets/images/herosection.png";
import Profil2 from "../../assets/images/herosection2.png";

function HeroBanner() {
  return (
    <>
      <section className="w-full min-h-[60vh] md:h-[85vh] mt-20 md:mt-32  md:px-56 bg-muted- flex flex-col-reverse md:flex-row items-center justify-center overflow-hidden">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl md:font-bold font-semibold my-5 md:my-8">
            Uscover ethnical <br /> cultivated and Fair-Trade gifts
          </h2>
          <Button variant="default" size="lg">
            Shop Now
          </Button>
        </div>

        <div className="w-1/2 h-auto flex items-center justify-center">
          <img
            src={Profil1}
            alt="image hero section"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
}

export default HeroBanner;
