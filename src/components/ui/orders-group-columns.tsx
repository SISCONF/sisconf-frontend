"use client";

import { OrdersGroup, OrdersGroupStatus } from "@/types/orders-group";
import { Order } from "@/types/order";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import StatusTag, { StatusTagProps } from "../status-tag";
import { formatDate, formatPrice, formatFoodName } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

type OrdersGroupColumnsProps = {
  setSelectedOrdersGroup: Dispatch<SetStateAction<OrdersGroup | null>>;
};

export const ordersGroupColumns = ({
  setSelectedOrdersGroup,
}: OrdersGroupColumnsProps): ColumnDef<OrdersGroup>[] => [
  {
    accessorKey: "id",
    header: "ID do grupo",
  },
  {
    accessorKey: "orderDate",
    header: "Data",
    cell: ({ row }) => {
      const groupOrderDate: string = row.getValue("orderDate");
      return <span>{formatDate(groupOrderDate)}</span>;
    },
  },
  {
    accessorKey: "docUrl",
    header: "Planilha de pedidos",
    cell: ({ row }) => {
      const sheetUrl = row.original.docUrl;
      return (
        <a href={sheetUrl} className="text-[#237D31] font-medium">
          {sheetUrl}
        </a>
      );
    },
  },
  {
    accessorKey: "currentStatus",
    header: "Status",
    cell: ({ row }) => {
      const statusMap: Record<OrdersGroupStatus, StatusTagProps["status"]> = {
        [OrdersGroupStatus.Entregue]: "Entregue",
        [OrdersGroupStatus.Fechado]: "Fechado",
        [OrdersGroupStatus.Recebido]: "Recebido",
      };
      const statusValue: OrdersGroupStatus = row.getValue("currentStatus");
      const statusText = statusMap[statusValue];

      return <StatusTag status={statusText} text={statusText} />;
    },
  },
  {
    accessorKey: "totalPrice",
    header: "Total",
    cell: ({ row }) => {
      const total = parseFloat(row.getValue("totalPrice"));

      return <div className="font-medium">{formatPrice(total)}</div>;
    },
  },
  {
    accessorKey: "orders",
    header: "Itens",
    cell: ({ row }) => {
      const orders: Order[] = row.getValue("orders");
      const ordersFoodsNames: string = orders
        .map((order) => order.foods)
        .map((foodsList) => formatFoodName(foodsList))
        .join(", ");
      return <span>{ordersFoodsNames}</span>;
    },
  },
  {
    accessorKey: "actions",
    header: "Itens",
    cell: ({ row }) => {
      const handleViewDetails = () => setSelectedOrdersGroup(row.original);

      return (
        <button
          className="bg-[#F0F4EA] text-[#237D31] p-1 rounded-[8px]"
          onClick={handleViewDetails}
        >
          <Eye size={20} />
        </button>
      );
    },
  },
];
