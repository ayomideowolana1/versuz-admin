"use client";

import * as React from "react";
import { Plus } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import { useAppSelector } from "@/lib/hooks";

import SportsAndCategories  from "./sidebars/sports-and-categories";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import PoweredBy from "./powered-by";
import SettingsMod from "./sidebars/settings";

import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4 p-2">
      <Skeleton className="h-8 w-8 rounded-md " />
      <div className="space-y-2 flex-grow">
        <Skeleton className="h-3 w-[100px]" />
        <Skeleton className="h-3 w-[150px]" />
      </div>
    </div>
  );
}

// This is sample data.
// const data = {
//   user: {
//     name: "New Event",
//     email: "Event - 0 Competitions",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   teams: [
//     {
//       name: "Event 01",
//       logo: Plus,
//       plan: "Event - 0 Competitions",
//     },
//     // {
//     //   name: "Acme Corp.",
//     //   logo: AudioWaveform,
//     //   plan: "Startup",
//     // },
//     // {
//     //   name: "Evil Corp.",
//     //   logo: Command,
//     //   plan: "Free",
//     // },
//   ],
//   navMain: [
//     {
//       title: "Football",
//       url: "#",
//       icon: Dot,
//       isActive: true,
//       items: [
//         {
//           title: "Male",
//           url: "#",
//         },
//         {
//           title: "Female",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Tennis",
//       url: "#",
//       icon: Dot,
//       items: [
//         {
//           title: "Male",
//           url: "#",
//         },
//         {
//           title: "Female",
//           url: "#",
//         },
//         {
//           title: "Mixed Doubles",
//           url: "#",
//         },
//       ],
//     },
//   ],
//   projects: [
//     {
//       name: "General",
//       url: "#",
//       icon: Frame,
//     },
//     {
//       name: "Administrators",
//       url: "#",
//       icon: UserCog,
//     },
//     {
//       name: "Billing",
//       url: "#",
//       icon: CreditCard,
//     },
//   ],
// };

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { loading, title, data } = useAppSelector(
    (state) => state.sportsAndCategories
  );

  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader> */}

      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              {loading ? (
                <SkeletonDemo />
              ) : (
                <a href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Plus className="size-4" />
                  </div>
                  <div className="flex flex-col gap-y-0.5 leading-none">
                    <span className="font-semibold text-sm text-foreground">
                      Event 01
                    </span>
                    <span className="text-xs">Event - 0 Competitions</span>
                  </div>
                </a>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SportsAndCategories />

        <div className="mt-auto">
          <SettingsMod />
        </div>
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
        <PoweredBy />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
