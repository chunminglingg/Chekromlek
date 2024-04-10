import React from "react";
import { ButtonCategories } from "@/components/Molecules";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/components/Atoms";
const ButtonCategorieslist = () => {
  return (
    <div className="mt-20">
      {/*categoreis*/}
      <div className="flex justify-start mt-4 gap-4 ml-4 lg:hidden">
        <Image src="/svg/Arrow.svg" alt="Your Icon" width={20} height={20} />
       <Typography fontSize="bold">Categories</Typography>
      </div>
      <div className="flex flex-wrap justify-center lg:flex lg:flex-col"> 
     
     <ButtonCategories
        icon="/svg/GeneralKnowledge.svg"
        title="General Knowledge"
        description="share your experiences here!"
      ></ButtonCategories>
      <ButtonCategories
        icon="/svg/Math.svg"
        title="Mathematic"
        description="Communicate with math lovers here!"
      ></ButtonCategories>
      <ButtonCategories
        icon="/svg/Physic.svg"
        title="Physical"
        description="Communicate with physic lovers here!"
      ></ButtonCategories>
      <ButtonCategories
        icon="/svg/Biology.svg"
        title="Biology"
        description="Communicate with bio lovers here!"
      ></ButtonCategories>
      <ButtonCategories
        icon="/svg/Chemistry.svg"
        title="Chemistry"
        description="Communicate with chemistry lovers here!"
      ></ButtonCategories>
      <ButtonCategories
        icon="/svg/khmer.svg"
        title="Writing"
        description="share your khmer writing here!"
      ></ButtonCategories>
      <ButtonCategories
        icon="/svg/History.svg"
        title="History"
        description="Get to know history together here!"
      ></ButtonCategories>
      <ButtonCategories
        icon="/svg/English.svg"
        title="English"
        description="sharing your English learning tips here!"
      ></ButtonCategories>
      <ButtonCategories
        icon="/svg/Mental.svg"
        title="Mental consultant"
        description="sharing your mental problems here! we can help you with it."
      ></ButtonCategories>
      <ButtonCategories
        icon="/svg/Technology.svg"
        title="Technology"
        description="Communicate with Technology lovers here!"
      ></ButtonCategories>
       </div>
    </div>
  );
};

export default ButtonCategorieslist;
