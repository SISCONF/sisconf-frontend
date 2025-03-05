import { Order } from "./order";

export enum OrdersGroupStatus {
  Fechado = "PLACED",
  Recebido = "RECEIVED",
  Entregue = "DELIVERED",
}

export type OrdersGroup = {
  id: number;
  totalPrice: number;
  orderDate: string;
  currentStatus: OrdersGroupStatus;
  itemQuantity: number;
  docUrl: string;
  orders: Order[];
};
