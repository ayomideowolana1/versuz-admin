import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export async function POST(
  req: Request,
  res: NextApiResponse<ResponseData>
) {
  const body = await req.formData();
  
  const requestOptions = {
    method: "POST",
    headers: {
    },
    body,
  };


  const response = await fetch(
    "http://localhost:8080/versuz-erp/dashboard-api/auth/register.php",
    requestOptions
  );

  // { status: false, error: 'Email exists please login' }
  const apiResponse = await response.json()

  

  return NextResponse.json(apiResponse);
}
