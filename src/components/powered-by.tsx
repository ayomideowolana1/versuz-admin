"use client";
import React from "react";
import Logo from "./logo";

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export default function PoweredBy({
  
}: {
  
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Logo width={40} rounded="md" />
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Versuz</span>
                <span className="truncate text-xs">Competition Manager</span>
              </div>
              {/* <ChevronsUpDown className="ml-auto size-4" /> */}
            </SidebarMenuButton>
        
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

// export default function PoweredBy() {
//   return (
//     <div className="p-2">
//             <p className="text-xs leading-5 text-ring mb-2">Powered By</p>
//             <div className="flex gap-2">
//             <Logo width={40} rounded="md" />
//             <div>
//                 <p className="text-sm font-bold text-foreground" >Versuz</p>
//                 <p className="text-xs  text-foreground" >Competition Manager</p>
//             </div>

//             </div>
//         </div>
//   )
// }
