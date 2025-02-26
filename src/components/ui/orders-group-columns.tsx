"use client"

import { OrdersGroup } from "@/types/orders-group"
import { ColumnDef } from "@tanstack/react-table"
import { Eye } from "lucide-react"
import StatusTag from "../status-tag"
import { formatPrice } from "@/lib/utils"
import { useRouter } from "next/navigation"

export const ordersGroupColumns: ColumnDef<OrdersGroup>[] = [
  {
    accessorKey: "id",
    header: "ID do grupo",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "sheet",
    header: "Planilha de pedidos",
    cell: ({ row }) => {
      const sheetUrl = row.original.sheet
      return (
        <a href={sheetUrl} className="text-[#237D31] font-medium">
          {sheetUrl}
        </a>
      )
    }
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const statusValue: "Recebido" | "Aprovado" | "Entregue" = row.getValue("status")


      return <StatusTag status={statusValue} text={statusValue} />
    },
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => {
      const total = parseFloat(row.getValue("total"))

      return <div className="font-medium">{formatPrice(total)}</div>
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
      const router = useRouter();

      const handleViewDetails = () => {
        const orderGroupId = row.original.id; 
        router.push(`/orders-group/${orderGroupId}`); 
      };

      return (
          <button 
            className="bg-[#F0F4EA] text-[#237D31] p-1 rounded-[8px]"
            onClick={handleViewDetails}
          >
              <Eye size={20} />
          </button>
      )
    }
  },
]
