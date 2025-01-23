"use server"

import { redirect } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { WelcomeSidebar } from "@/components/welcome-sidebar";




export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <>
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="">
        {children}
      </SidebarInset>
    </SidebarProvider>

    
    </>
  );
}





