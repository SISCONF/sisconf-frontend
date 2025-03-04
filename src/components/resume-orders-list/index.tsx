import * as React from "react";

export interface ResumeOrdersListProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  userType: "customer" | "entrepreneur"
  headerClassName: string
}

export default function ResumeOrdersList ({
  children,
  className,
  headerClassName,
  userType,
  ...props
}: ResumeOrdersListProps) {
  return (
    <div className={className}{...props}>
      <div className={headerClassName}>
        <span>Produto</span>
        <span>Quantidade</span>
        <span>Preço</span>
        {userType === "customer" && <span>Status</span>}
      </div>
      {children}
      <div className='flex items-end gap-4 ml-auto font-bold text-center mt-8'>
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
