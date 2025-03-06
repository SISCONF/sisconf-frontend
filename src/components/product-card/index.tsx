import Image from "next/image";
import Quantity from "../amount";
import { StaticImageData } from "next/image";
import { Heart, ShoppingBagIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Typography } from "../typography";

type ProductCardProps = {
  image?: string | StaticImageData;
  name: string;
  price: number;
  amountProps: {
    initialAmount: number;
    handleChangeAmount: (amount: number) => void;
  };
  variant?: "default" | "green";
  handleAddToBag: () => void;
};

export default function ProductCard({
  image,
  name,
  price,
  amountProps,
  handleAddToBag,
  variant = "default",
}: ProductCardProps) {
  if (variant === "default") {
    return (
      <div className="flex flex-col pt-[0.5rem] pb-[1rem] px-[1.25rem] rounded-2xl w-[240px] h-[270px] shadow-lg text-[1rem]">
        <div>
          <Image
            className="h-full w-full object-cover rounded-xl"
            src={image || ""}
            alt={`A picture of a ${name}.`}
            width={300}
            height={300}
          />
        </div>
        <div className="pt-[0.5rem] h-full flex flex-col justify-between">
          <span className="flex justify-between text-[#43A046]">
            <strong>{name}</strong>
            <strong>R$ {price.toFixed(2)}</strong>
          </span>
          <div className="flex items-center justify-between">
            <button
              id="add-to-shopping-bag-button"
              onClick={handleAddToBag}
              className="py-[0.3125rem] px-[0.475rem] rounded-lg flex items-center gap-[0.25rem] bg-[#237D31] text-white"
            >
              <ShoppingBagIcon size={18} />
              Adicionar
            </button>
            <Quantity
              updateAmount={amountProps.handleChangeAmount}
              initialAmount={amountProps.initialAmount}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="group relative border w-[19.375rem] h-[20rem] rounded shadow">
      <Button className="absolute right-2 top-2 z-10 bg-transparent hover:bg-brand-1">
        <Heart className="h-5 w-5 text-white" />
      </Button>

      <Image
        className="h-full w-full object-cover rounded-xl"
        src={image || ""}
        alt={`Imagem da ${name}.`}
      />

      <div className="absolute inset-0 flex flex-col justify-end items-center">
        <Typography variant={"h6"}>{name}</Typography>
        <Typography
          variant={"h6"}
          fontWeight={"semibold"}
          textColor={"primary"}
        >
          R${price.toFixed(2)}
        </Typography>
      </div>
    </div>
  );
}
