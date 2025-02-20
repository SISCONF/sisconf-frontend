"use client"

import { useRouter } from "next/navigation"

interface PageTitleProps {
    icon?: React.ReactNode
    text: string
}

export default function PageTitle({  
    icon,
    text
}: PageTitleProps) {
    const router = useRouter()

    return (
        <div className="flex items-center gap-2 text-primary text-green-700 mb-12">
            <button onClick={() => router.back()}>
                {icon}
            </button>

            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
                {text}
            </h2>
        </div>
    )
}