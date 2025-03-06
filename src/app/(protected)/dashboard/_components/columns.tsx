"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import Amount from "@/components/amount";
import { StockFoodInfo } from "./stock-content";

export type FoodData = {
  image: string | StaticImageData;
  title: string;
};

export type StockFood = {
  id: number;
  food: FoodData;
  type: string;
  amount: number;
};

export const columns = (
  foods: StockFood[],
  updateAmount: (foodId: number, amount: number) => void,
  updateSelected: (foodId: number, amount: number) => void,
  updateAll: (selectedItems: StockFoodInfo[]) => void
): ColumnDef<StockFood>[] => [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => {
            table.toggleAllPageRowsSelected(!!value);
            const selectedFoods = value
              ? table.getRowModel().rows.map((row) => {
                  const rowFood = foods.find(
                    (food) => food.id === row.original.id
                  );
                  return {
                    foodId: row.original.id,
                    amount: rowFood ? rowFood.amount : row.original.amount,
                  };
                })
              : [];
            updateAll(selectedFoods);
          }}
          aria-label="Select all"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value);
            const rowFood = foods.find((food) => food.id === row.original.id);
            updateSelected(
              row.original.id,
              rowFood ? rowFood.amount : row.original.amount
            );
          }}
          aria-label="Select row"
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "food",
    header: "Comida",
    cell: ({ row }) => {
      const { image, title }: FoodData = row.getValue("food");

      return (
        <div className="flex gap-[1rem] items-center">
          <div className="rounded-lg">
            <Image
              width={120}
              src={image}
              alt="An apple in a place with grey background"
              className="rounded-lg"
            />
          </div>
          <span>{title}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Tipo",
  },
  {
    accessorKey: "amount",
    header: "Quantidade",
    cell: ({ row }) => {
      const foodAmount = foods.find((food) => food.id === row.original.id);
      return (
        <Amount
          initialAmount={foodAmount ? foodAmount.amount : 1}
          updateAmount={(newAmount) => updateAmount(row.original.id, newAmount)}
        />
      );
    },
  },
];
