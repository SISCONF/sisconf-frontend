"use client";

import PageTitle from "@/components/page-title";
import { ArrowLeft } from "lucide-react";
import OrdersList from "./_components/orders-list";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProductsSummaryPage() {
  useEffect(() => {
    document.title = "Minha Sacola";
  }, []);

  const router = useRouter();

  return (
    <div className="px-16">
      <PageTitle
        text="Meus pedidos"
        icon={<ArrowLeft size={24} />}
        onClick={() => router.back()}
      />
      <OrdersList />
    </div>
  );
}
