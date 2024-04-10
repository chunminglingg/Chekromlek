import { ButtonIcon } from "@/components/Molecules";
import React from "react";
import Link from "next/link";
const ListofNew = () => {
  return (
    <div className="w-[439px] h-[76px] border-black rounded-lg ml-3 bg-slate-300 flex justify-between items-center">
      <Link href="/hot" passHref>
        <ButtonIcon icon="/svg/hot.svg">hot</ButtonIcon>
      </Link>
      <Link href="/new" passHref>
        <ButtonIcon icon="/svg/New.svg">New</ButtonIcon>
      </Link>
      <Link href="/top" passHref>
        <ButtonIcon icon="/svg/Top.svg">top</ButtonIcon>
      </Link>
      <Link href="/options" passHref>
        <ButtonIcon icon="/svg/option.svg"></ButtonIcon>
      </Link>
    </div>
  );
};

export default ListofNew;
