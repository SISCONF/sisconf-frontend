// Components
import Link from "next/link";

// Icons
import { SearchIcon, MailIcon } from "lucide-react";
import { ChangeEvent } from "react";

type SearchProductAndContact = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchProductAndContact({
  handleChange,
}: SearchProductAndContact) {
  return (
    <div className="flex items-center justify-between">
      <div className="max-w-[18rem] w-full relative flex items-center px-[0.6875rem] py-[0.43rem] rounded-[0.5rem] border-[0.135rem] border-[#43A046]">
        <button className="pr-[0.6875rem]">
          <SearchIcon size={20} color="#43A046" />
        </button>
        <input
          className="focus:outline-none w-full"
          type="text"
          name="name"
          id="food-name"
          placeholder="Buscar por mais alimentos"
          onChange={handleChange}
        />
      </div>
      <p>
        <strong className="text-[#43A046]">Não</strong> encontrou o que queria?
        <Link href="/contact">
          <strong className="text-[#43A046] pr-[0.3125rem]">
            {" "}
            Fale conosco
          </strong>
          <MailIcon size={20} color="#43A046" className="inline-block" />
        </Link>
      </p>
    </div>
  );
}
