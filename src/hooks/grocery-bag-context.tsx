import { createContext, useContext, useState, ReactNode } from "react";

import { GroceryBagItem } from "@/types/grocery-bag";

type GroceryBagContextType = {
  groceryBag: GroceryBagItem[];
  addToBag: (userId: number, foodItem: GroceryBagItem) => void;
  removeFromBag: (userId: number, foodId: number) => void;
  clearBag: (userId: number) => void;
  getUserBag: (userId: number) => GroceryBagItem[];
};

const GroceryBagContext = createContext<GroceryBagContextType | undefined>(
  undefined
);

export const GroceryBagProvider = ({ children }: { children: ReactNode }) => {
  const [userGroceryBag, setUserGroceryBag] = useState<
    Record<number, GroceryBagItem[]>
  >({});

  const getUserBag = (userId: number | null) => {
    if (!userId) return [];
    return userGroceryBag[userId] || [];
  };

  const addToBag = (userId: number | null, foodItem: GroceryBagItem) => {
    if (!userId) return;

    setUserGroceryBag((prev) => {
      const existingBag = prev[userId] || [];

      const existingFoodIndex = existingBag.findIndex(
        (item) => item.food.id === foodItem.food.id
      );

      let updatedBag;

      if (existingFoodIndex !== -1) {
        updatedBag = existingBag.map((item, index) =>
          index === existingFoodIndex
              ? { ...item, amount: item.amount + foodItem.amount }
              : item
        )
      } else {
        updatedBag = [...existingBag, foodItem]
      }

      return { ...prev, [userId]: updatedBag };
    });
  };

  const removeFromBag = (userId: number | null, foodId: number) => {
    if (!userId) return;

    setUserGroceryBag((prev) => ({
      ...prev,
      [userId]:
        prev[userId].filter((foodItem) => foodItem.food.id !== foodId) || [],
    }));
  };

  const clearBag = (userId: number | null) => {
    if (!userId) return;

    setUserGroceryBag((prev) => ({
      ...prev,
      [userId]: [],
    }));
  };

  return (
    <GroceryBagContext.Provider
      value={{ groceryBag: [], addToBag, removeFromBag, clearBag, getUserBag }}
    >
      {children}
    </GroceryBagContext.Provider>
  );
};

export const useGroceryBag = (userId: number | null) => {
  const context = useContext(GroceryBagContext);
  if (!context) {
    throw new Error("useGroceryBag must be used within a GroceryBagProvider");
  }

  return {
    groceryBag: userId ? context.getUserBag(userId) : [],
    addToBag: (foodItem: GroceryBagItem) =>
      userId && context.addToBag(userId, foodItem),
    removeFromBag: (foodId: number) =>
      userId && context.removeFromBag(userId, foodId),
    clearBag: () => userId && context.clearBag(userId),
  };
};
