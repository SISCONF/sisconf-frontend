import { useEffect, useState } from "react";
import { Food } from "@/types/food";
import ProductCard from "../product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useCarousel } from "./useCarousel";
import FoodPlaceholder from "/public/assets/food-placeholder.jpg";

interface CustomCarouselProps {
  initialFoods: Food[];
}

export function CustomCarousel({ initialFoods }: CustomCarouselProps) {
  const [api, setApi] = useState<any>();
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const { carouselItems } = useCarousel({ initialFoods });

  useEffect(() => {
    if (!api || !autoScrollEnabled) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api, autoScrollEnabled]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      setApi={setApi}
      className="container w-fit py-4"
    >
      <CarouselContent>
        {carouselItems.map((product) => (
          <CarouselItem
            key={product.id}
            className="basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <ProductCard
              name={product.name}
              price={product.unitPrice}
              image={FoodPlaceholder}
              variant="green"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
