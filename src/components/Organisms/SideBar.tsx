"use client";
import React from "react";
import { usePathname } from "next/navigation";
import SideLeft from "@/components/Molecules/SideLeft/SideLeft";
import Link from "next/link";
import Logo from "../Atoms/Logo/Logo";

const SideBar = () => {
  const pathname = usePathname();
  const routeToHide = ["/login"];
  const hideNavbarFooter = routeToHide.includes(pathname);
  return (
    <div>
      {hideNavbarFooter ? null : (
        <nav className="fixed top-0 z-40 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 ">
          <div className="px-3 py-3 lg:px-5 lg:pl-3 flex justify-between">
            <Link href={"#"}>
              <Logo />
            </Link>
            <div className="flex flex-row gap-4 items-center ">
              <button className="text-white">Hello</button>
              <Link href={"#"}>hello</Link>
            </div>
          </div>
        </nav>
      )}
      <div className="flex justify-center items-center h-full">
        <div className="h-[200px]"></div>
      </div>
      {hideNavbarFooter ? null : (
        <aside>
          <aside className="fixed top-0 left-0 z-30 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0  ">
            <SideLeft />
          </aside>
        </aside>
      )}
    </div>
  );
};

export default SideBar;
