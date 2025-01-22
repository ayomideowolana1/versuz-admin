"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

function Logout() {
  return <Button onClick={()=> redirect('/api/auth/signout')}>Logout</Button>;
}

export default Logout;
