import * as React from 'react';

export interface ResumeOrderCardProps {
}

export function ResumeOrderCard ({

}: ResumeOrderCardProps) {
  return (
    <div className='max-w-[343px] h-80 bg-slate-50 text-slate-950 p-7 rounded-[8px]'>
        <p className='text-xl font-bold'>Resumo do pedido</p>

        <div className='w-72 flex justify-between items-center mt-8 text-base'>
            <span>Total</span>
            <span>R$ 1.200,00</span>
        </div>

        <hr className='mt-2' />

        <button className='w-full bg-green-700 text-white py-2 mt-10 rounded text-base font-medium'>
            Finalizar pedido
        </button>
    </div>
  );
}
