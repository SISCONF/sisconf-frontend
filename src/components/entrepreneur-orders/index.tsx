"use client";

import PageTitle from "../page-title";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Typography } from "../typography";
import { DataTable } from "../ui/data-table";
import { columns } from "../ui/columns";
import { Package } from "lucide-react";
import { AlertDialogComponent } from "../alert-dialog";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ComponentTabs } from "../tabs";
import { OrdersGroup } from "@/types/orders-group";
import { ordersGroupColumns } from "../ui/orders-group-columns";
import { Order } from "@/types/order";
import { QueryObserverBaseResult, RefetchOptions } from "@tanstack/react-query";
import { Table } from "@tanstack/react-table";

export const TABS_LIST = [
  {
    id: 0,
    name: "orders",
    label: "Pedidos",
  },
  {
    id: 1,
    name: "orders-group",
    label: "Grupos de pedidos",
  },
];

export interface EntrepreneurOrdersProps {
  orders: Order[];
  ordersGroup: OrdersGroup[];
  setSelectedOrdersGroup: Dispatch<SetStateAction<OrdersGroup | null>>;
  handleOrdersSelection: (orderId: number) => void;
  handleAllOrdersSelection: (ordersId: number[]) => void;
  handleOrdersGrouping: () => void;
  selectedOrders: number[];
  refetchProps: {
    refetchOrders: (
      options?: RefetchOptions
    ) => Promise<QueryObserverBaseResult<Order[], Error>>;
    refetchOrdersGroup: (
      options?: RefetchOptions
    ) => Promise<QueryObserverBaseResult<OrdersGroup[], Error>>;
  };
}

export default function EntrepreneurOrders({
  orders,
  ordersGroup,
  setSelectedOrdersGroup,
  handleOrdersSelection,
  handleAllOrdersSelection,
  handleOrdersGrouping,
  refetchProps,
  selectedOrders,
}: EntrepreneurOrdersProps) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<{
    id: number;
    name: string;
    label: string;
  }>(TABS_LIST[0]);

  const handleTabChange = (id: number) => {
    const selectedTab = TABS_LIST.find((tab) => tab.id === id);
    setActiveTab(selectedTab || TABS_LIST[0]);
  };

  useEffect(() => {
    switch (activeTab.id) {
      case 0:
        refetchProps.refetchOrders();
        break;
      case 1:
        refetchProps.refetchOrdersGroup();
        break;
    }
  }, [activeTab]);

  return (
    <div className="p-12">
      <PageTitle text="Meus pedidos" />

      <div className="flex flex-wrap items-center w-full justify-between">
        <Card
          title="Total de pedidos"
          content="50"
          className="border rounded-[8px] p-4 border-[#D9D9D9] text-black w-80 h-32"
        >
          <CardTitle>
            <Typography
              variant={"h2"}
              className="text-black text-base font-bold"
            >
              Total de pedidos
            </Typography>
          </CardTitle>
          <CardContent className="p-0 mt-5">
            <Typography
              variant={"body2"}
              className="text-black text-4xl font-bold"
            >
              {orders.length}
            </Typography>
          </CardContent>
        </Card>

        <Card
          title="Total de pedidos"
          content="50"
          className="border rounded-[8px] p-4 border-[#D9D9D9] text-black w-80 h-32"
        >
          <CardTitle>
            <Typography
              variant={"h2"}
              className="text-black text-base font-bold"
            >
              Total de grupos de pedidos
            </Typography>
          </CardTitle>
          <CardContent className="p-0 mt-5">
            <Typography
              variant={"body2"}
              className="text-black text-4xl font-bold"
            >
              {ordersGroup.length}
            </Typography>
          </CardContent>
        </Card>

        <Card
          title="Total de pedidos"
          content="50"
          className="border rounded-[8px] p-4 border-[#D9D9D9] text-black w-80 h-32"
        >
          <CardTitle>
            <Typography
              variant={"h2"}
              className="text-black text-base font-bold"
            >
              Total de pedidos finalizados
            </Typography>
          </CardTitle>
          <CardContent className="p-0 mt-5">
            <Typography
              variant={"body2"}
              className="text-black text-4xl font-bold"
            >
              {orders.filter((order) => order.status === "ACCEPTED").length}
            </Typography>
          </CardContent>
        </Card>

        <div className="flex items-end justify-between w-full mt-9">
          <ComponentTabs
            tabList={TABS_LIST}
            defaultValue="orders"
            onTabChange={handleTabChange}
            width="140px"
            height="32px"
            verticalPadding="8px"
          />

          <button
            className="flex items-center gap-2 bg-[#237D31] disabled:bg-gray-400 disabled:cursor-not-allowed text-white text-[14px] rounded-xl p-2 h-11"
            onClick={() => setOpen(true)}
            disabled={selectedOrders.length < 2}
          >
            <Package size={24} />
            Agrupar pedidos
          </button>
        </div>

        {activeTab.name === "orders" ? (
          <DataTable
            className="mt-4 w-full text-base"
            columns={columns({
              handleOrdersSelection,
              handleAllOrdersSelection,
            })}
            data={orders}
          />
        ) : (
          <DataTable
            className="mt-4 w-full text-base"
            columns={ordersGroupColumns({ setSelectedOrdersGroup })}
            data={ordersGroup}
          />
        )}

        <AlertDialogComponent
          action={handleOrdersGrouping}
          open={open}
          setOpen={setOpen}
          description="Tem certeza que quer agrupar estes grupos?"
          title="Agrupar Pedidos"
          actionButtonText="Agrupar"
        />
      </div>
    </div>
  );
}
