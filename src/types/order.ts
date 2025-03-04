import { Food } from "./food";

export enum OrderStatus {
    Aguardando = "WAITING", 
    Aprovado = "ACCEPTED"
}

export interface Order {
    id: number;
    code: string;
    customerId: number;
    foods: Food[]
    orderDate: string;
    status: OrderStatus;
    totalPrice: number;
}