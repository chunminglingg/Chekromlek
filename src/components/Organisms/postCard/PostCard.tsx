import React from "react";
import Image from "next/image";
import Like from "@/components/Atoms/Like/Like";
import Comment from "@/components/Atoms/Comment/Comment";
import Saved from "@/components/Atoms/Saved/Saved";

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
  const cardHeight = postImage ? "h-[500px]" : "h-[170px]";

  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center shadow-md">
        <div className="mt-[90px] flex items-center"></div>
        <div
          className={`card w-[350px] ${cardHeight} flex justify-center items-center rounded-md `}
        >
          <div className="card-items w-[320px] bg-white flex flex-col gap-2 justify-between">
            <div className="card-header flex flex-row justify-between">
              <div className="profile flex flex-row gap-2">
                <div className="avatar w-[42px] h-[42px] rounded-full ">
                  <Image alt="avatar" src={profile} height={42} width={42} />
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
                  className="hover:shadow-xl"
                />
              </button>
            </div>
            <div className="card-content flex flex-col gap-2">
              {/* Content text */}
              {caption && (
                <p className="text-[14px] text-[#343A40]">{caption}</p>
              )}
              {postImage && ( // Conditionally render postImage
                <div className="w-[320px] h-[320px] bg-slate-300">
                  <Image
                    alt="content post"
                    src={postImage}
                    width={320}
                    height={320}
                  />
                </div>
              )}
            </div>
            <div className="card-footer flex flex-col justify-center items-start gap-2">
              {/* Footer content */}
              <div className="w-[100%] h-[0.5px] bg-slate-300"></div>
              <div className="card-items-footer w-[100%] flex flex-row justify-between">
                <div className="left-items flex flex-row justify-center items-center gap-2">
                  <div className="like">
                    <Like />
                  </div>
                  <div className="Comment">
                    <Comment />
                  </div>
                  <div className="Saved">
                    <Saved />
                  </div>
                </div>
                <div className="right-item ">
                  <button className="px-4 py-2 bg-[#6A23A7] text-white rounded-lg text-[12px] hover:opacity-[80%] flex flex-row gap-1">
                    Answer
                    <Image
                      alt="post"
                      src={"/card-svg/posts.svg"}
                      width={19}
                      height={19}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
