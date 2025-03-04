"use client";

import { NavMain } from "@/app/(protected)/dashboard/_components/nav-main";
import { NavUser } from "@/app/(protected)/dashboard/_components/nav-user";
import { TeamContent } from "@/app/(protected)/dashboard/_components/team-content";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SIDE_BAR_NAV_ITEMS, SIDE_BAR_TEAM, SIDE_BAR_USER } from "./const";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  onNavigation: (item: string) => void;
}

export function AppSidebar({ onNavigation, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamContent content={SIDE_BAR_TEAM} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain navMainItems={SIDE_BAR_NAV_ITEMS} onNavClick={onNavigation} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={SIDE_BAR_USER} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
