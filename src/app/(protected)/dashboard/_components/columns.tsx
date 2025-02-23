"use client";

import { ColumnDef } from "@tanstack/react-table";
import Quantity from "@/components/quantity";
import Image, { StaticImageData } from "next/image";

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

export const columns: ColumnDef<StockFood>[] = [
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
      const amount = parseInt(row.getValue("amount"));
      return <Quantity initialQuantity={amount} />;
    },
  },
];
