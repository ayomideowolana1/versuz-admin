"use client";

import { ChevronRight, Dot, type LucideIcon } from "lucide-react";

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4 p-4">
      <div className="space-y-4 flex-grow">
          <Skeleton className="h-3 w-full" />

        <div className="grid gap-2">
          <Skeleton className="h-3 w-[100px]" />
          <Skeleton className="h-3 w-[150px]" />
        </div>

        <div className="grid gap-2">
          <Skeleton className="h-3 w-[100px]" />
          <Skeleton className="h-3 w-[150px]" />
        </div>
      </div>
    </div>
  );
}

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
import { useEffect, useState } from "react";
import Link from "next/link";




export default function SportsAndCategories() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const pathname = usePathname()

  

  
  

  const { loading, title, data } = useAppSelector(
    (state) => state.sportsAndCategories
  );


  return (
    <>
      {loading ? (
        <SkeletonDemo />
      ) : (
        <SidebarGroup>
          <SidebarGroupLabel>{title}</SidebarGroupLabel>
          <SidebarMenu>
            {data.map((item:any) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={false}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      <Dot />
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.data?.map((subItem:any) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link className={` `} href={`${pathname}/category/${subItem.url}`}>

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
      )}
    </>
  );
}
