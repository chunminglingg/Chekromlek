"use client";
import React, { useState } from "react";
import Image from "next/image";
import Like from "@/components/Atoms/Like/Like";
import Saved from "@/components/Atoms/Saved/Saved";
import Link from "next/link";

interface postCardProps {
  profile: string;
  username: string;
  hour: number;
  title?: string;
  caption?: string;
  postImage?: string | undefined;
}

const PostCard: React.FC<postCardProps> = ({
  profile,
  username,
  hour,
  caption,
  title,
  postImage,
}) => {
  // Calculate the height dynamically based on whether postImage is provided
  const cardHeight = postImage ? "h-[100%]" : "h-[100%]";

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
    <div className="flex flex-col gap-2 justify-center items-center shadow-md border rounded-md w-[663px] max-sm:w-[350px]">
      <div className={`card w-[663px] max-sm:w-[320px] ${cardHeight} flex justify-center items-center rounded-md `}>
        <div className="card-items w-[630px] max-sm:w-[300px]flex flex-col gap-2 justify-between">
          <div className="card-header flex flex-row justify-between mt-4">
            <div className="profile flex flex-row gap-2">
              <div className="avatar w-[42px] h-[42px] rounded-full ">
                <Image
                  alt="avatar"
                  src={profile}
                  height={42}
                  width={42}
                  className="rounded-full"
                />
              </div>
              <div className="Name&Time ">
                <h3 className="font-medium text-[16px] text-[#343A40]">
                  {username}
                </h3>
                <p className="font-normal text-[12px] text-[#6C757D]">
                  {hour} hour ago
                </p>
              </div>
            </div>
            <button className="options">
              <Image
                alt="option"
                src={"card-svg/option.svg"}
                width={20}
                height={20}
                className="hover:shadow-2xl hover:border rounded-md "
              />
            </button>
          </div>
          <div className="card-content flex flex-col gap-2 items-center">
            {/* Render truncated caption with "See more" link */}
            <p className="title font-semibold text-[#343A40] text-2xl hover:underline max-sm:text-xl max-sm:font-medium pt-2">{title}</p>
            <p className="text-[14px] text-[#343A40] font-light">
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
              <div className="w-[100%] h-full md:w-[100%] flex  border-b p-2 mb-2 ">
                <Image
                  alt="content post"
                  src={postImage}
                  width={320}
                  height={320}
                  className="flex w-full h-full aspect-ratio-16/9 "
                />
              </div>
            )}
         
          </div>
          <div className="card-footer flex flex-col justify-center items-start gap-2 mb-3 ">
            {/* Footer content */}
            <div className="card-items-footer w-[100%] flex flex-row justify-between items-center">
              <div className=" flex flex-row justify-between items-center gap-6">
                <div className="like">
                  <Like />
                </div>
                <div className="Saved">
                  <Saved />
                </div>
              </div>
              <div className="right-item ">
               <Link href={"/viewpost"}>
               <button className="px-6 py-3 bg-[#6A23A7] text-white rounded-lg text-[12px] hover:opacity-[80%] flex flex-row gap-2">
                  Answer
                  <Image
                    alt="post"
                    src={'/card-svg/postsw.svg'}
                    width={20}
                    height={20}
                  />
                </button>
               </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
