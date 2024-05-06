import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-[40%] max-sm:w-[70%] max-md:w-[60%] min-md:w-[60%] max-lg:w-[60%] flex-row items-center justify-center  mt-[8%] max-md:mt-[12%] max-sm:mt-[18%] max-lg:mt-[10%] ">
      {/* User Setting */}
      <Link href={"http://localhost:3000/setting"}>
        <div className="flex items-end justify-start border-b-2 py-2 border-gray-300  gap-2 ">
          <Image
            src={"/icons/arrow-back.svg"}
            alt="setting_icon"
            width={30}
            height={30}
          />
          <p className=" items-center justify-center text-[18px] font-semibold">
            Notificaton
          </p>
        </div>
      </Link>

      {/* New Posts */}
      <Link href={"#"}>
        <button className="mt-[6%] w-full h-[70px] max-sm:h-[60px] flex-row flex items-center justify-between  border rounded-md shadow-md p-2 hover:bg-gray-50">
          <div className="flex items-center justify-start gap-1">
            <Image
              src={"/icons/img_post.svg"}
              alt="setting_icon"
              width={24}
              height={24}
            />
            <div className=" flex flex-col items-start justify-start ms-2">
              <p className=" items-start justify-start text-[18px]">
                New Posts
              </p>
              <p className=" items-center justify-center text-[12px] text-gray-500">
                These all notification for new post{" "}
              </p>
            </div>
          </div>
          <Image src={"/icons/turn_on.svg"} alt="goon" width={30} height={30} />
        </button>
      </Link>

      {/* Answer */}
      <Link href={"#"}>
        <button className="mt-[3%] w-full h-[70px] max-sm:h-[60px] flex-row flex items-center justify-between  border rounded-md shadow-md p-2 hover:bg-gray-50">
          <div className="flex items-center justify-start gap-1">
            <Image
              src={"/icons/chat.svg"}
              alt="setting_icon"
              width={24}
              height={24}
            />
            <div className=" flex flex-col items-start justify-start ms-2">
              <p className=" items-start justify-start text-[18px]">Answer</p>
              <p className=" items-center justify-center text-[12px] text-gray-500">
                These all notification for Answers{" "}
              </p>
            </div>
          </div>
          <Image src={"/icons/turn_on.svg"} alt="goon" width={30} height={30} />
        </button>
      </Link>
    </div>
  );
}
