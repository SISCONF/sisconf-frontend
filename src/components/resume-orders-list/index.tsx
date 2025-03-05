import { useGroceryBag } from "@/hooks/grocery-bag-context";
import { useAuth } from "@/hooks/useAuth";
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
  const { user, isAuthenticated } = useAuth()
  const { groceryBag, removeFromBag } = useGroceryBag(
    isAuthenticated && user && user.id ? user.id : null
  )

  return (
    <div className={className}{...props}>
      <div className={headerClassName}>
        <span>Produto</span>
        <span>Quantidade</span>
        <span>Preço</span>
      </div>
      {
        groceryBag.length > 0 ? (
          <>
            {children}
            <div className='flex items-end gap-4 ml-auto font-bold text-center mt-8'>
              {
                userType === "customer" ? (
                  <>
                    <button className='bg-slate-950 p-2 text-white rounded'>
                      Esvaziar sacola
                    </button>
                    <a href='/products' className='text-green-800 p-2 underline'>
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
          </>
        ) : (
          <p className="text-center text-gray-500 py-4">
            Nenhum item na sacola.
          </p>
        )
      }
    </div>
  );
}
