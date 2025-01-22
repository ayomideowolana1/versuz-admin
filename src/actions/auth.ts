"use server";
import { getSession } from "@/lib";
import { createSession } from "@/session";

export async function login(state: any, formData: FormData) {
  const session = await getSession()
  

  const res = await fetch(
    "http://localhost:8080/versuz-erp/dashboard-api/auth/login.php",
    { method: "POST", body: formData }
  );

  const data = await res.json();

  let errors: Array<string> = [];
  if (!data.status) {
    errors.push(data.error);
  }else{

    await createSession("1");
  }

  return {
    errors: errors,
  };
  
}

export async function signup(state: any, formData: FormData) {
  const res = await fetch(
    "http://localhost:8080/versuz-erp/dashboard-api/auth/login.php",
    { method: "POST", body: formData }
  );

  const data = await res.json();

  await createSession("1");
  return {
    errors: [],
  };
  // }
}
