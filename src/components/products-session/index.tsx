"use client";

// Components
import SearchProductAndContact from "../search-product-and-contact";
import ProductCard from "../product-card";
import PaginationButtons from "../pagination-buttons";

// Images
import FoodPlaceholder from "/public/assets/food-placeholder.jpg";
import { useQuery } from "@tanstack/react-query";
import { fetchFoods } from "@/actions/food/fetch-foods";

export default function ProductsSession() {
  const {
    data: foods,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: () => fetchFoods(),
  });

  return (
    <div className="w-[860px]">
      <div>The tabs stay here</div>
      <section>
        <SearchProductAndContact />
        {isLoading ? (
          <span>Carregando...</span>
        ) : error ? (
          <span>Ocorreu um erro.</span>
        ) : (
          foods && (
            <div className="my-[1rem] flex flex-wrap gap-[4.2rem] h-[800px] overflow-y-auto">
              {foods.map((food) => (
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
