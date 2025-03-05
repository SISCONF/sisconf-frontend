"use client";

import { formatPrice, cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import StatusTag, { StatusTagProps } from "../status-tag";
import { Checkbox } from "@/components/ui/checkbox";
import { Order, OrderStatus } from "@/types/order";
import { Food } from "@/types/food";
import { formatDate } from "@/lib/utils";

export const columns: ColumnDef<Order>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "id",
    header: "ID do pedido",
  },
  {
    accessorKey: "orderDate",
    header: "Data",
    cell: ({ row }) => {
      const orderDate: string = row.getValue("orderDate");
      return <div>{formatDate(orderDate)}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const statusMap: Record<OrderStatus, StatusTagProps["status"]> = {
        [OrderStatus.Aguardando]: "Aguardando",
        [OrderStatus.Aprovado]: "Aprovado",
      };
      const statusValue: OrderStatus = row.getValue("status");
      const statusText = statusMap[statusValue];

      return <StatusTag status={statusText} text={statusText} />;
    },
  },
  {
    accessorKey: "totalPrice",
    header: "Total",
    cell: ({ row }) => {
      const totalPrice = parseFloat(row.getValue("totalPrice"));

      return <div className="font-medium">{formatPrice(totalPrice)}</div>;
    },
  },
  {
    accessorKey: "foods",
    header: "Itens",
    cell: ({ row }) => {
      const foods: Food[] = row.getValue("foods");
      const foodNames: string = foods
        .map(
          (food) =>
            food.name
              .toLowerCase()
              .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitaliza cada palavra
        )
        .join(", ");

      return <div className="truncate max-w-[300px]">{foodNames}</div>;
    },
  },
  // {
  //   accessorKey: "actions",
  //   header: "Ações",
  //   cell: ({ row }) => {
  //       return (
  //           <button className="bg-[#F0F4EA] text-[#237D31] p-1 rounded-[8px]">
  //               <Eye size={20} />
  //           </button>
  //       )
  //   },
  // }
];
