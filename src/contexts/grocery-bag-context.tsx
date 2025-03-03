import { createContext, useContext, useState, ReactNode } from "react";

import { GroceryBagItem } from "@/types/grocery-bag";

type GroceryBagContextType = {
  groceryBag: GroceryBagItem[];
  addToBag: (foodItem: GroceryBagItem) => void;
  removeFromBag: (foodId: number) => void;
  clearBag: () => void;
};

const GroceryBagContext = createContext<GroceryBagContextType | undefined>(
  undefined
);

export const GroceryBagProvider = ({ children }: { children: ReactNode }) => {
  const [groceryBag, setGroceryBag] = useState<GroceryBagItem[]>([]);

  const addToBag = (foodItem: GroceryBagItem) => {
    setGroceryBag((prev) => {
      const existingFood = prev.find(
        (item) => item.food.id === foodItem.food.id
      );
      if (existingFood) {
        return prev.map((item) =>
          item.food.id === foodItem.food.id
            ? { ...item, amount: item.amount + foodItem.amount }
            : item
        );
      }
      return [...prev, foodItem];
    });
  };

  const removeFromBag = (foodId: number) => {
    setGroceryBag((prev) =>
      prev.filter((foodItem) => foodItem.food.id !== foodId)
    );
  };

  const clearBag = () => {
    setGroceryBag([]);
  };

  return (
    <GroceryBagContext.Provider
      value={{ groceryBag, addToBag, removeFromBag, clearBag }}
    >
      {children}
    </GroceryBagContext.Provider>
  );
};

export const useGroceryBag = () => {
  const context = useContext(GroceryBagContext);
  if (!context) {
    throw new Error("useGroceryBag must be used within a GroceryBagProvider");
  }
  return context;
};
