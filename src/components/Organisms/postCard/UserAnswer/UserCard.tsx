"use client"
import React, { useState } from "react";
import Image from "next/image";

interface UserCardProps {
  profile: string;
  username: string;
  hour: number;
  caption: string;
  postImage?: string | undefined;
}

const UserCard: React.FC<UserCardProps> = ({
  profile,
  username,
  hour,
  caption,
  postImage,
}) => {
    // State to track whether the caption is truncated
    const [isCaptionTruncated, setIsCaptionTruncated] = useState(true);

    // Function to toggle the truncation of the caption
    const toggleCaptionTruncation = () => {
      setIsCaptionTruncated(!isCaptionTruncated);
    };
  
    // Function to truncate the caption if it exceeds a certain number of characters
    const truncateCaption = (text: string, maxLength: number) => {
      return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };
  
    // Maximum length for the caption before truncation
    const maxCaptionLength = 100;
  return (
    <div className="">
      <div className="mt-[2%] w-[420px] max-sm:w-[310px] h-auto border rounded-md max-sm:mt-[15%] min-md:mt-[10%] max-sm:border-none ">
        <div className="flex items-center justify-between ">
           {/* Profile */}
          <div className="flex items-center">
            <Image
              src={profile}
              width={42}
              height={42}
              className="w-10 h-10 rounded-full"
              alt="profile"
            />
            {/* Detail */}
            <div className="ml-2">
              <p className="font-medium text-[16px] text-gray-900">
                {username}
              </p>
              <p className="text-sm text-gray-500">update {hour} hour ago</p>
            </div>
          </div>
        </div>
        {/* Caption */}
          <div className="card-content flex flex-col gap-2 items-center justify-center">
            {/* Render truncated caption with "See more" link */}
            <p className="text-[14px] text-[#6C757D]">
              {isCaptionTruncated
                ? truncateCaption(caption || '', maxCaptionLength)
                : caption}
              {caption && caption.length > maxCaptionLength && (
                <button
                  className="text-[14px] text-[#4b81ed] font-medium underline cursor-pointer ml-1"
                  onClick={toggleCaptionTruncation}
                >
                  {isCaptionTruncated ? ' See more' : 'See less'}
                </button>
              )}
            </p>
            {postImage && (
              <div className="w-[320px] h-[320px] rounded-md">
                <Image
                  alt="content post"
                  src={postImage}
                  width={320}
                  height={320}
                />
              </div>
            )}
      </div>
      {/* Footer */}
      <div className=" mb-[2%] w-full border-t rounded-sm border-gray-500"></div>
      <div className="flex items-start justify-start gap-2">
      <div className="inline-flex items-start justify-start">
        <button className=" w-[95px] h-[45px] items-center justify-center border-2 rounded-md border-green-300 hover:border-green-500">
        <span className="text-green-600 text-[14px] ">Very Useful</span>
        </button>
      </div>
      <div>
      <button className=" w-[95px] h-[45px] items-center justify-center border-2 rounded-md border-red-200 hover:border-red-500">
        <span className="text-red-400 text-[14px] ">Very Useful</span>
        </button>
      </div>
      </div>
      </div>

   
    </div>
  );
};
export { UserCard };

