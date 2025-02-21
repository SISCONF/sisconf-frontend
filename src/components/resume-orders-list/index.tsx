import * as React from "react";

export interface ResumeOrdersListProps {
  children: React.ReactNode;
}

export function ResumeOrdersList({ children }: ResumeOrdersListProps) {
  return (
    <div className="max-w-[932px] px-11 py-5 flex flex-col gap-6 bg-slate-50 rounded-[8px]">
      <div className="w-full grid grid-cols-[3fr_1fr_1fr_1fr] gap-20 text-[#103E13] font-bold">
        <span>Produto</span>
        <span>Quantidade</span>
        <span>Preço</span>
        <span>Status</span>
      </div>
      {children}
      <div className="flex items-end gap-4 ml-auto font-bold text-center">
        <button className="bg-slate-950 p-2 text-white rounded">
          Esvaziar sacola
        </button>
        <a href="/orders" className="text-green-800 p-2 underline">
          Adicionar mais produtos
        </a>
      </div>
    </div>
  );
}
