// Components
import Image from "next/image";
import { Typography } from "@/components/typography";
import ProductsSession from "@/components/products-session";

// Images
import VeggiesHeader from "/public/assets/products-header-veggies.png";
import StrawberriesBanner from "/public/assets/strawberries-banner.jpg";
import CarrotsBanner from "/public/assets/carrots-banner.jpg";

export const metadata = {
  title: "Nossos Produtos",
};

export default function Products() {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <Image
          src={VeggiesHeader}
          alt="a wooden table with fruits, veggies and seeds on it."
          className="w-screen"
          priority
        />
        <Typography
          variant="h1"
          className="md:text-[2rem] xl:text-[3rem] text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          Explore nosso <span className="text-[#43A046]">catálogo</span>
        </Typography>
      </div>
      <main className="py-[1.56rem] px-[1.875rem] flex justify-between gap-[2.5rem]">
        <div className="flex-1">
          <Image
            className="rounded-[1rem] object-cover h-full"
            src={StrawberriesBanner}
            alt="a bunch of strawberries together"
          />
        </div>
        <ProductsSession />
        <div className="flex-1">
          <Image
            className="rounded-[1rem] object-cover h-full"
            src={CarrotsBanner}
            alt="a bunch of carrots together"
            priority
          />
        </div>
      </main>
    </div>
  );
}
