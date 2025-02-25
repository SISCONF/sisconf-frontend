"use client";

import { MainContentSections } from "./_components/main-sections";
import { MainBenefits } from "./_components/main-beneficies";
import { MainTabsProducts } from "./_components/main-tabs-products";
import { MainHeroSection } from "./_components/main-hero-section";

export function Content() {
  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen bg-background gap-20 px-20 py-12">
      <MainHeroSection />
      <MainTabsProducts />
      <MainContentSections />
      <MainBenefits />
    </main>
  );
}
