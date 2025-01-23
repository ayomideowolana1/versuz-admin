"use client";

import React, { useEffect, useState } from "react";
import { Plus, SquarePlus, Search, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Category } from "./category";
import { useAppDispatch } from "@/lib/hooks";
import { setSportsAndCategories } from "@/lib/features/sidebar/sportsAndCategoriesSlice";

export default function Categories(props: {
  id: string;
  sports: string[];
  data: any;
}) {
  const { id, sports, data } = props;
  const dispatch = useAppDispatch();

  const [display, setDisplay] = useState(data);
  const [displaySports, setDisplaySports] = useState(Object.keys(data.sports));

  const [activeTab, setActiveTab] = useState(sports[0]);
  const [activeTabData, setActiveTabData] = useState([]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);

    // console.log(data.sports[value]);
  };

  useEffect(() => {
    dispatch(
      setSportsAndCategories({ title: "Sports & Categories", data: data })
    );
    //     let data = {
    //       sports: {
    //         Football: [
    //           {
    //             name: "Olympics Male",
    //             format: "League",
    //             no_of_teams: "32",
    //             no_of_players_per_team: "25",
    //           },
    //         ],
    //         //   "Basketball": [
    //         //     {
    //         //         "name": "Olympics Feale",
    //         //         "format": "League",
    //         //         "no_of_teams": "32",
    //         //         "no_of_players_per_team": "25"
    //         //       }
    //         //   ]
    //       },
    //     };

    //     setTimeout(() => {
    //       setDisplay(data);
    //     }, 5000);
  }, []);

  return (
    <Tabs
      defaultValue="account"
      className="mt-12"
      value={activeTab}
      onValueChange={handleTabChange}
    >
      <TabsList className=" w-full flex gap-4 justify-start bg-transparent">
        {sports?.map((sport) => (
          <TabsTrigger
            key={sport}
            className={
              activeTab == sport
                ? "app-btn data-[state=active]:bg-foreground data-[state=active]:text-white"
                : "py-2 px-4 gap-2 font-semibold bg-secondary text-foreground"
            }
            value={sport}
          >
            {sport} <X size={16} />
          </TabsTrigger>
        ))}
      </TabsList>

      {sports.map((sport, index) => {
        return (
          <TabsContent key={index} value={sport}>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              <div className=" min-h-[410px] border-dashed border-2 border-slate-400 rounded-sm bg-secondary h-full text-slate-400 flex flex-col justify-center items-center gap-10">
                <SquarePlus size={48} strokeWidth={0.75} />
                <span className="text-sm">Add {sport} Category</span>
              </div>
              {display.sports[sport]?.map((cat: any, index: number) => (
                <Category key={index} name={cat.name} />
              ))}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
