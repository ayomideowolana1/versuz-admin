"use server";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession, Session } from "next-auth";
import { AppSidebar } from "@/components/app-sidebar";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session: any = await getServerSession(options);
  return (
    <>
      <SidebarProvider>
        <AppSidebar />

        <SidebarInset className="">{children}</SidebarInset>
      </SidebarProvider>
    </>
  );
}
