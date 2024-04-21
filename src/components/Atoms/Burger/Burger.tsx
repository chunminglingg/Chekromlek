"use client";
import { SideLeft } from "@/components/Molecules";
import Image from "next/image";
import React, { useState } from "react";

const Burger = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click); // Toggle the click state
  };

  return (
    <>
      <div className="flex flex-row gap-2 justify-center items-center">
        <div>
          <Image alt="" src={"/icons/icoSe.svg"} width={24} height={24} />
        </div>
        <div className="flex flex-col gap-2 items-end">
          {!click && (
            <button onClick={handleClick}>
              <Image
                alt="burger"
                src={"/icons/burger.svg"}
                width={24}
                height={24}
              />
            </button>
          )}

          {click && (
            <>
              <button onClick={handleClick}>
                <Image
                  alt="cancel"
                  src={"/icons/cancel.svg"}
                  width={24}
                  height={24}
                />
              </button>

              <div className="bg-white w-[270px] h-[370px] rounded-tl-2xl rounded-tr-0 rounded-br-0 rounded-bl-2xl shadow-md border">
                <div className="flex flex-col gap-2 items-center pt-4">
                  <button className="px-20 py-2 bg-[#7B2CBF] text-white rounded-lg hover:opacity-[60%]">
                    Login
                  </button>
                  <div className="w-[100%] h-[0.5px] bg-gray-200"></div>
                  {/* Render the dropdown content here */}
                  <SideLeft />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Burger;
