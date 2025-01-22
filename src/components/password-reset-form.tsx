"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { useSelector } from "react-redux";

type view = "email" | "otp";

export function PasswordResetForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [view, setView] = useState("email");
  const [otpValue, setOtpValue] = useState("");


  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      action={async (formData) => {
        console.log(formData);
      }}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Reset Your Password</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to reset your password
        </p>
        
      </div>
      <div className="grid gap-6">
        {view == "email" && (
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
        )}

        {view == "otp" && (
          <div className="grid gap-2">
            <Label htmlFor="email">Enter the OTP sent to you mail</Label>

            <InputOTP
              maxLength={6}
              className="mx-auto"
              onChange={(value) => setOtpValue}
              value={otpValue}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        )}

        <Button
          type="submit"
          className="w-full"
          onClick={(e) => {
            setView("otp");
          }}
        >
          Reset Password
        </Button>
      </div>
      <div className="text-center text-sm">
        Back to{" "}
        <Link href="/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </form>
  );
}
