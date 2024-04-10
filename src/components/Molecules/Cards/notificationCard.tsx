import React from "react";
import Image from "next/image";

interface NotificationCardProps {
  id: string;
  image: string;
  name: string;
  description: string;
  selectCard?: string | null;
  onSelectCard?: React.Dispatch<React.SetStateAction<string>>;
  badge?: string;
}
const NotificationCard = ({
  id,
  image,
  name,
  description,
  selectCard,
  badge = "new",
}: NotificationCardProps) => {
  return (
    <>
      <div className="cursor-pointer container bg-[#F4F4F4] border-gray-200  p-4  shadow-sm w-[450px] relative flex rounded-xl">
        <div className="flex">
          <div className="mr-3">
            <Image
              src={image}
              alt="user-profile"
              width={50}
              height={50}
              className="w-[90px] h-[55px] rounded-full object-cover"
            />
          </div>
          <div className="flex justify-center items-center mr-3">
            <div>
              <p>
                <span className="font-semibold text-black">{name},</span>
                <span className="text-gray-500 text-sm font-normal">
                  {description}...
                </span>
              </p>
            </div>
            <div>
              {badge && (
                <div
                  className={
                    selectCard === id
                      ? "bg-blue-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full hidden"
                      : "bg-blue-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full  "
                  }
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
