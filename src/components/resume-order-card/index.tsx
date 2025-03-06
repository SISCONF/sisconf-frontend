import { createOrder } from '@/actions/orders/create-order';
import { useGroceryBag } from '@/hooks/grocery-bag-context';
import { useAuth } from '@/hooks/useAuth';
import { formatPrice } from '@/lib/utils';
import { useMutation } from '@tanstack/react-query';
import * as React from 'react';

export interface ResumeOrderCardProps {
  total: number;
  onSubmit: () => void
}

export function ResumeOrderCard ({
  total,
  onSubmit
}: ResumeOrderCardProps) {
  const { user, isAuthenticated } = useAuth()
  const { groceryBag, removeFromBag, addToBag } = useGroceryBag(
    isAuthenticated && user && user.id ? user.id : null
  )

  return (
    <div className='max-w-[343px] h-80 bg-slate-50 text-black p-7 rounded-[8px] font-medium'>
        <p className='text-xl font-bold'>Resumo do pedido</p>

        <div className='w-72 flex justify-between items-center mt-8 text-base'>
            <span>Total</span>
            <span>{formatPrice(total)}</span>
        </div>

        <hr className='mt-2' />

        <button 
          className={`
            w-full py-2 mt-10 rounded text-base font-medium
            ${groceryBag.length > 0 ? "bg-[#237D31] text-white" : "bg-gray-400 text-gray-200 cursor-not-allowed"}  
          `}
          type='submit'
          onClick={onSubmit}
          disabled={groceryBag.length <= 0}
        >
          Finalizar pedido
        </button>
    </div>
  );
}
