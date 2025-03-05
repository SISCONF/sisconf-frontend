"use client"

import Image from "next/image";
import StatusTag from "../status-tag";
import { X } from "lucide-react";
import { OrderItem } from "@/types/order-item";
import { formatPrice } from "@/lib/utils";
import { Typography } from "../typography";
import Amount from "../amount";
import { useState } from "react";
import { GroceryBagItem } from "@/types/grocery-bag";
import { FoodCategory } from "@/types/food";

export interface ResumeOrderItemList extends React.HtmlHTMLAttributes<HTMLDivElement> {
    order: GroceryBagItem;
    onRemove: (id:number) => void;
    userType: "customer" | "entrepreneur"
}

export function ResumeOrderItemList ({
    order, 
    userType,
    className,
    onRemove,
    ...props
}: ResumeOrderItemList) {
    const { food, amount } = order;
    const foodCategoryLabels: Record<FoodCategory, string> = {
        [FoodCategory.Fruit]: "Fruta",
        [FoodCategory.Vegetable]: "Vegetal",
        [FoodCategory.Others]: "Outros",

    }

    const [quantity, setQuantity] = useState(amount);

    return (
        <>
            <div className={className}{...props}>
                <div className="flex items-center flex-1 gap-4 w-full">
                    <Image 
                        alt="Food image"
                        src={food.imageUrl}
                        width={85}
                        height={91}
                    />

                    <div className="flex flex-col gap-1">
                        <span>{food.name}</span>
                        <span>{foodCategoryLabels[food.category]}</span>
                    </div>
                </div>

                {
                    userType === "customer" 
                    ? 
                        <Amount updateAmount={setQuantity} initialAmount={quantity} /> 
                    : 
                        <Typography variant={"body1"}>{quantity}</Typography> 
                }


                <span>{formatPrice(food.unitPrice)}</span>

                { userType === "customer" && 
                    (
                        <>                            
                            <button onClick={() => onRemove(food.id)} className="">
                                <X className="absolute top-0 right-0" />        
                            </button>
                        </>
                    ) 
                }
            </div>
            <hr className="bg-[#D9D9D9]" />
        </>
    );
}
