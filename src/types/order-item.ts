export interface OrderItem {
    id: number;
    image: string;
    name: string;
    description: string;
    price: string;
    status: "Aguardando" | "Aprovado";
}