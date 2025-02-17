// Components
import Image from "next/image";
import Quantity from "../quantity";

// Types
import { StaticImageData } from "next/image";

import { ShoppingBagIcon } from "lucide-react";

type ProductCardProps = {
  image: string | StaticImageData;
  name: string;
  price: number;
};

export default function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <div className="flex flex-col pt-[0.5rem] pb-[1rem] px-[1.25rem] rounded-2xl w-[240px] h-[270px] shadow-lg text-[1rem]">
      <div>
        <Image
          className="h-full w-full object-cover rounded-xl"
          src={image}
          alt={`A picture of a ${name}.`}
        />
      </div>
      <div className="pt-[0.5rem] h-full flex flex-col justify-between">
        <span className="flex justify-between text-[#43A046]">
          <strong>{name}</strong>
          <strong>R$ {price.toFixed(2)}</strong>
        </span>
        <div className="flex items-center justify-between">
          <button className="py-[0.3125rem] px-[0.475rem] rounded-lg flex items-center gap-[0.25rem] bg-[#237D31] text-white">
            <ShoppingBagIcon size={18} />
            Adicionar
          </button>
          <Quantity />
        </div>
      </div>
    </div>
  );
}
