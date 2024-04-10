import React, { ReactNode } from "react";
import Image from "next/image";

interface CardFootrerProps {
  img: string;
  username: string;
  time: string;
}

const CardHeader: React.FC<CardFootrerProps> = ({ img, username, time }) => {
  return (
    <div className="flex justify-between items-center w-min-[200px] w-[90%]  m-auto mt-4 p-2 drop-shadow-lg">
      <div className="flex flex-row justify-center gap-2">
        <div>
          <Image
            src={img}
            width={50}
            height={50}
            className="border rounded-full"
            alt="User's Photo"
          ></Image>
        </div>
        <div className="flex flex-col gap-0">
          <p className="text-base text-[#33363F] font-sans hover:text-black ">{username}</p>
          <small className="text-xs text-[#889390] opacity-[60%] font-sans ">
            {time}
          </small>
        </div>
      </div>
      <div className="  hover:bg-slate-100  rounded-md">
        <i>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="1"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle
              cx="6"
              cy="12"
              r="1"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle
              cx="18"
              cy="12"
              r="1"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </i>
      </div>
    </div>
  );
};
export { CardHeader };
