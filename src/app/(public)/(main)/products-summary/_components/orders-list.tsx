"use client";

import { createOrder } from '@/actions/orders/create-order';
import { ResumeOrderCard } from '@/components/resume-order-card';
import { ResumeOrderItemList } from '@/components/resume-order-item-list';
import ResumeOrdersList from '@/components/resume-orders-list';
import { Order } from '@/types/order';
import { OrderItem } from '@/types/order-item';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function ProductsSummary () {

  const [orders, setOrders] = useState<OrderItem[]>(ordersList);

  const removeOrder = (id: number) => {
    setOrders(orders.filter((order) => order.id !== id));
  }

  const total = orders.reduce((acc, order) => acc + order.price, 0);

  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: (data) => {
      console.log("Pedido criado com sucesso!", data);
    },
    onError: (error) => {
      console.error("Erro ao criar o pedido:", error);
    },
  });
  
  const handleSubmit = () => {
    const ordersData: Order = {
      foodsQuantities: orders.map((order) => ({
        foodId: order.id,
        quantity: order.amount,
        quantityType: "KG"
      }))
    }

    console.log("orders data: ", JSON.stringify(ordersData))
    mutation.mutate(ordersData);
  };


  return (
    <div>
      <div className='flex justify-between gap-x-5'>
        <ResumeOrdersList 
          className='max-w-[932px] flex-grow px-11 py-5 flex flex-col bg-slate-50 rounded-[8px]'
          headerClassName='w-full grid grid-cols-[3fr_1fr_1fr_1fr] text-[#103E13] font-bold'
          userType='customer'
        >
          {orders.map((order) => (
            <ResumeOrderItemList 
              className='max-[843px] py-2 relative grid grid-cols-[3fr_1fr_1fr_1fr] place-items-center pr-12 font-medium'
              userType='customer'
              key={order.id}
              order={order}
              onRemove={() => removeOrder(order.id)}
            />
          ))}
        </ResumeOrdersList>
        <ResumeOrderCard onSubmit={handleSubmit} total={total} />
      </div>
    </div>
  );
}

const ordersList: OrderItem[] = [
  {
    id: 1,
    image: "/strawberry.svg",
    name: "Morango",
    description: "lorem ipsum dolor siamet",
    amount: 2,
    price: 200.00,
    status: "Aguardando",
  },
  {
    id: 2,
    image: "/strawberry.svg",
    name: "Banana",
    description: "lorem ipsum dolor siamet",
    amount: 2,
    price: 200.00,
    status: "Aprovado",
  },
  {
    id: 3,
    image: "/strawberry.svg",
    name: "Maçã",
    description: "lorem ipsum dolor siamet",
    amount: 2,
    price: 150.00,
    status: "Aprovado",
  },
  {
    id: 4,
    image: "/strawberry.svg",
    name: "Laranja",
    description: "lorem ipsum dolor siamet",
    amount: 2,
    price: 250.00,
    status: "Aguardando",
  },
];