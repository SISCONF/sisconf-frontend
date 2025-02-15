import Image from "next/image";
import VeggiesHeader from "/public/assets/products-header-veggies.png";
import { Typography } from "@/components/typography";

export default function Products() {
  return (
    <>
      <header className="relative">
        <Image
          src={VeggiesHeader}
          alt="a wooden table with fruits, veggies and seeds on it."
          className="w-screen"
        />
        <Typography
          variant="h1"
          className="md:text-[2rem] xl:text-[3rem] text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          Explore nosso <span className="text-[#43A046]">catálogo</span>
        </Typography>
      </header>
      <main className="border-b-gray-950 border">Main</main>
    </>
  );
}
