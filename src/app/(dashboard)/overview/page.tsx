import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
import Link from "next/link"
import { redirect } from "next/navigation"


export default async function Overview() {
const session = await getServerSession(options)

if(!session){
  redirect('/api/auth/login?callbackUrl=/overview')
}

console.log(session)
  return (
    <div>
      <ul></ul>
      <Link href="/api/auth/signout">Logout</Link>
    </div>
  );
}
