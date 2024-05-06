"use client";
import React, { useState } from "react";
import { Button } from "@/components/Atoms/Button/Button";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
type SetSave = Dispatch<SetStateAction<boolean>>; // Assuming 'save' is of type boolean

const page = () => {
  const [currentName, setCurrentName] = useState("");
  const [newName, setNewName] = useState("");

  const handleSave = () => {
    // Perform actions with currentName and newName
    console.log("Current Name:", currentName);
    console.log("New Name:", newName);
  };

  return (
    <>
      <div className="flex flex-col gap-10 lg:gap-6 mt-24 lg:border lg:border-gray-200 lg:p-4 lg:shadow-lg">
        <div>
          <Link href={"http://localhost:3000/setting/account"}>
            <div className="flex flex-row gap-2 ml-2">
              <Image
                src={"/icons/arrow-back.svg"}
                alt="setting_icon"
                width={20}
                height={20}
              />
              <h1>Change Name</h1>
            </div>
          </Link>
          <hr className=" w-[370px] text-left ml-2 mt-1 lg:w-[460px] h-2px border-gray-300" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col lg:flex-row gap-2 lg:justify-center lg:items-center">
            <label htmlFor="" className="ml-14 text-sm lg:ml-5">Current Name:</label>
            <input
              type="text"
              name=""
              id=""
              className=" w-[280px] lg:w-[350px] h-[50px] ml-14 lg:ml-0 border rounded-lg shadow-lg"
              value={currentName}
              onChange={(e) => setCurrentName(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:justify-center lg:items-center">
            <label htmlFor="" className="ml-14 text-sm lg:ml-10">
              New Name:
            </label>
            <input
              type="text"
              name=""
              id=""
              className=" w-[280px] lg:w-[350px] h-[50px] ml-14 lg:ml-0 border rounded-lg shadow-lg"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center lg:justify-end lg:items-end gap-2 mr-3  ">
          <Button className="w-[80px]" onClick={handleSave} background="bg-violet-500">
            Save
          </Button>
          <Button className="" background="bg-slate-300">
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;
