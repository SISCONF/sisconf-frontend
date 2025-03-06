"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

interface ItemProps {
  title: string;
  url: string;
}

interface NavMainProps {
  navMainItems: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: ItemProps[];
  }[];
  onNavClick: (item: string) => void;
}

export function NavMain({ navMainItems, onNavClick }: NavMainProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Recursos</SidebarGroupLabel>
      <SidebarMenu>
        {navMainItems.map((navItem) => (
          <Collapsible
            key={navItem.title}
            asChild
            defaultOpen={navItem.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  tooltip={navItem.title}
                  onClick={() => onNavClick(navItem.title)}
                >
                  {navItem.icon && <navItem.icon />}
                  <span>{navItem.title}</span>
                  {navItem.items && (
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  )}
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {navItem.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link href={subItem.url}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
