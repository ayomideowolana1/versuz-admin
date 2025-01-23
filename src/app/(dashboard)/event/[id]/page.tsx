import React from "react";

import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession, Session } from "next-auth";

import Header from "./header";
import AddSport from "./addSport";
import Categories from "./categories";

type Params = {
  id: string;
};

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  const session: any = await getServerSession(options);

  const token = session.accessToken;

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await fetch(
    `http://localhost:8080/versuz-erp/dashboard-api/event/index.php?id=${id}`,
    requestOptions
  );
  const { data } = await res.json();

  const selectedSports = Object.keys(data.sports);
  const addSportsData = {selected:selectedSports,all:data.allowed_sports}


  console.log(addSportsData)

  return (
    <div>
      <Header id={id} />
      <div className="flex flex-1 flex-col gap-[32px] p-4  h-full ">
        <div className="border p-6">
          <div className="flex items-center justify-between">
            <div className="">
              <h1 className="text-2xl text-foreground font-semibold">
                Setup your event
              </h1>
              <p className="text-muted-foreground mt-1 text-sm">
                Make changes to your event here. Click save when you're done.
              </p>
            </div>
            <AddSport data={addSportsData} />
          </div>

          <Categories id={id} sports={selectedSports} data={data} />
        </div>
      </div>
    </div>
  );
}

0
