"use client";

// Components
import { CirclePlusIcon, CircleMinusIcon } from "lucide-react";

import { ChangeEvent, ChangeEventHandler } from "react";

type QuantityProps = {
  initialAmount?: number;
  updateAmount: (amount: number) => void;
};

export default function Amount({
  updateAmount,
  initialAmount = 1,
}: QuantityProps) {
  const decreaseable = initialAmount > 1;

  const handleAmountInputChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const amountInputValue = Number(e.target.value);

    if (amountInputValue < 1 || isNaN(amountInputValue)) {
      updateAmount(amountInputValue);
      return;
    }
    updateAmount(amountInputValue);
  };

  return (
    <div className="w-fit flex text-[#237D31] font-bold items-center gap-[0.5rem] bg-[#F0F4EA] py-[0.3125rem] px-[0.475rem] rounded-lg">
      <CirclePlusIcon
        id="increase-product-amount-button"
        className="cursor-pointer"
        size={21}
        onClick={() => updateAmount(initialAmount + 1)}
      />
      <input
        type="text"
        id="product-amount-indicator"
        min={1}
        className="focus:outline-none text-center bg-[#F0F4EA]"
        value={initialAmount}
        inputMode="numeric"
        pattern="\d+"
        onChange={handleAmountInputChange}
        onBlur={handleAmountInputChange}
        style={{
          width:
            initialAmount.toString().length > 3
              ? "18px"
              : `${initialAmount.toString().length + 1}ch`,
        }}
      />
      <CircleMinusIcon
        id="decrease-product-amount-button"
        size={21}
        onClick={() => decreaseable && updateAmount(initialAmount - 1)}
        className={
          decreaseable ? "cursor-pointer" : "cursor-not-allowed text-gray-400"
        }
      />
    </div>
  );
}
