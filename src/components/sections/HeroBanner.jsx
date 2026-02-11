import * as React from "react";
import HeroBanner1 from "../../assets/images/herosection.png";
import Slide4 from "../../assets/images/slide4.png";
import Slide3 from "../../assets/images/slide3.png";
import slideM1 from "../../assets/images/slideM1.png";
import slideM2 from "../../assets/images/slideM2.png";
import slideM3 from "../../assets/images/slideM3.png";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function HeroBanner() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
  }

  const isMobile = useIsMobile();

  const slides = [
    {
      description: (
        <span>
          Discover the latest <br /> trends in fashion with our new arrivals
        </span>
      ),
      image1: HeroBanner1,
      image2: slideM1,
      button: (
        <Button
          variant={isMobile ? "outline" : "default"}
          size="lg"
          className="bg-transparent md:bg-primary hover:bg-primary-foreground/90 text-background hover:text-foreground"
        >
          Shop Now
        </Button>
      ),
    },
    {
      description: (
        <span>
          Discover the latest <br /> trends in fashion with our new arrivals
        </span>
      ),
      image1: Slide3,
      image2: slideM2,
      button: (
        <Button
          variant={isMobile ? "outline" : "default"}
          size="lg"
          className="bg-transparent md:bg-primary hover:bg-primary-foreground/90 text-background hover:text-foreground"
        >
          Shop Now
        </Button>
      ),
    },
    {
      description: (
        <span>
          Limited time offers <br /> on selected items
        </span>
      ),
      image1: Slide4,
      image2: slideM3,
      button: (
        <Button
          variant={isMobile ? "outline" : "default"}
          size="lg"
          className="bg-transparent md:bg-primary hover:bg-primary-foreground/90 text-background hover:text-foreground"
        >
          Shop Now
        </Button>
      ),
    },
  ];

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full h-[400px] md:h-screen overflow-hidden">
      <Carousel setApi={setApi} className="w-full h-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              {/* A regler -----100% ou full  */}
              <Card className="flex md:block items-center justify-center w-full h-[60vh] md:h-screen relative md:static ">
                <CardContent className="w-[90%] md:w-full h-1/2 md:h-full flex flex-col-reverse md:flex-row justify-center items-center md:px-48 text-lg md:text-4xl font-bold bg-gradient-to-l from-orange-700 to-primary/90 md:bg-none md:bg-background text-background md:text-foreground rounded-xl md:rounded-none  overflow-hidden ">
                  <div
                    className={
                      isMobile
                        ? "w-full text-start text-xs space-y-6 pr-36 bg-transparent"
                        : "w-1/2 text-center space-y-8 bg-transparent"
                    }
                  >
                    <h1>{slide.description}</h1>
                    {slide.button}
                  </div>

                  <img
                    src={isMobile ? slide.image2 : slide.image1}
                    alt=""
                    className={
                      isMobile
                        ? "absolute -right-6 bottom-10 w-[250px] h-[250px] object-contain "
                        : "  md:w-1/2 md:h-full  relative  md:-bottom-20 "
                    }
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination buttons */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-3 w-3 rounded-full transition-all",
              current === index
                ? "bg-primary w-6"
                : "bg-muted md:bg-foreground hover:bg-muted-foreground/10 md:hover:bg-gray-600 ",
            )}
          />
        ))}
      </div>
    </div>
  );
}
