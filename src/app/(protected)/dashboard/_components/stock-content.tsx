import FoodPlaceholderImage from "/public/assets/food-placeholder.jpg";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { StockFood } from "./columns";

const dummyData: StockFood[] = [
  {
    id: 1,
    food: { image: FoodPlaceholderImage, title: "Maçã" },
    type: "Fruta",
    amount: 2,
  },
  {
    id: 2,
    food: { image: FoodPlaceholderImage, title: "Banana" },
    type: "Fruta",
    amount: 10,
  },
  {
    id: 3,
    food: { image: FoodPlaceholderImage, title: "Uva" },
    type: "Fruta",
    amount: 6,
  },
];

export default function StockContent() {
  return (
    <div className="border border-black px-[3rem] py-[3rem]">
      <DataTable data={dummyData} columns={columns} />
    </div>
  );
}
