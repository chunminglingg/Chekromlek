import React from "react";
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
  return (
    <div className="mt-[5%] w-[430px] h-auto border rounded-md  ">
      <div>
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center">
            <Image
              src={profile}
              width={42}
              height={42}
              className="w-10 h-10 rounded-full"
              alt="profile"
            />
            <div className="ml-2">
              <p className="font-medium text-[16px] text-gray-900">{username}</p>
              <p className="text-sm text-gray-500">{hour}hour ago</p>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <p className="font-bold text-gray-900">{caption}</p>
        </div>
      </div>
      {/* Footer */}
      <div className=" mb-[2%] w-full border-t rounded-sm border-gray-500"></div>
      
      <div className="flex items-center justify-between">
       <div className="flex items-center justify-center">
        <Image
        src={"/imgs/mypf.jpg"}
        width={42}
        height={42}
        alt="profile"
        className="rounded-full"
        />
       <input type="text" placeholder=" Answer question... "
       className="w-full px-8 py-2 text-D9D9D9 rounded-md focus:outline-none"/>
        </div>
      
          <Image
            alt="post"
            src={"/icons/sent.svg"}
            width={38}
            height={38}
            className="-translate-x-3"
          />
        
        
      </div>
      <div className=" mt-[2%] w-full border-b rounded-sm border-gray-500"></div>
    
    </div>
  );
};
export { ViewPost };
