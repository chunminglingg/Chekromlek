import { Button } from "@/components";
import ButtonRightSide from "@/components/Atoms/Button/ButtonRightSide"
import React from "react";

const SideRight = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mt-2 max-sm:hidden max-md:hidden">
        <main>
          <h2 className="text-[#ACACAC] mb-[5%]">Suggest for you</h2>
          <div className="flex flex-col gap-2 ">
            <ButtonRightSide>Mathematic</ButtonRightSide>
            <ButtonRightSide>Physic</ButtonRightSide>
            <ButtonRightSide>Khmer Writing</ButtonRightSide>
            <ButtonRightSide>Chemistry</ButtonRightSide>
            <ButtonRightSide>Biology</ButtonRightSide>
            <ButtonRightSide>History</ButtonRightSide>
          </div>
        </main>
      </div>
    </>
  );
};

export default SideRight;
