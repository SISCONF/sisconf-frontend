import { Order } from "./order";

export type OrdersGroup = {
  id: number;
  totalPrice: number;
  orderDate: string;
  currentStatus: "PLACED" | "RECEIVED" | "DELIVERED";
  itemQuantity: number;
  docUrl: string;
  orders: Order[];
};
