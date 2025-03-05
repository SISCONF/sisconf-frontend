"use client";

import { OrdersGroup } from "@/types/orders-group";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import StatusTag from "../status-tag";
import { formatDate, formatPrice } from "@/lib/utils";
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
      const statusValue: "Recebido" | "Aprovado" | "Entregue" =
        row.getValue("currentStatus");

      return <StatusTag status={statusValue} text={statusValue} />;
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
    accessorKey: "items",
    header: "Itens",
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
