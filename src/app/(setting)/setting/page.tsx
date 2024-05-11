'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Switch from "@mui/material/Switch";
import { AnyCnameRecord } from "dns";

export default function Page() {
  const [checked, setChecked] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language

  const handleChange = (event:any) => {
    setChecked(event.target.checked);
  };

  const handleLanguageChange = (event:any) => {
    setSelectedLanguage(event.target.value);
    // Implement logic to change the language
  };

  // Function to get the flag image URL based on the selected language
  const getFlagImage = (language:any) => {
    switch (language) {
      case "en":
        return "/icons/english.svg";
      case "kh":
        return "/icons/khmer.svg";
      // Add more cases for other languages
      default:
        return "";
    }
  };

  return (
    <div className="w-[40%] max-sm:w-[70%] max-md:w-[60%] min-md:w-[60%] max-lg:w-[60%] flex-row items-center justify-center mt-[8%] max-md:mt-[13%] max-sm:mt-[28%] max-lg:mt-[10%] ">
      {/* User Setting */}
      <div className="flex items-end justify-start border-b-2 border-gray-300 p-2 lg:p-1 gap-2 mt-4 ">
        <Image
          src={"/icons/setting.svg"}
          alt="setting_icon"
          width={30}
          height={30}
        />
        <p className="items-center justify-center text-[18px] font-semibold">
          User Setting
        </p>
      </div>
      {/* Account */}
      <Link href={"/setting/account"}>
        <button className="mt-[4%] w-full h-[70px] max-sm:h-[60px] flex-row flex items-center justify-between border rounded-md shadow-md p-5 hover:bg-gray-50">
          <div className="flex items-center justify-start gap-1">
            <Image
              src={"/icons/account.svg"}
              alt="setting_icon"
              width={24}
              height={24}
            />
            <p className="items-center justify-center text-[18px]">Account</p>
          </div>
          <Image src={"/icons/go_on.svg"} alt="goon" width={17} height={17} />
        </button>
      </Link>

      {/* Notification */}
      <Link href={"/setting/notification"}>
        <button className="mt-[3%] w-full h-[70px] max-sm:h-[60px] flex-row flex items-center justify-between border rounded-md shadow-md p-5 hover:bg-gray-50">
          <div className="flex items-center justify-start gap-1">
            <Image
              src={"/icons/notifi.svg"}
              alt="setting_icon"
              width={24}
              height={24}
            />
            <p className="items-center justify-center text-[18px]">
              Notification
            </p>
          </div>
          <Image src={"/icons/go_on.svg"} alt="goon" width={17} height={17} />
        </button>
      </Link>

      {/* Language Dropdown */}
      <div className="mt-[2%] w-full h-[70px] max-sm:h-[60px] flex-row flex gap-3 relative items-center border justify-between hover:bg-gray-50">
        <select
          className="w-full h-[70px] max-sm:h-[60px] flex-row flex items-center justify-between border rounded-md shadow-md p-5 hover:bg-gray-100 appearance-none bg-transparent border-none"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="en" className="bg-no-repeat bg-center pl-12">
            English
          </option>
          <option value="kh" className="bg-no-repeat bg-center pl-12">
            Khmer
          </option>
          {/* Add more options for other languages */}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
          <Image
            src={getFlagImage(selectedLanguage)}
            alt="flag_icon"
            width={30}
            height={30}
            className="mr-3"
          />
        </div>
      </div>

      {/* Dark Mode */}
      <button className="mt-[2%] w-full h-[70px] max-sm:h-[60px] flex-row flex gap-3 items-center justify-between border rounded-md shadow-md p-5 hover:bg-gray-50">
        <div className="flex items-center justify-start gap-1">
          <Image
            src={"/icons/dark.svg"}
            alt="setting_icon"
            width={24}
            height={24}
          />
          <p className="items-center justify-center text-[18px]">Dark Mode</p>
        </div>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </button>

      {/* Help */}
      <Link href={"/setting/help"}>
        <button className="mt-[2%] w-full h-[70px] max-sm:h-[60px] flex-row flex items-center justify-between border rounded-md shadow-md p-5 hover:bg-gray-50">
          <div className="flex items-center justify-start gap-1">
            <Image
              src={"/icons/help.svg"}
              alt="setting_icon"
              width={24}
              height={24}
            />
            <p className="items-center justify-center text-[18px]">Help</p>
          </div>
          <Image src={"/icons/go_on.svg"} alt="goon" width={17} height={17} />
        </button>
      </Link>

      {/* Switch Account */}
      <Link href={"/"}>
        <button className="mt-[4%] mb-[2%] w-full h-[70px] max-sm:h-[60px] flex-row flex items-center justify-between border rounded-md shadow-md p-5 hover:bg-gray-50">
          <div className="flex items-center justify-start gap-1">
            <p className="items-center justify-center text-[18px]">
              Switch Account
            </p>
          </div>
          <Image
            src={"/icons/switch.svg"}
            alt="setting_icon"
            width={24}
            height={24}
          />
        </button>
      </Link>
    </div>
  );
}
