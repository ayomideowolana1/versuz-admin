import { updateSession,decrypt } from "./lib";
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'


export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  // console.log(path)
  return await updateSession(request);
}