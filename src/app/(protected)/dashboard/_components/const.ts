import {
  GalleryVerticalEnd,
  SquareTerminal,
  DollarSign,
  ChartArea,
} from "lucide-react";

export const SIDE_BAR_USER = {
  name: "Ramilson Fernandes",
  email: "ramilsonfernandes@gmail.com",
  avatar: "/avatars/shadcn.jpg",
};

export const SIDE_BAR_TEAM = {
  name: "RJ Frutas e Verduras",
  logo: GalleryVerticalEnd,
  plan: "Empresa",
};

export const SIDE_BAR_NAV_ITEMS = [
  {
    title: "Pedidos",
    url: "#",
    icon: SquareTerminal,
    isActive: true,
  },
  {
    title: "Estoque",
    url: "#",
    icon: ChartArea,
    isActive: true,
  },
];
