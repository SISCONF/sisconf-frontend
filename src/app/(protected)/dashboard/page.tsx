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
  SidebarContent,
  SidebarInset,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import StockContent from "./_components/stock-content";
import { OrdersGroup } from "@/types/orders-group";
import { useEffect, useState } from "react";
import { EntrepreneurOrder } from "@/types/entrepreneur-orders";
import { SIDE_BAR_NAV_ITEMS } from "./_components/const";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "@/actions/orders/fetch-orders";


const ordersGroup: OrdersGroup[] = [
  {
    id: 1,
    date: "2023-01-01",
    sheet: "Sheet1",
    total: 100,
    status: "Entregue",
    items: "Item1, Item2",
  },
  {
    id: 2,
    date: "2023-01-02",
    sheet: "Sheet2",
    total: 200,
    status: "Recebido",
    items: "Item3, Item4",
  },
  {
    id: 3,
    date: "2023-01-03",
    sheet: "Sheet3",
    total: 300,
    status: "Fechado",
    items: "Item5, Item6",
  },
];

const orders: EntrepreneurOrder[] = [
  {
    id: "1",
    orderId: 101,
    date: "2023-01-01",
    client: "Client1",
    status: "Pending",
    amount: 150,
    items: 2,
  },
  {
    id: "2",
    orderId: 102,
    date: "2023-01-02",
    client: "Client2",
    status: "Completed",
    amount: 250,
    items: 3,
  },
  {
    id: "3",
    orderId: 103,
    date: "2023-01-03",
    client: "Client3",
    status: "Shipped",
    amount: 350,
    items: 4,
  },
];

export default function Page() {
  const [selectedOrdersGroup, setSelectedOrdersGroup] = useState<OrdersGroup | null>(null);
  const [selectedNavItem, setSelectedNavItem] = useState("pedidos");

  const { 
    data
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () => fetchOrders()
  })

  const handleNavigation = (item: string) => {
    setSelectedNavItem(item);
  }

  return (
    <SidebarProvider>
      <AppSidebar onNavigation={handleNavigation} />
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
        {/* <StockContent /> */}

        {selectedNavItem === "Estoque" && <StockContent />}
        {selectedNavItem === "Pedidos" && 
            selectedOrdersGroup ? (
              <OrdersGroupDetails 
                selectedOrdersGroup={selectedOrdersGroup}
                setSelectedOrdersGroup={setSelectedOrdersGroup}
              />
            ) : (
              <EntrepreneurOrders 
                orders={data ?? []} 
                ordersGroup={ordersGroup}
                setSelectedOrdersGroup={setSelectedOrdersGroup}
              />
            )
        }

      </SidebarInset>
    </SidebarProvider>
  );
}
