import Modal from "@/components/Molecules/Post/Modal/Modal";
import { ViewPost } from "@/components/Molecules/Post/ViewPost/ViewPost";
import { UserCard } from "@/components/Organisms/postCard/UserAnswer/UserCard";
import React from "react";

export default function Viewpost() {
  return (
    <div className=" mt-[5%] ">
      <div className=" w-[430px] max-sm:w-[315px] max-sm:mt-[18%] h-auto border rounded-md min-sm:mt-[15%] min-md:mt-[15%] lg:mt-[8%] p-1 ">
        {/* <div className="">
        <Modal/>
      </div>    */}
        <div className="">
          <ViewPost
            profile="/card-svg/avatar.svg"
            hour={2}
            username="Kimlang Tieng"
            // postImage=''
            caption="Check Your Code: Review the component responsible for rendering the problematic HTML. Look for any <div> elements inside <a> tags and correct them.
Inspect Server-Rendered HTML: Check the HTML source code generated on the server to see if it contains any unexpected <div> elements inside <a> tags. This can help you identify where the issue might be originating.
Use Proper HTML Structure The Next.js documentation on React Hydration Error provides additional information and guidance on how to resolve this error."
          />
        </div>
        <div>
          <UserCard
            profile="/card-svg/avatar.svg"
            hour={2}
            username="Hai Hai"
            // postImage=""
            caption="Check Your Code: Review the component responsible for rendering the problematic HTML. Look for any <div> elements inside <a> tags and correct them.
Inspect Server-Rendered HTML: Check the HTML source code generated on the server to see if it contains any unexpected <div> elements inside <a> tags. This can help you identify where the issue might be originating.
Use Proper HTML Structure: Ensure provides additional information and guidance on how to resolve this error."
          />
        </div>
      </div>
    </div>
  );
}
