import Modal from "@/components/Molecules/Post/Modal/Modal";
import { PostCard } from "@/components/Organisms";
import { ListofNew } from "@/components/Organisms/RangeofList";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        
        <div className="mt-[9%] flex items-center"></div>
        <div>
        <Modal/>
        </div>
        {/* <div className="items-start justify-start border-blue-500 rounded-lg">
          <ListofNew/>
        </div> */}
        <PostCard
          profile="/card-svg/avatar.svg"
          hour={2}
          username="Kimlang Tieng"
          caption="Why is it that although China is already the second largest  in the world."
          postImage="/socialMedia/imageContent.svg"
        />
        <PostCard
          profile="/card-svg/avatar.svg"
          hour={4}
          username="Kimleng Tieng"
          caption="Why is it  s it that although China is already the second largest  in the world..already the second largest  in the worldalready the second largest  in the worldthat although China is already the second largest  in the world"
        />
      </div>
    </>
  );
};

export default page;
