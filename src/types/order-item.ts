export interface OrderItem {
    id: number;
    image: string;
    name: string;
    description: string;
    amount: number;
    price: number;
    status: "Aguardando" | "Aprovado";
}