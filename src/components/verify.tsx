"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { EnvelopeClosedIcon,ArrowLeftIcon, CaretLeftIcon } from "@radix-ui/react-icons";
import { ChevronLeft,Mail } from "lucide-react"

export function Verify({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          
          <CardTitle className="text-xl mt-5">
            <div className="bg-muted w-[100px] aspect-square rounded-full flex justify-center items-center mx-auto mb-4">
            <Mail size={48} />

            </div>
            <span>Email Verification</span>
          </CardTitle>
          <CardDescription>
            Click on the link sent to your email to verify your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center text-sm flex justify-between">
          <Link href="login" className="underline underline-offset-4 flex gap-1">
          <ChevronLeft size={16} className="self-center" /> Back to Login
            </Link>

            <Link href="login" className="underline underline-offset-4">
              Resend Link
            </Link>
          </div>

          
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}

export default Verify;
