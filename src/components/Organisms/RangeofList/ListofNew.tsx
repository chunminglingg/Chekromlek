import { ButtonIcon } from "@/components/Molecules";
import React from "react";
import Link from "next/link";
const ListofNew = () => {
  return (
    <div className="w-[419px] h-[70px] border border-fuchsia-200 rounded-lg flex justify-between items-center">
      <Link href="/hot" passHref className=" hover:bg-slate-100 rounded-md w-full h-full flex items-center justify-center">
        <ButtonIcon icon="/svg/hot.svg">hot</ButtonIcon>
      </Link>
      <Link href="/new" passHref className=" hover:bg-slate-100 rounded-md w-full h-full flex items-center justify-center">
        <ButtonIcon icon="/svg/New.svg">New</ButtonIcon>
      </Link>
      <Link href="/top" passHref className=" hover:bg-slate-100 rounded-md w-full h-full flex items-center justify-center">
        <ButtonIcon icon="/svg/Top.svg">top</ButtonIcon>
      </Link>
      <Link href="/options" passHref className=" hover:bg-slate-100 rounded-md w-full h-full flex items-center justify-center" >
        <ButtonIcon icon="/svg/option.svg"></ButtonIcon>
      </Link>
    </div>
  );
};

export default ListofNew;
