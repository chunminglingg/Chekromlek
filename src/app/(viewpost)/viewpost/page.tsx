import Modal from "@/components/Molecules/Post/Modal/Modal";
import { ViewPost } from "@/components/Molecules/Post/ViewPost";

import { UserCard } from "@/components/Organisms/postCard/UserAnswer/UserCard";
import React from "react";

export default function Viewpost() {
  return (
    <div className="max-sm:mt-[5%] min-md:mt-[15%] lg:mt-[7%]">
      <div className=" w-[430px] max-sm:w-[315px] max-sm:mt-[18%] h-auto border rounded-md translate-x-1">
       <div className="flex flex-col ">
          <ViewPost
            profile="/card-svg/avatar.svg"
            hour={2}
            username="Kimlang Tieng"
            // postImage='/socialMedia/imageContent.svg'
            caption=" Why is it that although China is already the second largest  in the world."
          />
        </div>
        <div className="flex items-center justify-center mb-1">
          <UserCard
            profile="/imgs/profile.svg"
            hour={2}
            username="Hai Hai"
            // postImage=""
            caption=" China's rise to become the second-largest economy in the world is the result of a combination of factors, including its large population, economic reforms, manufacturing prowess, infrastructure development, global trade integration, government policies, and investments in technology and innovation."
          />
        </div>
      </div>
    </div>
  );
}
