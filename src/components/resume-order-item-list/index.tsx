import Image from "next/image";
import StatusTag from "../status-tag";
import { X } from "lucide-react";
import Quantity from "../amount";
import { OrderItem } from "@/types/order-item";
import { formatPrice } from "@/lib/utils";

export interface ResumeOrderItemList {
  order: OrderItem;
  onRemove: (id: number) => void;
}

export function ResumeOrderItemList({ order, onRemove }: ResumeOrderItemList) {
  const { id, name, description, image, price, status } = order;

  return (
    <div className="max-[843px] h-24 relative grid grid-cols-[3fr_1fr_1fr_1fr] place-items-center gap-12 pr-12 font-medium">
      <div className="flex items-center gap-4">
        <Image alt="Food image" src={image} width={85} height={91} />

        <div className="flex flex-col gap-1">
          <span>{name}</span>
          <span>{description}</span>
        </div>
      </div>

      <Quantity />

      <span>{formatPrice(price)}</span>

      <StatusTag text={status} status={status} />

      <button onClick={() => onRemove(id)} className="">
        <X className="absolute top-0 right-0" />
      </button>
    </div>
  );
}
