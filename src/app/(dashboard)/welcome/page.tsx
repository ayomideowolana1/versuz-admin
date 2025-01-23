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

export default async function Page() {

  return (
    <>
      <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 px-4">
        {/* abstract */}
        <div className="flex items-center gap-2 px-4 ">
          <SidebarTrigger className="-ml-1" disabled />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Create your first competition
                </BreadcrumbLink>
              </BreadcrumbItem>
              {/* <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem> */}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <UserAvatar  />
      </header>

      <div className="flex flex-1 flex-col gap-[32px] p-[48px]  h-full">
        <div className="grid  gap-4 lg:grid-cols-2 h-full ">
          <Link href="/event/create">
            <div className=" rounded-xl bg-muted h-full border-dashed border-2 border-slate-400 flex justify-center items-center flex-col">
              <Image
                src="/event-icon.svg"
                width={188}
                height={116}
                alt="event icon"
              />
              <h1 className="text-3xl text-foreground mt-14 font-semibold">
                Create Event
              </h1>
              <p className="text-muted-foreground text-sm max-w-[350px] text-center leading-5 mt-5">
                📅 Organize a Series of Competitions An event is a collection of
                multiple competitions—like the Olympics, where different sports
                happen under one big event. Use this to group related
                competitions together, manage schedules, and oversee everything
                in one place.
              </p>
            </div>
          </Link>

          <Link href="/competition/create">
            <div className=" rounded-xl bg-muted h-full border-dashed border-2 border-slate-400 flex justify-center items-center flex-col">
              <Image
                src="/competitio-icon.svg"
                width={136}
                height={125}
                alt="Competition icon"
              />
              <h1 className="text-3xl text-foreground mt-14 font-semibold">
                Create Competition
              </h1>
              <p className="text-muted-foreground text-sm max-w-[350px] text-center leading-5 mt-5">
                {" "}
                🏆 Set Up a Single Competition A competition is a single contest
                with its own rules, participants, and results—like the World
                Cup, where teams compete for one title. Choose the format, set
                the rules, and invite participants to compete for victory.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
