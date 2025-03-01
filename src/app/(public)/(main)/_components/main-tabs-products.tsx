"use client";

import { useCallback, useMemo, useState } from "react";
import { ComponentTabs } from "@/components/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { Typography } from "@/components/typography";
import { fetchFoods } from "@/actions/food/fetch-foods";
import { useQuery } from "@tanstack/react-query";
import { CustomCarousel } from "@/components/custom-carousel";
import { Food, FoodCategory } from "@/types/food";

const TABS_LIST = [
  {
    id: 0,
    name: "frutas",
    label: "Frutas",
    category: FoodCategory.Fruit,
  },
  {
    id: 1,
    name: "verduras",
    label: "Verduras",
    category: FoodCategory.Vegetable,
  },
  {
    id: 2,
    name: "legumes",
    label: "Legumes",
    category: FoodCategory.Vegetable,
  },
  {
    id: 3,
    name: "outros",
    label: "Outros",
    category: FoodCategory.Others,
  },
];

export function MainTabsProducts() {
  const [activeTab, setActiveTab] = useState(TABS_LIST[0]);

  const {
    data: foods,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: () => fetchFoods(),
  });

  const handleFilterByCategory = useCallback(
    (foods: Food[] = [], category: FoodCategory | null) => {
      return category
        ? foods.filter((food) => food.category === category)
        : foods;
    },
    []
  );

  const filteredFoods = useMemo(() => {
    return handleFilterByCategory(foods, activeTab.category);
  }, [foods, activeTab.category, handleFilterByCategory]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar as frutas e legumes</div>;
  }

  if (!filteredFoods) {
    return <div>Nenhum produto encontrado nesta categoria</div>;
  }

  const handleTabChange = (id: number) => {
    const selectedTab = TABS_LIST.find((tab) => tab.id === id);
    setActiveTab(selectedTab || TABS_LIST[0]);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex flex-col items-center text-center">
        <Typography variant={"h2"} fontWeight={"bold"} textColor={"primary"}>
          Conheça nossos produtos
        </Typography>
        <Typography variant={"body1"} className="w-[31.25rem]">
          Trabalhamos com frutas e verduras frescas, selecionadas para garantir
          qualidade e sabor. Confira e faça sua escolha.
        </Typography>
      </div>

      <ComponentTabs
        tabList={TABS_LIST}
        defaultValue="frutas"
        onTabChange={handleTabChange}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.1 }}
          className="w-fit h-fit"
        >
          <CustomCarousel initialFoods={filteredFoods} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
