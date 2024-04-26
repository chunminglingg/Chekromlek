import { PostCard } from "@/components/Organisms";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="mt-[25%] flex items-center"></div>
        <PostCard
          profile="/card-svg/avatar.svg"
          hour={2}
          username="Kimlang Tieng"
          caption="Why is it that although China is already the second largest  in the world."
          postImage="/socialMedia/imageContent.svg"
        />
        <PostCard
          profile="/card-svg/avatar.svg"
          hour={3}
          username="Kimlang Tieng"
          caption="Why is it that although China is already the second largest  in the world..already the second largest  in the worldalready the second largest  in the worldthat although China is already the second largest  in the world"
        />
      </div>
    </>
  );
};

export default page;
