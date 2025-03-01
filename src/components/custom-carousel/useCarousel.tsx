import { useState } from "react";
import { Food } from "@/types/food";
import { fetchFoods } from "@/actions/food/fetch-foods";

interface UseCarouselProps {
  initialFoods: Food[];
}

export const useCarousel = ({ initialFoods }: UseCarouselProps) => {
  const [carouselItems, setCarouselItems] = useState<Food[]>(initialFoods);
  const [isSliding, setIsSliding] = useState(false);

  const fetchMore = async (nextUrl: string) => {
    const response = await fetchFoods();
    if (!response) return;

    setCarouselItems([...carouselItems]);
  };

  const handleAfterChange = () => {
    setIsSliding(false);
  };

  return {
    carouselItems,
    handleAfterChange,
    isSliding,
  };
};
