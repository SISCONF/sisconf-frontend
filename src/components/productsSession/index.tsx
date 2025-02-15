// Components
import Image from "next/image";

// Image
import SearchIcon from "/public/assets/search.svg";

export default function ProductsSession() {
  return (
    <div>
      <div className="border border-black">The tabs stay here</div>
      <div>
        <div className="w-[24.875rem] relative flex items-center px-[0.6875rem] py-[0.43rem] rounded-[0.5rem] border-[0.135rem] border-[#43A046]">
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
        <div></div>
      </div>
    </div>
  );
}
