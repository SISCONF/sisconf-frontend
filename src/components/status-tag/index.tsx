import * as React from 'react';

export interface StatusTagProps {
    text: string 
    status: "Aguardando" | "Aprovado"
}

export default function StatusTag ({
    text,
    status
}: StatusTagProps) {
  const statusStyles = {
    Aguardando: "text-yellow-700 bg-yellow-200",
    Aprovado: "text-green-700 bg-green-200"
  }

  return (
    <div 
      className={`${statusStyles[status]} w-24 h-8 px-4 py-4 text-[14px] font-medium flex items-center justify-center rounded-[8px]`}
    >
      {text}
    </div>
  );
}
