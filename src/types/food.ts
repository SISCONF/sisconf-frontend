export enum FoodCategory {
  Fruit = "FRUIT",
  Vegetable = "VEGETABLE",
  Others = "OTHERS",
}

export interface Food {
  id: number;
  name: string;
  unitPrice: number;
  category: FoodCategory;
}
