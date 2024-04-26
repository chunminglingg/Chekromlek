"use client";
import React, { useState } from "react";
import Image from "next/image";
import Like from "@/components/Atoms/Like/Like";
import Comment from "@/components/Atoms/Comment/Comment";
import Saved from "@/components/Atoms/Saved/Saved";
import Link from "next/link";

interface postCardProps {
  profile: string;
  username: string;
  hour: number;
  caption?: string;
  postImage?: string | undefined;
}

const PostCard: React.FC<postCardProps> = ({
  profile,
  username,
  hour,
  caption,
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

    <div className="flex flex-col gap-2 justify-center items-center shadow-md border rounded-md">
      <div className={`card w-[350px] ${cardHeight} flex justify-center items-center rounded-md `}>
        <div className="card-items w-[320px] bg-white flex flex-col gap-2 justify-between">
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
          <div className="card-content flex flex-col gap-2">
            {/* Render truncated caption with "See more" link */}

            <p className="text-[14px] text-[#6C757D]">
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
              <div className="w-[320px] h-[320px]  rounded-md">
                <Image
                  alt="content post"
                  src={postImage}
                  width={320}
                  height={320}
                />
              </div>
            )}
          </div>
          <div className="card-footer flex flex-col justify-center items-start gap-2 mb-3 ">
            {/* Footer content */}

            <div className="w-[100%] h-[0.5px] bg-slate-300"></div>
            <div className="card-items-footer w-[100%] flex flex-row justify-between items-center">
              <div className="left-items flex flex-row justify-center items-center gap-4">
                <div className="like">
                  <Like />
                </div>
                <div className="Saved">
                  <Saved />
                </div>
              </div>
              <div className="right-item ">
                <Link href={"/viewpost"}>
                  <button className="px-4 py-3 bg-[#6A23A7] text-white rounded-lg text-[12px] hover:opacity-[80%] flex flex-row gap-1">
                    Answer
                    <Image
                      alt="post"
                      src={"/card-svg/postsw.svg"}
                      width={19}
                      height={19}
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
