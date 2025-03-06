import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tab } from "@/types/tab";

export interface ComponentTabsProps {
  tabList: Tab[];
  defaultValue: string;
  onTabChange?: (id: number) => void;
  width?: string;
  height?: string;
  verticalPadding?: string;
}

export function ComponentTabs({
  tabList,
  defaultValue,
  width = "w-[220px]",
  height = "h-16",
  verticalPadding = "py-4",
  onTabChange,
}: ComponentTabsProps) {
  return (
    <Tabs
      defaultValue={defaultValue}
      data-testid="tabs-group-container"
      className="w-fit"
    >
      <TabsList className="grid w-fit grid-cols-4 h-auto gap-1 bg-transparent">
        {tabList.map((tab) => (
          <TabsTrigger
            data-testid="tab-option-value"
            key={tab.name}
            value={tab.name}
            className={`${width} ${height} ${verticalPadding} data-[state=active]:bg-[#2B7A2E] data-[state=active]:text-white data-[state=active]:font-bold data-[state=inactive]:bg-[#E8F2E8] data-[state=inactive]:text-[#43A046] rounded-md mobile:w-fit dark:data-[state=inactive]:bg-[#237D31]/30`}
            onClick={() => onTabChange?.(tab.id)}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
