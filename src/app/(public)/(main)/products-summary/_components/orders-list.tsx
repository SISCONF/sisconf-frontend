"use client";

import { useState } from "react";
import { OrderItem } from "@/types/order-item";
import { ResumeOrderCard } from "@/components/resume-order-card";
import { ResumeOrderItemList } from "@/components/resume-order-item-list";
import { ResumeOrdersList } from "@/components/resume-orders-list";
import { ORDERS_LIST } from "./const";

export function OrdersList() {
  const [orders, setOrders] = useState<OrderItem[]>(ORDERS_LIST);

  const removeOrder = (id: number) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const total = orders.reduce((acc, order) => acc + order.price, 0);
  return (
    <div className="flex justify-between">
      <ResumeOrdersList>
        {orders.map((order) => (
          <ResumeOrderItemList
            key={order.id}
            order={order}
            onRemove={() => removeOrder(order.id)}
          />
        ))}
      </ResumeOrdersList>
      <ResumeOrderCard total={total} />
    </div>
  );
}
