import * as React from "react";
import HeroBanner1 from "../../assets/images/herosection.png";
import HeroBanner2 from "../../assets/images/herosection2.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function HeroBanner() {
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);

  const slides = [
    {
      image: HeroBanner1,
      description: "Uscover ethnical cultivated and Fair-Trade gifts",
    },
    { image: HeroBanner2},
    { image: HeroBanner2 },
  ];

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full h-[300px] md:h-screen">
      <Carousel setApi={setApi} className="w-full h-full">
        <CarouselContent>
          {slides.map((_, index) => (
            <CarouselItem key={index}>
              <Card className="h-full">
                <CardContent className="flex h-full items-center justify-center text-4xl font-bold">
                  Slide {index + 1}
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
                ? "bg-black w-6"
                : "bg-gray-400 hover:bg-gray-600",
            )}
          />
        ))}
      </div>
    </div>
  );
}
