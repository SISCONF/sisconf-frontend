"use client";

import { useState } from "react";
import { ComponentTabs } from "@/components/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { Typography } from "@/components/typography";

export const TABS_LIST = [
  {
    id: 0,
    name: "frutas",
    label: "Frutas",
    component: <div>Ola</div>,
  },
  {
    id: 1,
    name: "verduras",
    label: "Verduras",
    component: <div>Tudo</div>,
  },
  {
    id: 2,
    name: "legumes",
    label: "Legumes",
    component: <div>Bem?</div>,
  },

  {
    id: 3,
    name: "outros",
    label: "Outros",
    component: <div>Bem?</div>,
  },
];

export function MainTabsProducts() {
  const [activeTab, setActiveTab] = useState(TABS_LIST[0]);

  const handleTabChange = (id: number) => {
    const selectedTab = TABS_LIST.find((tab) => tab.id === id);
    setActiveTab(selectedTab || TABS_LIST[0]);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex flex-col items-center text-center ">
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
          transition={{ duration: 0.3 }}
          className="w-fit h-fit"
        >
          {activeTab.component}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
