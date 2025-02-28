"use client";

import Header from '@/components/header';
import PageTitle from '@/components/page-title';
import { ResumeOrderCard } from '@/components/resume-order-card';
import { ResumeOrderItemList } from '@/components/resume-order-item-list';
import ResumeOrdersList from '@/components/resume-orders-list';
import { OrderItem } from '@/types/order-item';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function ProductsSummary () {
  const [orders, setOrders] = useState<OrderItem[]>(ordersList);

  const removeOrder = (id: number) => {
    setOrders(orders.filter((order) => order.id !== id));
  }

  const total = orders.reduce((acc, order) => acc + order.price, 0);

  return (
    <div className='px-16'>
      <Header />

      <PageTitle 
        text='Meus pedidos'
        icon={<ArrowLeft size={24} />} 
      />

      <div className='flex justify-between'>
        <ResumeOrdersList 
          className='max-w-[932px] px-11 py-5 flex flex-col gap-6 bg-slate-50 rounded-[8px]'
          userType='customer'
        >
          {orders.map((order) => (
            <ResumeOrderItemList 
              className='max-[843px] h-24 relative grid grid-cols-[3fr_1fr_1fr_1fr] place-items-center gap-12 pr-12 font-medium'
              userType='customer'
              key={order.id}
              order={order}
              onRemove={() => removeOrder(order.id)}
            />
          ))}
        </ResumeOrdersList>
        <ResumeOrderCard total={total} />
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
    price: 200.00,
    status: "Aguardando",
  },
  {
    id: 2,
    image: "/strawberry.svg",
    name: "Banana",
    description: "lorem ipsum dolor siamet",
    price: 200.00,
    status: "Aprovado",
  },
  {
    id: 3,
    image: "/strawberry.svg",
    name: "Maçã",
    description: "lorem ipsum dolor siamet",
    price: 150.00,
    status: "Aprovado",
  },
  {
    id: 4,
    image: "/strawberry.svg",
    name: "Laranja",
    description: "lorem ipsum dolor siamet",
    price: 250.00,
    status: "Aguardando",
  },
];