import FoodPlaceholderImage from "/public/assets/food-placeholder.jpg";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { StockFood } from "./columns";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";

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
  return (
    <div className="px-[3rem] py-[3rem]">
      <div className="flex gap-4 pb-4">
        <Button className="bg-green-700 hover:bg-green-900">
          Atualizar quantidade
        </Button>
        <Button className="bg-red-500 hover:bg-red-700">
          <Trash2Icon />
        </Button>
      </div>
      <DataTable data={dummyData} columns={columns} />
    </div>
  );
}
