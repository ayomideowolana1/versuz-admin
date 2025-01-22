'use server'
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

type Response = {
  status:boolean
  error?: string
}

const secretKey = "v3rsUz";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  
  try{
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;

  }catch(err){
    logout()
  }
}

export async function login(formData: FormData) {
  // Verify credentials && get the user

  const url = 'http://localhost:8080/versuz-erp/dashboard-api/auth/login.php';
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    

    if (!response.ok) {
      return new Response("Error logging in ", { status: 400 });
      // return {status: false, error:'Error logging in'}
      // throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    

    if(data.status){
      // Create the session

      const decryptedData  = await decrypt(data.token)

      const expires = new Date(Date.now() + 10 * 1000);
      const session = await encrypt({ userId: decryptedData.user_id, expires });
  
      // Save the session in a cookie
      
      (await cookies()).set("session", session, { expires, httpOnly: true });

      return new Response("Success", { status: 200 });
    }else{
      return new Response("Error logging in ", { status: 400 });

    }


  } catch (error) {
      console.error('Error:', error);
      return new Response("Error logging in ", { status: 400 });
  }

  

}


async function setCookie({session,expires}:{session:any,expires:any}){
    
}

export async function logout() {
  // Destroy the session
  (await
        // Destroy the session
        cookies()).set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = (await cookies()).get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}