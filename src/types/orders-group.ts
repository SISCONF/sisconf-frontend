export type OrdersGroup = {
    id: number
    date: string
    sheet: string
    total: number
    status: "Entregue" | "Recebido" | "Fechado"
    items: string
}