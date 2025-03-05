"use client";

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
import StockContent from "./_components/stock-content";
import { OrdersGroup } from "@/types/orders-group";
import { useEffect, useState } from "react";
import { EntrepreneurOrder } from "@/types/entrepreneur-orders";
import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "@/actions/orders/fetch-orders";
import { fetchOrdersGroup } from "@/actions/orders/fetch-orders-group";

export default function Page() {
  const [selectedOrdersGroup, setSelectedOrdersGroup] =
    useState<OrdersGroup | null>(null);
  const [selectedNavItem, setSelectedNavItem] = useState("Pedidos");
  const [selectedOrders, setSelectedOrders] = useState<number[]>([]);

  const { data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: () => fetchOrders(),
  });

  const {
    data: ordersGroup,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: () => fetchOrdersGroup(),
  });

  const handleOrdersSelection = (orderId: number) => {
    setSelectedOrders((prev) => {
      if (prev.includes(orderId)) {
        return prev.filter((selectedOrderId) => selectedOrderId !== orderId);
      }
      return [...prev, orderId];
    });
  };

  const handleAllOrdersSelection = (ordersIds: number[]) => {
    if (ordersIds.length > 0) {
      setSelectedOrders(ordersIds);
      return;
    }
    setSelectedOrders([]);
  };

  const handleNavigation = (item: string) => {
    setSelectedNavItem(item);
  };

  useEffect(() => {
    console.log("Q q é isso????", selectedOrders);
  }, [selectedOrders]);

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
        {selectedNavItem === "Estoque" ? (
          <StockContent />
        ) : selectedOrdersGroup ? (
          <OrdersGroupDetails
            selectedOrdersGroup={selectedOrdersGroup}
            setSelectedOrdersGroup={setSelectedOrdersGroup}
          />
        ) : (
          <EntrepreneurOrders
            orders={orders ?? []}
            ordersGroup={!isLoading && ordersGroup ? ordersGroup : []}
            setSelectedOrdersGroup={setSelectedOrdersGroup}
            handleOrdersSelection={handleOrdersSelection}
            handleAllOrdersSelection={handleAllOrdersSelection}
          />
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}
