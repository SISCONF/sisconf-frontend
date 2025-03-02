"use client";

// Components
import SearchProductAndContact from "../search-product-and-contact";
import ProductCard from "../product-card";

// Images
import FoodPlaceholder from "/public/assets/food-placeholder.jpg";
import { useQuery } from "@tanstack/react-query";
import { fetchFoods } from "@/actions/food/fetch-foods";
import { ChangeEvent, useMemo, useState } from "react";

export default function ProductsSession() {
  const {
    data: foods,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: () => fetchFoods(),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const [searchString, setSearchString] = useState<string>("");

  const filteredFoods = useMemo(() => {
    if (!foods) return;
    if (!searchString) return foods;
    return foods.filter((food) =>
      food.name.toLowerCase().includes(searchString.toLowerCase())
    );
  }, [foods, searchString]);

  return (
    <div className="w-[860px]">
      <section>
        <SearchProductAndContact handleChange={handleChange} />
        {isLoading ? (
          <span>Carregando...</span>
        ) : error ? (
          <span>Ocorreu um erro.</span>
        ) : (
          filteredFoods && (
            <div className="my-[1rem] flex flex-wrap gap-[4.2rem] h-[800px] overflow-y-auto">
              {filteredFoods.map((food) => (
                <ProductCard
                  name={food.name}
                  price={food.unitPrice}
                  key={food.id}
                  image={food.imageUrl ? food.imageUrl : FoodPlaceholder}
                />
              ))}
            </div>
          )
        )}
      </section>
    </div>
  );
}
