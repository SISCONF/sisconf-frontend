import Image from "next/image";
import StatusTag from "../status-tag";
import { X } from "lucide-react"

export interface ResumeOrderItemList {
    status: "Aguardando" | "Aprovado"
}

export function ResumeOrderItemList ({
    status
}: ResumeOrderItemList) {
  return (
    <div className="max-[843px] h-24 relative grid grid-cols-[3fr_1fr_1fr_1fr] place-items-center gap-12 pr-12">
        <div className="flex items-center gap-4">
            <Image 
                alt="Food image"
                src={"/strawberry.svg"}
                width={85}
                height={91}
            />

            <div className="flex flex-col gap-1">
                <span>Morango</span>
                <span>lorem ipsum dolor siamet</span>
            </div>
        </div>

        <div className="">1</div>

        <span>R$ 300,00</span>

        <StatusTag 
            text={status} 
            status={status}
        />

        <X className="absolute top-0 right-0" />
    </div>
  );
}
