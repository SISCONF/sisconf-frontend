// Components
import Image from "next/image";
import Link from "next/link";

// Images
import SearchIcon from "/public/assets/search.svg";
import EmailContactIcon from "/public/assets/contact-us.svg";

export default function SearchProductAndContact() {
  return (
    <div className="flex items-center justify-between">
      <div className="max-w-[18rem] w-full relative flex items-center px-[0.6875rem] py-[0.43rem] rounded-[0.5rem] border-[0.135rem] border-[#43A046]">
        <button className="pr-[0.6875rem]">
          <Image src={SearchIcon} alt="A green magnifying glass" />
        </button>
        <input
          className="focus:outline-none w-full"
          type="text"
          name="name"
          id="food-name"
          placeholder="Buscar por mais alimentos"
        />
      </div>
      <p>
        <strong className="text-[#43A046]">Não</strong> encontrou o que queria?
        <Link href="/contact">
          <strong className="text-[#43A046] pr-[0.3125rem]">
            {" "}
            Fale conosco
          </strong>
          <Image
            className="inline"
            src={EmailContactIcon}
            alt="a green email inbox with a person alongside it"
          />
        </Link>
      </p>
    </div>
  );
}
