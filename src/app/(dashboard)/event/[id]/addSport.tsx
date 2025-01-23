"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Plus, SquarePlus, Search, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AddSport({
  data,
}: {
  data: {
    selected: string[];
    all: string[];
  };
}) {
  const [sports, setSports] = useState<string[]>(data.all);
  const [searchData, setSsearchData] = useState<string[]>([]);
  const [display, setDisplay] = useState<string[]>(sports);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value == "") {
      setDisplay(sports);
    } else {
      const result = sports.filter((item) => {
        const text = item.toLocaleLowerCase();

        return text.includes(value);
      });

      setDisplay(result);
    }
  };

  const reset = () => {
    setDisplay(sports);
  };

  return (
    <DropdownMenu onOpenChange={reset}>
      <DropdownMenuTrigger className="app-btn">
        <Plus size={18} /> Add a Sport
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div className="flex text-foreground items-center gap-2">
            <Search size={16} className="text-slate-400" />
            <input
              className="rounded-none border-none focus:outline-none text-sm"
              placeholder="Type to search "
              onChange={handleSearch}
            />
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {display.map((sport, index) => (
          <DropdownMenuItem
            className="hover:bg-none "
            key={index}
            onClick={() => alert()}
            disabled={data.selected.includes(sport)}
          >
            {" "}
            {sport}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
