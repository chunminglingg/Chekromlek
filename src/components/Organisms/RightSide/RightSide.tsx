import Link from "next/link";
import React from "react";

const RightSide = () => {
  return (
    <>
      <div className="content flex flex-col gap-2">
        <p className="text-[14px] text-[#6C757D] font-medium">Suggest for you</p>
        <div className="categories flex flex-col gap-2 items-start ">
          <Link href={"#"}>
            <button className="w-[200px] text-[13px] h-[40px] rounded-xl border text-[#535c63] hover:opacity-[76%]">Mathematic</button>
          </Link>
          <Link href={"#"}>
          <button className="w-[200px] text-[13px] h-[40px] rounded-xl border text-[#535c63] hover:opacity-[76%]">Physic</button>
          </Link>
          <Link href={"#"}>
          <button className="w-[200px] text-[13px] h-[40px] rounded-xl border text-[#535c63] hover:opacity-[76%]">Chemistry</button>
          </Link>
          <Link href={"#"}>
          <button className="w-[200px] text-[13px] h-[40px] rounded-xl border text-[#535c63] hover:opacity-[76%]">Khmer Writting</button>
          </Link>
          <Link href={"#"}>
          <button className="w-[200px] text-[13px] h-[40px] rounded-xl border text-[#535c63] hover:opacity-[76%]">History</button>
          </Link>
          <Link href={"#"}>
          <button className="w-[200px] text-[13px] h-[40px] rounded-xl border text-[#535c63] hover:opacity-[76%]">Biology</button>
          </Link>
        </div>
        <p className="text-[14px] text-[#6C757D] font-light opacity-[60%]">Weshare, Inc. © 2024. All rights reserved.</p>
      </div>
    </>
  );
};

export default RightSide;
