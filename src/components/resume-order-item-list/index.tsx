import Image from "next/image";
import StatusTag from "../status-tag";
import { X } from "lucide-react"

export interface ResumeOrderItemList {
}

export function ResumeOrderItemList ({

}: ResumeOrderItemList) {
  return (
    <div className="max-[843px] h-24 relative flex flex-wrap gap-20 items-center">
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
            text="Aguardando" 
            color="white" 
            bgColor="green-500" 
        />

        <X className="absolute top-0 right-0" />
    </div>
  );
}
