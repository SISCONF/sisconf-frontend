// Components
import Image from "next/image";
import Link from "next/link";

// Images
import SearchIcon from "/public/assets/search.svg";
import EmailContactIcon from "/public/assets/contact-us.svg";

export default function SearchProductAndContact() {
  return (
    <div className="flex items-center">
      <div className="max-w-[24.875rem] w-full relative flex items-center px-[0.6875rem] py-[0.43rem] rounded-[0.5rem] border-[0.135rem] border-[#43A046]">
        <button className="pr-[0.6875rem]">
          <Image
            width={35}
            height={35}
            src={SearchIcon}
            alt="A green magnifying glass"
          />
        </button>
        <input
          className="focus:outline-none text-[1.3rem] w-full"
          type="text"
          name="name"
          id="food-name"
          placeholder="Buscar por mais alimentos"
        />
      </div>
      <p>
        <strong className="text-[#43A046]">Não</strong> encontrou o que queria?
        <Link href="/contact" className="flex items-center gap-[0.3125rem]">
          <strong className="text-[#43A046]"> Fale conosco</strong>
          <Image
            width={35}
            height={35}
            src={EmailContactIcon}
            alt="a green email inbox with a person alongside it"
          />
        </Link>
      </p>
    </div>
  );
}
