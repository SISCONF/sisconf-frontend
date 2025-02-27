"use client"

import { AppSidebar } from "@/app/(protected)/dashboard/_components/app-sidebar";
import EntrepreneurOrders from "@/components/entrepreneur-orders";
import { OrdersGroupDetails } from "@/components/order-group-details";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { EntrepreneurOrder } from "@/types/entrepreneur-orders";
import { OrdersGroup } from "@/types/orders-group";
import { useState } from "react";

export const data: EntrepreneurOrder[] = [
  {
    id: "1",
    orderId: 101,
    date: "13/02/2025",
    client: "Alice Johnson",
    status: "Aguardando",
    amount: 250.75,
    items: 3,
  },
  {
    id: "2",
    orderId: 102,
    date: "19/02/2025",
    client: "Bob Williams",
    status: "Aprovado",
    amount: 180.50,
    items: 2,
  },
  {
    id: "3",
    orderId: 103,
    date: "18/02/2025",
    client: "Charlie Brown",
    status: "Aprovado",
    amount: 0.0,
    items: 0,
  },
  {
    id: "4",
    orderId: 104,
    date: "17/02/2025",
    client: "Diana Prince",
    status: "Aguardando",
    amount: 320.00,
    items: 5,
  },
  {
    id: "5",
    orderId: 105,
    date: "16/02/2025",
    client: "Ethan Hunt",
    status: "Aprovado",
    amount: 0.0,
    items: 4,
  },
  {
    id: "6",
    orderId: 106,
    date: "15/02/2025",
    client: "Fiona Gallagher",
    status: "Aguardando",
    amount: 99.99,
    items: 1,
  },
]

export const ordersGroup: OrdersGroup[] = [
  {
    id: 1,
    date: "13/02/2025",
    sheet: "https://planilha1.xml",
    status: "Fechado",
    total: 250.75,
    items: "10 itens",
  },
  {
    id: 2,
    date: "13/02/2025",
    sheet: "https://planilha2.xml",
    status: "Recebido",
    total: 300.00,
    items: "10 itens",
  },
  {
    id: 3,
    date: "13/02/2025",
    sheet: "https://planilha3.xml",
    status: "Entregue",
    total: 300.00,
    items: "10 itens",
  },
  {
    id: 4,
    date: "13/02/2025",
    sheet: "https://planilha4.xml",
    status: "Entregue",
    total: 300.00,
    items: "10 itens",
  },
  {
    id: 5,
    date: "13/02/2025",
    sheet: "https://planilha5.xml",
    status: "Fechado",
    total: 300.00,
    items: "10 itens",
  },
  {
    id: 6,
    date: "13/02/2025",
    sheet: "https://planilha6.xml",
    status: "Fechado",
    total: 300.00,
    items: "10 itens",
  },
  {
    id: 7,
    date: "13/02/2025",
    sheet: "https://planilha7.xml",
    status: "Recebido",
    total: 300.00,
    items: "10 itens",
  },
  {
    id: 8,
    date: "13/02/2025",
    sheet: "https://planilha8.xml",
    status: "Entregue",
    total: 300.00,
    items: "10 itens",
  },
]


export default function Page() {
  const [selectedOrdersGroup, setSelectedOrdersGroup] = useState<OrdersGroup | null>(null);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div> */}
        {
          selectedOrdersGroup ? (
            <OrdersGroupDetails 
              selectedOrdersGroup={selectedOrdersGroup}
            />
          ) : (
            <EntrepreneurOrders 
              orders={data} 
              ordersGroup={ordersGroup}
              setSelectedOrdersGroup={setSelectedOrdersGroup}
            />
          )
        }
      </SidebarInset>
    </SidebarProvider>
  );
}
