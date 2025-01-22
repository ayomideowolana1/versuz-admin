// "use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession, Session } from "next-auth";

import React from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
// import { useSession } from "next-auth/react";



 export default async function UserAvatar() {
  
  const session: any = await getServerSession(options);

  if(!session){
    redirect('/login')
  }

  return (
    <div className="flex items-center px-4">
      <span className="font-semibold text-foreground text-sm px-2">
        Welcome, {session?.user.name}{" "}
      </span>
      <div>
      
        <Avatar>
          <AvatarImage src={session?.user.image} />
          <AvatarFallback>
            <Image src="/user.png"  width={30} height={30} alt="" className="rounded-full"/>
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
