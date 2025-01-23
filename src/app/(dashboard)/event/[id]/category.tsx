'use client'


import * as React from "react";

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


type categoryData = {
  name: string;
};

function EditCategory({ name }: categoryData) {
  
  return (
    <Dialog>
      <DialogTrigger className="app-btn">
        <Pencil size={16} /> Edit
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg">Edit {name}</DialogTitle>
          <DialogDescription>Category meta data</DialogDescription>
        </DialogHeader>

        <div className="mt-8 grid gap-4">
          <div className="grid gap-2">
            <Label className="text-sm font-medium">Category name</Label>
            <Input />
          </div>
          <div className="grid gap-2">
            <Label className="text-sm font-medium">Format</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="League" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">League</SelectItem>
                <SelectItem value="dark">Knockout</SelectItem>
                <SelectItem value="system">Mixed Tournament</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label className="text-sm font-medium">Number of teams</Label>
            <Input />
          </div>
          <div className="grid gap-2">
            <Label className="text-sm font-medium">
              Number of players per team
            </Label>
            <Input />
          </div>
        </div>

        <div className="mt-8">
          <DialogFooter className="flex !justify-between ">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Category({ name }: categoryData) {
  return (
    <Card className=" border-2">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {name}
          <EditCategory name={name} />
        </CardTitle>
        <CardDescription>Category meta data</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Label className="font-semibold">Format</Label>
          <Input
            className="mt-2 focus:outline-none bg-secondary"
            value={"League"}
            disabled
          />
        </div>
        <div className="mb-4">
          <Label className="font-semibold">Number of Teams</Label>
          <Input
            className="mt-2 focus:outline-none bg-secondary"
            value={"32"}
            disabled
          />
        </div>
        <div className="mb-4">
          <Label className="font-semibold">Number of Players Per Team</Label>
          <Input
            className="mt-2 focus:outline-none bg-secondary"
            value={"21"}
            disabled
          />
        </div>
      </CardContent>
      {/* <CardFooter className="flex justify-between">
        
      </CardFooter> */}
    </Card>
  );
}
