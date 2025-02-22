"use client";

// Components
import { CirclePlusIcon, CircleMinusIcon } from "lucide-react";

import { ChangeEvent, ChangeEventHandler, useState } from "react";

export default function Quantity() {
  const [amount, setAmount] = useState<number>(1);
  const decreaseable = amount > 1;

  const handleAmountInputChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const quantityInputValue = Number(e.target.value);

    if (quantityInputValue < 1 || isNaN(quantityInputValue)) {
      setAmount(1);
      return;
    }
    setAmount(quantityInputValue);
  };

  return (
    <div className="w-fit flex text-[#237D31] font-bold items-center gap-[0.5rem] bg-[#F0F4EA] py-[0.3125rem] px-[0.475rem] rounded-lg">
      <CirclePlusIcon
        size={21}
        onClick={() => setAmount((prevState) => prevState + 1)}
      />
      <input
        type="text"
        min={1}
        className="focus:outline-none text-center bg-[#F0F4EA]"
        value={amount}
        inputMode="numeric"
        pattern="\d+"
        onChange={handleAmountInputChange}
        onBlur={handleAmountInputChange}
        style={{
          width:
            amount.toString().length > 3
              ? "18px"
              : `${amount.toString().length + 1}ch`,
        }}
      />
      <CircleMinusIcon
        size={21}
        onClick={() => decreaseable && setAmount((prevState) => prevState - 1)}
        className={
          decreaseable ? "cursor-pointer" : "cursor-not-allowed text-gray-400"
        }
      />
    </div>
  );
}
