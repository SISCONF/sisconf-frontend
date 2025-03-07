import { Food } from "@/types/food";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

export const formatDate = (date: string) => {
  const dateInstance = new Date(date);

  return dateInstance.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const formatFoodName = (foods: Food[]): string => {
  return foods
    .map(
      (food) =>
        food.name.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()) // Capitaliza cada palavra
    )
    .join(", ");
};

export const formatAvatarFallback = (firstName: string, lastName: string) => {
  return `${firstName[0]}${lastName[0]}`;
};

export const parseJwt = (token: string) => {
  if (!token) {
    return;
  }
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
};
