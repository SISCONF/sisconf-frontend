"use client";

// Components
import SearchProductAndContact from "../search-product-and-contact";
import ProductCard from "../product-card";

// Images
import FoodPlaceholder from "/public/assets/food-placeholder.jpg";

// Utilities
import { useQuery } from "@tanstack/react-query";
import { fetchFoods } from "@/actions/food/fetch-foods";
import { ChangeEvent, useMemo, useState } from "react";

import { useGroceryBag } from "@/contexts/grocery-bag-context";
import { GroceryBagItem } from "@/types/grocery-bag";

export default function ProductsSession() {
  const {
    data: foods,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: () => fetchFoods(),
  });

  const { addToBag } = useGroceryBag();

  const [amounts, setAmounts] = useState<Record<string, number>>({});
  const [searchText, setSearchText] = useState("");

  const filteredFoods: GroceryBagItem[] | undefined = useMemo(() => {
    if (foods) {
      return foods
        .filter((food) =>
          food.name.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((food) => ({
          food,
          amount: amounts[food.id] || 1,
        }));
    }
  }, [searchText, foods, amounts]);

  const updateAmount = (foodId: number, amount: number) => {
    setAmounts((prev) => ({ ...prev, [foodId]: amount }));
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="w-[860px]">
      <section>
        <SearchProductAndContact handleChange={handleSearch} />
        {isLoading ? (
          <span>Carregando...</span>
        ) : error ? (
          <span>Ocorreu um erro.</span>
        ) : (
          filteredFoods && (
            <div className="my-[1rem] flex flex-wrap gap-[4.2rem] h-[800px] overflow-y-auto">
              {filteredFoods.map(({ food, amount }) => (
                <ProductCard
                  amountProps={{
                    handleChangeAmount: (amount: number) =>
                      updateAmount(food.id, amount),
                    initialAmount: amount,
                  }}
                  handleAddToBag={() => addToBag({ food, amount: amount })}
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
