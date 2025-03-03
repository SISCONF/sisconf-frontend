"use client";

import FoodPlaceholderImage from "/public/assets/food-placeholder.jpg";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { StockFood } from "./columns";
import { Button } from "@/components/ui/button";
import { Trash2Icon, CirclePlusIcon, RefreshCcwIcon } from "lucide-react";
import { useState } from "react";

export type StockFoodInfo = {
  foodId: number;
  amount: number;
};

const dummyData: StockFood[] = [
  {
    id: 1,
    food: { image: FoodPlaceholderImage, title: "Maçã" },
    type: "Fruta",
    amount: 1,
  },
  {
    id: 2,
    food: { image: FoodPlaceholderImage, title: "Banana" },
    type: "Fruta",
    amount: 1,
  },
  {
    id: 3,
    food: { image: FoodPlaceholderImage, title: "Uva" },
    type: "Fruta",
    amount: 1,
  },
];

export default function StockContent() {
  const [foodsToActOn, setFoodsToActOn] = useState<StockFoodInfo[]>([]);
  const [foods, setFoods] = useState<StockFood[]>(dummyData);

  const updateAmount = (foodId: number, amount: number) => {
    setFoods((prevState) =>
      prevState.map((food) => (food.id === foodId ? { ...food, amount } : food))
    );
  };

  const updateSelected = (foodId: number, amount: number) => {
    const foundFood = foodsToActOn.find((food) => food.foodId === foodId);
    if (foundFood) {
      setFoodsToActOn((prevState) =>
        prevState.filter(
          (selectedFood) => selectedFood.foodId !== foundFood.foodId
        )
      );
      return;
    }
    setFoodsToActOn((prevState) => [...prevState, { foodId, amount }]);
  };

  const updateAll = (selected: StockFoodInfo[]) => {
    setFoodsToActOn(selected);
  };

  return (
    <div className="px-[3rem] py-[3rem]">
      <div className="flex gap-4 pb-4">
        <Button
          disabled={foodsToActOn.length === 0}
          className="bg-green-700 hover:bg-green-900 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          <RefreshCcwIcon />
          Atualizar quantidade
        </Button>
        <Button
          disabled={foodsToActOn.length === 0}
          className="bg-red-500 hover:bg-red-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          <Trash2Icon />
        </Button>
        <Button className="bg-green-700 hover:bg-green-900 ml-auto">
          <CirclePlusIcon />
          Adicionar comida ao estoque
        </Button>
      </div>
      <DataTable
        data={foods}
        columns={columns(foods, updateAmount, updateSelected, updateAll)}
      />
    </div>
  );
}
