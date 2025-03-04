import { createOrder } from '@/actions/orders/create-order';
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
  return (
    <div className='max-w-[343px] h-80 bg-slate-50 text-black p-7 rounded-[8px] font-medium'>
        <p className='text-xl font-bold'>Resumo do pedido</p>

        <div className='w-72 flex justify-between items-center mt-8 text-base'>
            <span>Total</span>
            <span>{formatPrice(total)}</span>
        </div>

        <hr className='mt-2' />

        <button 
          className='w-full bg-[#237D31] text-white py-2 mt-10 rounded text-base font-medium'
          type='submit'
          onClick={onSubmit}
        >
          Finalizar pedido
        </button>
    </div>
  );
}
