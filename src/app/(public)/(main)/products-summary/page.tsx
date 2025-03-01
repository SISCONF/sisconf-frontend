import { PageTitle } from "@/components/page-title";
import { OrderItem } from "@/types/order-item";
import { ArrowLeft } from "lucide-react";
import { OrdersList } from "./_components/orders-list";

export default function ProductsSummaryPage() {
  return (
    <div className="px-16">
      <PageTitle text="Meus pedidos" icon={<ArrowLeft size={24} />} />
      <OrdersList />
    </div>
  );
}
