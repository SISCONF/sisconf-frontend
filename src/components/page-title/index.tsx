"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Typography } from "../typography";

interface PageTitleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  text: string;
}

export default function PageTitle({  
    icon,
    text,
    onClick
}: PageTitleProps) {
    
    return (
        <button onClick={onClick} className="flex items-center gap-2 text-[#237D31] mb-12">
            {icon}
        
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
                {text}
            </h2>
        </button>
    )
}