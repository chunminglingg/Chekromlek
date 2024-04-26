"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ViewPostProps {
  profile: string;
  username: string;
  hour: number;
  caption: string;
  postImage?: string | undefined;
}

const ViewPost: React.FC<ViewPostProps> = ({
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
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  // Maximum length for the caption before truncation
  const maxCaptionLength = 100;
  return (
    <div className=" w-[430px] max-sm:w-[315px] h-auto min-md:mt-[10%] p-2  ">
      <div>
        <div className="flex items-center justify-between gap-5">
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
              <p className="text-sm text-gray-500">{hour} hour ago</p>
            </div>
          </div>
        </div>
        {/* Caption */}
        {/* <div className="mt-2">
          <p className="font-bold text-gray-900">{caption}</p>
        </div> */}
        <div className="card-content flex flex-col gap-4 items-center justify-center pt-2 pb-2">
          {/* Render truncated caption with "See more" link */}
          <p className="text-[18px] text-[#6C757D] font-medium">
            {isCaptionTruncated
              ? truncateCaption(caption || "", maxCaptionLength)
              : caption}
            {caption && caption.length > maxCaptionLength && (
              <button
                className="text-[14px] text-[#4b81ed] font-medium underline cursor-pointer ml-1"
                onClick={toggleCaptionTruncation}
              >
                {isCaptionTruncated ? " See more" : "See less"}
              </button>
            )}
          </p>
          {postImage && (
            <div className="w-[320px] h-[320px] flex justify-center items-center ">
              <Image
                alt="content post"
                src={postImage}
                width={320}
                height={320}
                className="rounded-md "
              />
            </div>
          )}
        </div>
        {/* Footer */}
        <div className=" mb-[2%] w-full border-t  border-gray-300"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <div className="hover:opacity-30">
              <Image
                src={"/card-svg/avatar.svg"}
                width={42}
                height={42}
                alt="profile"
                className="rounded-full "
              />
            </div>
            <input
              type="text"
              placeholder=" Answer question... "
              className="w-full px-2 py-2 text-[#6C757D] rounded-md focus:outline-none text-sm"
            />
          </div>
          <button>
            <Image
              alt="post"
              src={"/icons/sent.svg"}
              width={38}
              height={38}
              className="-translate-x-3"
            />
          </button>
        </div>
        <div className=" mt-[2%] w-full border-b  border-gray-300"></div>
      </div>
    </div>
  );
};
export default ViewPost;
