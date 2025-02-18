import * as React from 'react';

export interface ResumeOrdersListProps {
  children: React.ReactNode
}

export default function ResumeOrdersList ({
  children
}: ResumeOrdersListProps) {
  return (
    <div className='max-w-[932px] px-11 py-5 flex flex-col gap-6'>
      <div className='w-full grid grid-cols-[3fr_1fr_1fr_1fr] gap-12'>
        <span>Produto</span>
        <span>Quantidade</span>
        <span>Preço</span>
        <span>Status</span>
      </div>
      {children}
      <div className='flex items-end gap-4 ml-auto'>
        <button>Esvaziar sacola</button>
        <button>Adicionar mais produtos</button>
      </div>
    </div>
  );
}
