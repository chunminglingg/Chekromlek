"use client";
import React, { ReactNode, useState } from "react";

interface SideStyleProp {
  imgUrl: ReactNode;
  imgUrlAfter: ReactNode;
  Title: ReactNode;
}

const SideStyle: React.FC<SideStyleProp> = ({ imgUrl, imgUrlAfter, Title }) => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      {isClick ? (
        <button
          onClick={handleClick}
          className="flex flex-row gap-2 items-center  px-4 py-2 group  rounded-xl w-[250px]"
        >
          {imgUrlAfter}
          <span className="text-violet-600 font-semibold">{Title}</span>
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="flex flex-row gap-2 items-start px-4 py-2 group hover:bg-gray-200 rounded-xl w-[250px] text-[#343A40] "
        >
          {imgUrl}
          <span>{Title}</span>
        </button>
      )}
    </>
  );
};

export default SideStyle;
