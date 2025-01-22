"use client";

import {
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
  LogOut,
  Frame,
  UserCog,
  CreditCard,
  User2,
  type LucideIcon,
  BellPlus,
  UserCog2,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";

export default function SettingsMod() {
  const { isMobile } = useSidebar();

  const settings = [
    {
      name: "General",
      url: "#",
      icon: Frame,
      mods: [
        {
          name: "My Account",
          url: "#",
          icon: User2,
        },
        {
          name: "Logout",
          url: "#",
          icon: LogOut,
        },
      ],
    },
    {
      name: "Notifications",
      url: "#",
      icon: BellPlus,
      mods: [],
    },
    {
      name: "Administrators",
      url: "#",
      icon: UserCog,
      mods: [
        {
          name: "Manage Admins",
          url: "#",
          icon: UserCog2,
        },
      ],
    },
    {
      name: "Billing",
      url: "#",
      icon: CreditCard,
      mods: [
        {
          name: "Invoices",
          url: "#",
          icon: DollarSign,
        },
      ],
    },
  ];

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Settings</SidebarGroupLabel>
      <SidebarMenu>
        {settings.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <Link href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {item.mods.length && (
                  <SidebarMenuAction showOnHover>
                    <MoreHorizontal />
                    <span className="sr-only">More</span>
                  </SidebarMenuAction>
                )}
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                {item.mods.map((mod, index) => (
                  <Link href={mod.url} key={index}>
                    <DropdownMenuItem
                      
                      className="text-muted-foreground"
                    >
                      <mod.icon />
                      <span>{mod.name}</span>
                    </DropdownMenuItem>
                  </Link>
                ))}

                {/* <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut className="text-muted-foreground" />
                  <span>Logout</span>
                </DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        {/* <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <MoreHorizontal className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem> */}
      </SidebarMenu>
    </SidebarGroup>
  );
}
