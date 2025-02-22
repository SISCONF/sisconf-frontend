"use client"

import { formatPrice, cn } from "@/lib/utils"
import { EntrepreneurOrder } from "@/types/entrepreneur-orders"
import { ColumnDef } from "@tanstack/react-table"
import { Eye } from "lucide-react"
import StatusTag from "../status-tag"
import { Checkbox } from "@/components/ui/checkbox"

export const columns: ColumnDef<EntrepreneurOrder>[] = [
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
    accessorKey: "orderId",
    header: "ID do pedido",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "client",
    header: "Cliente",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
        const statusValue: "Aguardando" | "Aprovado" = row.getValue("status")


        return <StatusTag status={statusValue} text={statusValue} />
    },
  },
  {
    accessorKey: "amount",
    header: "Total",
    cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"))
   
        return <div className="text-right font-medium">{formatPrice(amount)}</div>
    },
  },
  {
    accessorKey: "items",
    header: "Itens",
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row }) => {
        return (
            <button className="bg-[#F0F4EA] text-[#237D31] p-1 rounded-[8px]">
                <Eye size={20} />
            </button>
        )
    },
  }
]

