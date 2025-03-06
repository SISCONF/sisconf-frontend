import * as React from 'react';

export interface StatusTagProps {
    text: string 
    status: "Aguardando" | "Aprovado" | "Fechado" | "Recebido" | "Entregue"
}

export default function StatusTag ({
    text,
    status
}: StatusTagProps) {
  const statusStyles = {
    Aguardando: "text-[#86640C] bg-[#F3DDA7]",
    Aprovado: "text-[#237D31] bg-[#F0F4EA]",
    Fechado: "text-[#FF3709] bg-[#FFD9D0]",
    Recebido: "text-[#86640C] bg-[#F3DDA7]",
    Entregue: "text-[#237D31] bg-[#F0F4EA]"
  }

  return (
    <div 
      className={`${statusStyles[status]} w-24 h-8 px-4 py-4 text-[14px] font-medium flex items-center justify-center rounded-[8px]`}
    >
      {text}
    </div>
  );
}
