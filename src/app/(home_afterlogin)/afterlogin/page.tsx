import { CreatePostDialog } from "@/components";
import Modal from "@/components/Molecules/Post/Modal/Modal";
import { PostCard, PostCardList } from "@/components/Organisms";
import { ListofNew } from "@/components/Organisms/RangeofList";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        {/* <div className="items-start justify-start border-blue-500 rounded-lg">
          <ListofNew />
        </div> */}
        
        <div className="pt-[15%] max-sm:pt-[30%]">
          <CreatePostDialog />
          <PostCardList />
        </div>
      </div>
    </>
  );
};

export default page;
