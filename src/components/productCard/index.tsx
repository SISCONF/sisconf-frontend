// Components
import Image from "next/image";

// Types
import { StaticImageData } from "next/image";

type ProductCardProps = {
  image: string | StaticImageData;
  name: string;
  price: number;
};

export default function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <div className="py-[1rem] px-[0.75rem] rounded-2xl w-[200px] h-[250px] shadow-lg">
      <div>
        <Image
          className="h-full w-full object-cover rounded-xl"
          src={image}
          alt={`A picture of a ${name}.`}
        />
      </div>
    </div>
  );
}
