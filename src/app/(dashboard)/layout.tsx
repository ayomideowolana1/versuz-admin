"use server"
import { getSession } from "@/lib";
import { redirect } from "next/navigation";


export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession()
  console.log(session)
  
  return (
    <>
    Sidebar
    {children}
    </>
  );
}
