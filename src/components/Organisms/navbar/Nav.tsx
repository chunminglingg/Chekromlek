import { Burger } from "@/components/Atoms";
import Logo from "@/components/Atoms/Logo/Logo";
import InputSearch from "@/components/Molecules/Search/SearchInput";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function navbar() {
  return (
    <nav className="fixed top-0 z-40 w-full bg-white border-b border-gray-20 ">
      <div className="px-3 py-3 lg:px-5 lg:pl-10 flex justify-between">
        <div className="flex flex-row gap-4 items-center">
          <Link href={"/"}>
            <Logo />
          </Link>
          <div className="hidden lg:block ">
            <InputSearch />
          </div>
        </div>
        
        <div className="hidden md:flex md:flex-row gap-4 items-center pr-8">
          <button className="text-white bg-[#7B2CBF] flex flex-row gap-2 px-5 py-2 rounded-lg">
            <Link href={"/login"}>Login</Link>
            <Image
              src={"/icons/login.svg"}
              alt="loginIcon"
              width={24}
              height={24}
            />
          </button>
          <Link href={"#"}>
            <Image
              src={"/icons/lan.svg"}
              alt="languese"
              width={34}
              height={34}
            />
          </Link>
        </div>

       
        <div className="block md:hidden mt-4 absolute right-5">
          <Burger/>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
