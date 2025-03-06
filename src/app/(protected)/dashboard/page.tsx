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
import {
  OrdersGroup,
  OrdersGroupCreation,
  OrdersGroupStatus,
} from "@/types/orders-group";
import { useMemo, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchOrders } from "@/actions/orders/fetch-orders";
import { fetchOrdersGroup } from "@/actions/orders/fetch-orders-group";
import { createOrdersGroup } from "@/actions/orders-group/create-orders-group";
import { Order } from "@/types/order";
import { useToast } from "@/hooks/use-toast";

export default function Page() {
  const [selectedOrdersGroup, setSelectedOrdersGroup] =
    useState<OrdersGroup | null>(null);
  const [selectedNavItem, setSelectedNavItem] = useState("Pedidos");
  const [selectedOrders, setSelectedOrders] = useState<number[]>([]);
  const { toast } = useToast();

  const { data: orders, refetch: refetchOrders } = useQuery({
    queryKey: ["orders"],
    queryFn: () => fetchOrders(),
  });

  orders?.sort((orderA, orderB) => {
    return orderA.id < orderB.id ? -1 : 1;
  });

  const {
    data: ordersGroup,
    refetch: refetchOrdersGroup,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["ordersGroup"],
    queryFn: () => fetchOrdersGroup(),
  });

  const filteredOrders: Order[] | undefined = useMemo(() => {
    if (!ordersGroup || !orders) return orders;

    const ordersIds = new Set(
      ordersGroup.flatMap((orderGroup) =>
        orderGroup.orders.map((order) => order.id)
      )
    );

    return orders.filter((order) => !ordersIds.has(order.id));
  }, [ordersGroup, orders]);

  const mutation = useMutation({
    mutationFn: createOrdersGroup,
    onSuccess: (data) => {
      toast({
        duration: 5000,
        title: "Pedidos Agrupados",
        description: "Seus pedidos foram agrupados com sucesso!",
        variant: "default",
      });
      handleAllOrdersSelection([]);
      refetchOrdersGroup();
    },
    onError: (error) => {
      toast({
        duration: 5000,
        title: "Erro ao Agrupar Pedidos",
        description: error.message || "Erro desconhecido",
        variant: "destructive",
      });
    },
  });

  const handleOrdersGrouping = () => {
    const ordersGroupData: OrdersGroupCreation = {
      ordersIds: selectedOrders,
      currentStatus: OrdersGroupStatus.Recebido,
      docUrl: "",
    };

    mutation.mutate(ordersGroupData);
  };

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
            orders={filteredOrders ? filteredOrders : []}
            selectedOrders={selectedOrders}
            ordersGroup={!isLoading && ordersGroup ? ordersGroup : []}
            setSelectedOrdersGroup={setSelectedOrdersGroup}
            handleOrdersSelection={handleOrdersSelection}
            handleAllOrdersSelection={handleAllOrdersSelection}
            handleOrdersGrouping={handleOrdersGrouping}
            refetchProps={{ refetchOrders, refetchOrdersGroup }}
          />
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}
