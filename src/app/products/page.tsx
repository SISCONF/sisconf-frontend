// Components
import Image from "next/image";
import { Typography } from "@/components/typography";
import ProductsSession from "@/components/productsSession";

// Images
import VeggiesHeader from "/public/assets/products-header-veggies.png";
import StrawberriesBanenr from "/public/assets/strawberries-banner.jpg";
import CarrotsBanner from "/public/assets/carrots-banner.jpg";

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
      <main className="border py-[1.56rem] px-[1.875rem] flex justify-between gap-[2.5rem]">
        <Image
          className="rounded-[1.25rem] object-cover max-w-[20%]"
          src={StrawberriesBanenr}
          alt="a bunch of strawberries together"
        />
        <ProductsSession />
        <Image
          className="rounded-[1.25rem] object-cover max-w-[20%]"
          src={CarrotsBanner}
          alt="a bunch of carrots together"
        />
      </main>
    </>
  );
}
