import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function page() {

  return (
    <div className="w-[40%] max-sm:w-[70%] max-md:w-[60%] min-md:w-[60%] max-lg:w-[60%] flex-row items-center justify-center mt-[8%] max-md:mt-[13%] max-sm:mt-[28%] max-lg:mt-[10%] ">
      {/* User Setting */}
      <div className="flex items-end justify-start border-b-2 border-gray-300 py-2 gap-2 ">
        <Image
          src={"/icons/setting.svg"}
          alt="setting_icon"
          width={30}
          height={30}
        />
        <p className=" items-center justify-center text-[18px] font-semibold">
          User Setting
        </p>
      </div>
      {/* Account */}
      <Link href={"/setting/account"}>
        <button className="lg:mt-[4%] mt-[6%] w-full h-[70px] max-sm:h-[60px] flex-row flex items-center justify-between  border rounded-md shadow-md p-5 hover:bg-gray-50">
          <div className="flex items-center justify-start gap-1">
            <Image
              src={"/icons/account.svg"}
              alt="setting_icon"
              width={24}
              height={24}
            />
            <p className=" items-center justify-center text-[18px]">Account</p>
          </div>
          <Image src={"/icons/go_on.svg"} alt="goon" width={17} height={17} />
        </button>
      </Link>

      {/* Notification */}
      <Link href={"/setting/notification"}>
        <button className="mt-[3%] w-full h-[70px] max-sm:h-[60px] flex-row flex items-center justify-between  border rounded-md shadow-md p-5 hover:bg-gray-50">
          <div className="flex items-center justify-start gap-1">
            <Image
              src={"/icons/notifi.svg"}
              alt="setting_icon"
              width={24}
              height={24}
            />
            <p className=" items-center justify-center text-[18px]">
              Notification
            </p>
          </div>
          <Image src={"/icons/go_on.svg"} alt="goon" width={17} height={17} />
        </button>
      </Link>

      

      
      {/* Help */}
      <Link href={"/setting/help"}>
        <button className="mt-[3%] w-full h-[70px] max-sm:h-[60px] flex-row flex items-center justify-between  border rounded-md shadow-md p-5 hover:bg-gray-50">
          <div className="flex items-center justify-start gap-1">
            <Image
              src={"/icons/help.svg"}
              alt="setting_icon"
              width={24}
              height={24}
            />
            <p className=" items-center justify-center text-[18px]">Help</p>
          </div>
          <Image src={"/icons/go_on.svg"} alt="goon" width={17} height={17} />
        </button>
      </Link>

      {/* Switch Account */}
      <Link href={"/"}>
        <button className="mt-[3%] mb-[2%] w-full h-[70px] max-sm:h-[60px] flex-row flex items-center justify-between  border rounded-md shadow-md p-5 hover:bg-gray-50">
          <div className="flex items-center justify-start gap-1">
            <p className=" items-center justify-center text-[18px]">
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
