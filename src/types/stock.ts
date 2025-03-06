import { Food } from "./food";

interface StockFood {
  quantity: number;
  food: Food;
}

export interface Stock {
  id: number;
  entrepreneurId: number;
  stockItems: StockFood[];
}
