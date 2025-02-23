import FoodPlaceholderImage from "/public/assets/food-placeholder.jpg";

const dummyData = [
  {
    id: 1,
    image: FoodPlaceholderImage,
    food: "Maçã",
    type: "Fruta",
    amount: 2,
  },
  {
    id: 2,
    image: FoodPlaceholderImage,
    food: "Maçã",
    type: "Fruta",
    amount: 5,
  },
  {
    id: 3,
    image: FoodPlaceholderImage,
    food: "Maçã",
    type: "Fruta",
    amount: 3,
  },
  {
    id: 4,
    image: FoodPlaceholderImage,
    food: "Maçã",
    type: "Fruta",
    amount: 7,
  },
  {
    id: 5,
    image: FoodPlaceholderImage,
    food: "Maçã",
    type: "Fruta",
    amount: 11,
  },
];

export default function StockContent() {
  return (
    <div className="border border-black px-[3rem] py-[3rem]">
      Hello World :)
    </div>
  );
}
