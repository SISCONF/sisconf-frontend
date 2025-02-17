// Components
import Image from "next/image";

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
    <div className="flex flex-col py-[1rem] px-[0.75rem] rounded-2xl w-[200px] h-[250px] shadow-lg text-[1rem]">
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
          <strong>R$ {price}</strong>
        </span>
        <div>
          <button className="py-[0.125rem] px-[0.25rem] rounded flex items-center gap-[0.5rem] bg-[#237D31] text-white">
            <ShoppingBagIcon size={18} />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
