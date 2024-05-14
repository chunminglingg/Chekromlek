import { ButtonIcon } from "@/components/Molecules";
import { ListofNew } from "@/components/Organisms/RangeofList";
import React from "react";
import { ButtonCategories } from "@/components/Molecules";
const GeneralKnowledge = () => {
  return (
    <>
       <div className="flex flex-col justify-center mt-[5%]">
       <ButtonCategories
        icon="/svg/GeneralKnowledge.svg"
        title="General Knowledge"
        description="share your experiences here!"
      ></ButtonCategories>
       </div>
    </>
  );
};

export default GeneralKnowledge;
