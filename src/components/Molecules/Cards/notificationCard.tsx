import React, { useState } from "react";
import Image from "next/image";

interface NotificationCardProps {
  id: string;
  image: string;
  userName: string;
  description: string;
  selectCard?: string | null;
  onSelectCard?: (id: string) => void;
  badge?: string;
}

const NotificationCard = ({
  id,
  image,
  userName,
  description,
  onSelectCard,
  badge = "new",
}: NotificationCardProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <>
      <div
        className={`cursor-pointer container${
          isSelected ? "bg-[#FFFF]" : "bg-[#F4F4F4]"
        } border-gray-200 p-4 shadow-sm md:w-[450px] relative flex rounded-xl`}
        onClick={() => {
          setIsSelected(!isSelected);
          if (onSelectCard) {
            onSelectCard(id);
          }
        }}
      >
        <div className="flex ">
          <div className="mr-3">
            <Image
              src={image}
              alt="user-profile"
              width={50}
              height={50}
              className="w-[90px] h-[55px] rounded-full object-cover"
            />
          </div>
          <div className="flex justify-center items-center mr-9 relative">
            <div className="line-clamp-1 md:line-clamp-2 overflow-hidden">
              <p>
                <span className="font-semibold text-black">{userName},</span>
                <span className="text-gray-500 text-sm font-normal animation-marquee-10s linear infinite">
                  {description}...
                </span>
              </p>
            </div>
            <div>
              {badge && (
                <div
                  className={`${
                    isSelected ? "hidden" : ""
                  } bg-blue-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full absolute top-5 left-1'`}
                >
                  {badge}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { NotificationCard };
