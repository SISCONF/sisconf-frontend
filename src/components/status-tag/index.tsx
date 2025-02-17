import * as React from 'react';

export interface StatusTagProps {
    text: string 
    color: string
    bgColor: string
}

export default function StatusTag ({
    text,
    color,
    bgColor
}: StatusTagProps) {
  return (
    <div className={`text-${color} bg-${bgColor} p-2 rounded-[8px]`}>
      {text}
    </div>
  );
}
