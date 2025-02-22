"use client";

import { useState } from "react";
import { ComponentTabs } from "@/components/tabs";
import { ModeToggle } from "@/components/theme/mode-toggle";
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

export function Content() {
  const [activeTab, setActiveTab] = useState(TABS_LIST[0]);

  const handleTabChange = (id: number) => {
    const selectedTab = TABS_LIST.find((tab) => tab.id === id);
    setActiveTab(selectedTab || TABS_LIST[0]);
  };

  return (
    <main className="flex flex-col justify-center items-center w-full h-screen bg-background gap-2">
      <ModeToggle />
      <ComponentTabs
        tabList={TABS_LIST}
        defaultValue="frutas"
        onTabChange={handleTabChange}
      />
      {activeTab.component}
    </main>
  );
}
