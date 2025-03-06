"use client";

import { createOrder } from '@/actions/orders/create-order';
import { ResumeOrderCard } from '@/components/resume-order-card';
import { ResumeOrderItemList } from '@/components/resume-order-item-list';
import ResumeOrdersList from '@/components/resume-orders-list';
import { useGroceryBag } from '@/hooks/grocery-bag-context';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { Order } from '@/types/order';
import { useMutation } from '@tanstack/react-query';

export default function ProductsSummary () {
  const { user, isAuthenticated } = useAuth()
  const { groceryBag, removeFromBag, addToBag, clearBag } = useGroceryBag(
    isAuthenticated && user && user.id ? user.id : null
  )

  const removeOrder = (id: number) => {
    removeFromBag(id);
  }

  const totalPrice = groceryBag.reduce((total, item) => {
    return total + item.food.unitPrice * item.amount;
  }, 0);

  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      toast({
        duration: 5000,
        title: "Pedido realizado com sucesso",
        description: "Você será redirecionado para a página de pedidos",
        variant: "default",
      })

      clearBag();

      setTimeout(() => {
        // router.push("/orders");
      }, 2000);
    },
    onError: (error) => {
      toast({
        duration: 5000,
        title: "Erro ao finalizar pedido",
        description: error?.message || "Ocorreu um erro ao tentar criar pedido",
        variant: "destructive",
      });
    },
  });
  
  const handleSubmit = () => {
    const ordersData: Order = {
      foodsQuantities: groceryBag.map((order) => ({
        foodId: order.food.id,
        quantity: order.amount,
        quantityType: "KG"
      }))
    }

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
          {groceryBag.map((item) => (
            <ResumeOrderItemList 
              className='max-[843px] py-2 relative grid grid-cols-[3fr_1fr_1fr_1fr] place-items-center pr-12 font-medium'
              userType='customer'
              key={item.food.id}
              order={item}
              onRemove={() => removeOrder(item.food.id)}
            />
          ))}
        </ResumeOrdersList>
        <ResumeOrderCard onSubmit={handleSubmit} total={totalPrice} />
      </div>
    </div>
  );
}

