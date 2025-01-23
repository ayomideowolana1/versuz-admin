'use client'

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

import Image from "next/image";
import UserAvatar from "@/components/user-avatar";

import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 px-4">

      {/* abstract */}
        <div className="flex items-center gap-2 px-4 ">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Create your first competition
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Create Event</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex items-center px-4">
          <span className="font-semibold text-foreground text-sm px-2">
            Welcome, Anon{" "}
          </span>

                <UserAvatar url="https://github.com/shadcn.png" fallback="AO" />
          
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-[32px] p-4  h-full ">

        <div className="border p-6">
          <div>
            <h1 className="text-3xl">Create </h1>
          </div>
        </div>
        
      </div>
    </>
  );
}
