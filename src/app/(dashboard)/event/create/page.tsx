"use client";

import React, { useRef, useState } from "react";
import { SquarePlus } from "lucide-react";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Page() {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [from, setFrom] = useState<number>(0);
  const [to, setTo] = useState<number>(0);

  const [dateRange, setDateRange] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleImageChange = () => {
    if (imageInputRef) {
      imageInputRef.current?.click();
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first uploaded file
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Set the image source to the file content
        if (reader.result) {
          setUploadedImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleDateRangeChange = (range: any) => {

    const from  = new Date(range.from)
    const fromTimestamp = Math.floor(from.getTime() / 1000);
    setFrom(fromTimestamp)
    
    const to  = new Date(range.to)
    const toTimestamp = Math.floor(to.getTime() / 1000);
    setTo(toTimestamp)
    
    setDateRange(range);
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    // console.log(dateRange.startDate)
    formData.append('from',from.toString())
    formData.append('to',to.toString())

    const requestOptions = {
      method:'POST',
      headers:{
        
      },
      body: formData
    }

    const res  = await fetch('http://localhost:8080/versuz-erp/dashboard-api/event/create.php',requestOptions)
    const data = await res.json()

    if(data.status){
      redirect(`/event/${data.event_id}`)
    }


  };

  return (
    <div className="flex flex-1 flex-col gap-[32px] p-4  h-full ">
      <form className="border p-6" onSubmit={submit}>
        <div>
          <h1 className="text-2xl text-foreground font-semibold">
            Create Event
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Make changes to your event here. Click save when you're done.
          </p>
        </div>

        <div className="mt-4">
          <p className="text-sm text-foreground font-medium mb-2">Event logo</p>
          <button
            className="relative bg-accent w-[244px] aspect-square border-dashed border-2 border-slate-400 rounded-sm flex flex-col justify-center items-center gap-3 text-slate-400"
            onClick={handleImageChange}
          >
            {uploadedImage ? (
              <Image src={uploadedImage} alt="logo" fill />
            ) : (
              <>
                <SquarePlus size={24} />
                <span className="text-xs">Add a logo</span>
              </>
            )}
          </button>
          <input
            type="file"
            ref={imageInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            name="logo"
            id="logo"
            className="hidden"
          />
        </div>

        <div className="mt-6">
          <p className="text-sm text-foreground font-medium mb-2">Event name</p>
          <Input
            placeholder="Olympics"
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="name"
          />
        </div>

        <div className="mt-6">
          <p className="text-sm text-foreground font-medium mb-2">
            Event description
          </p>
          <Textarea
            placeholder="Event description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name="description"
          />
        </div>

        <div className="mt-6">
          <p className="text-sm text-foreground font-medium mb-2">
            Event duration
          </p>
          <DatePickerWithRange onDateChange={handleDateRangeChange} />
        </div>

        <Button className="mt-14" type="submit">
          Create
        </Button>
      </form>
    </div>
  );
}
