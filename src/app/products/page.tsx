// Components
import Image from "next/image";
import { Typography } from "@/components/typography";
import ProductsSession from "@/components/productsSession";

// Images
import VeggiesHeader from "/public/assets/products-header-veggies.png";
import StrawberriesBanenr from "/public/assets/strawberries-banner.png";
import CarrotsBanner from "/public/assets/carrots-banner.png";

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
      <main className="border-b-gray-950 border py-[1.56rem] px-[1.875rem] flex gap-[2.5rem] items-center">
        <Image
          src={StrawberriesBanenr}
          alt="a bunch of strawberries together"
        />
        <ProductsSession />
        <Image src={CarrotsBanner} alt="a bunch of carrots together" />
      </main>
    </>
  );
}
