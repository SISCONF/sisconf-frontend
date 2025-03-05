"use client"

import Image from "next/image";
import StatusTag from "../status-tag";
import { X } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Typography } from "../typography";
import Amount from "../amount";
import { useState } from "react";
import { Order } from "@/types/order";

export interface ResumeOrderItemList extends React.HtmlHTMLAttributes<HTMLDivElement> {
    order: Order;
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
    const { id, foods, totalPrice, foodsQuantities, status } = order;

    const [quantity, setQuantity] = useState(foodsQuantities[0].quantity);

    return (
        <>
            <div className={className}{...props}>
                <div className="flex items-center flex-1 gap-4 w-full">
                    <Image 
                        alt="Food image"
                        src={foods[0].imageUrl}
                        width={85}
                        height={91}
                    />

                    <div className="flex flex-col gap-1">
                        <span>{foods[0].name}</span>
                        <span>{foods[0].category}</span>
                    </div>
                </div>

                {
                    userType === "customer" ? <Amount updateAmount={setQuantity} initialAmount={quantity} /> : <Typography variant={"body1"}>1</Typography> 
                }


                <span>{formatPrice(totalPrice)}</span>

                { userType === "customer" && 
                    (
                        <>
                            <StatusTag text={status} status={status} />
                            
                            <button onClick={() => onRemove(id)} className="">
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
