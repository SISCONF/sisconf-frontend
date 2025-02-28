import * as React from 'react';

export interface ResumeOrdersListProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  userType: "customer" | "entrepreneur"
}

export default function ResumeOrdersList ({
  children,
  className,
  userType,
  ...props
}: ResumeOrdersListProps) {
  return (
    <div className={className}{...props}>
      <div className='w-full grid grid-cols-[3fr_1fr_1fr] gap-20 text-[#103E13] font-bold'>
        <span>Produto</span>
        <span>Quantidade</span>
        <span>Preço</span>
        {userType === "customer" && <span>Status</span>}
      </div>
      {children}
      <div className='flex items-end gap-4 ml-auto font-bold text-center'>
        {
          userType === "customer" ? (
            <>
              <button className='bg-slate-950 p-2 text-white rounded'>
                Esvaziar sacola
              </button>
              <a href='/orders' className='text-green-800 p-2 underline'>
                Adicionar mais produtos
              </a>
            </>
          ) : (
            <button className='bg-slate-950 p-2 text-white rounded'>
              Desfazer grupo de pedidos
            </button>
          )
        }
      </div>
    </div>
  );
}
