"use client";

import { formatPrice, cn } from "@/lib/utils";
import { ColumnDef, Table } from "@tanstack/react-table";
import StatusTag, { StatusTagProps } from "../status-tag";
import { Checkbox } from "@/components/ui/checkbox";
import { Order, OrderStatus } from "@/types/order";
import { Food } from "@/types/food";
import { formatDate, formatFoodName } from "@/lib/utils";

interface ColumnsProps {
  selectedOrders: number[];
  handleOrdersSelection: (orderId: number) => void;
  handleAllOrdersSelection: (ordersId: number[]) => void;
}

export const columns = ({
  selectedOrders,
  handleOrdersSelection,
  handleAllOrdersSelection,
}: ColumnsProps): ColumnDef<Order>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => {
          table.toggleAllPageRowsSelected(!!value);
          const selectedOrdersIds = value
            ? table
                .getRowModel()
                .rows.map((row) => parseInt(row.getValue("id")))
            : [];
          handleAllOrdersSelection(selectedOrdersIds);
        }}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={selectedOrders.includes(parseInt(row.getValue("id")))}
        onCheckedChange={(value) => {
          const orderId: number = parseInt(row.getValue("id"));
          handleOrdersSelection(orderId);
        }}
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
      const foodNames: string = formatFoodName(foods);

      return <div className="truncate max-w-[300px]">{foodNames}</div>;
    },
  },
];
