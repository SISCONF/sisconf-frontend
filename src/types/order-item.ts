export interface OrderItem {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    status: "Aguardando" | "Aprovado";
}