"use client";
import React, { useState } from "react";
import { Button } from "@/components/Atoms/Button/Button";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
type SetSave = Dispatch<SetStateAction<boolean>>; // Assuming 'save' is of type boolean

const page = () => {
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setnewPw] = useState("");
  const [confirmpw,setConfirmpw]= useState("");
  const handleSave = () => {
    // Perform actions with currentName and newName
    console.log("Current Password:", currentPw);
    console.log("New Password:", newPw);
    console.log("Confirm Password:",confirmpw)
  };

  return (
    <>
      <div className="flex flex-col gap-3 lg:gap-3 mt-24 lg:border lg:border-gray-200 lg:p-4 lg:shadow-lg">
      <div>
          <Link href={"http://localhost:3000/setting/account"}>
            <div className="flex flex-row gap-2 ml-2">
              <Image
                src={"/icons/arrow-back.svg"}
                alt="setting_icon"
                width={20}
                height={20}
              />
              <h1>Change Password</h1>
            </div>
          </Link>
          <hr className="w-[370px] text-left ml-2 mt-1 lg:w-[460px] h-2px border-gray-300" />
        </div>
        <div className="flex flex-col gap-3 lg:gap-2">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-2 lg:justify-center lg:items-center">
            <label htmlFor="" className=" ml-14 text-sm lg:ml-6">Current Password:</label>
            <input
              type="text"
              name=""
              id=""
              className="w-[280px] ml-14 lg:ml-2 lg:w-[350px] h-[50px] border rounded-lg shadow-lg"
              value={currentPw}
              onChange={(e) => setCurrentPw(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:justify-center lg:items-center">
            <label htmlFor="" className="ml-14 text-sm lg:ml-11 text-[12px] lg:text-sm">
              New Password:
            </label>
            <input
              type="text"
              name=""
              id=""
              className="w-[280px] ml-14 lg:ml-2 lg:w-[350px] h-[50px] border rounded-lg shadow-lg"
              value={newPw}
              onChange={(e) => setnewPw(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:justify-center lg:items-center">
            <label htmlFor="" className="ml-14 text-[12px] text-sm lg:ml-[22px]">
              confirm Password:
            </label>
            <input
              type="text"
              name=""
              id=""
              className="w-[280px] ml-14 lg:ml-3 lg:w-[350px] h-[50px] border rounded-lg shadow-lg"
              value={confirmpw}
              onChange={(e) => setConfirmpw(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center lg:justify-end lg:items-end gap-2  ">
          <Button className="w-[80px]" onClick={handleSave} background="bg-violet-500" >
            Save
          </Button>
          <Button className=" w-[80px]" background="bg-slate-300" >Cancel</Button >
        </div>
      </div>
    </>
  );
};

export default page;
