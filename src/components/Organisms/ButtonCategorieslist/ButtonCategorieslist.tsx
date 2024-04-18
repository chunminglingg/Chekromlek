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
        <Link href={"http://localhost:3000/Categorieslist/GeneralKnowledge"}>
          <ButtonCategories
            icon="/svg/GeneralKnowledge.svg"
            title="General Knowledge"
            description="share your experiences here!"
          ></ButtonCategories>
        </Link>
        <Link href={"http://localhost:3000/Categorieslist/Math"}>
          <ButtonCategories
            icon="/svg/Math.svg"
            title="Mathematic"
            description="Communicate with math lovers here!"
          ></ButtonCategories>
        </Link>
        <Link href={"http://localhost:3000/Categorieslist/Physic"}>
          <ButtonCategories
            icon="/svg/Physic.svg"
            title="Physical"
            description="Communicate with physic lovers here!"
          ></ButtonCategories>
        </Link>
        <Link href={"http://localhost:3000/Categorieslist/Biology"}>
        <ButtonCategories
          icon="/svg/Biology.svg"
          title="Biology"
          description="Communicate with bio lovers here!"
        ></ButtonCategories>
        </Link>
        <Link href={"http://localhost:3000/Categorieslist/Chemistry"}>
        <ButtonCategories
          icon="/svg/Chemistry.svg"
          title="Chemistry"
          description="Communicate with chemistry lovers here!"
        ></ButtonCategories>
        </Link>
        <Link href={"http://localhost:3000/Categorieslist/Khmer"}>
        <ButtonCategories
          icon="/svg/khmer.svg"
          title="Writing"
          description="share your khmer writing here!"
        ></ButtonCategories>
        </Link>
        <Link href={"http://localhost:3000/Categorieslist/History"}>
        <ButtonCategories
          icon="/svg/History.svg"
          title="History"
          description="Get to know history together here!"
        ></ButtonCategories>
        </Link>
        <Link href={"http://localhost:3000/Categorieslist/English"}>
        <ButtonCategories
          icon="/svg/English.svg"
          title="English"
          description="sharing your English learning tips here!"
        ></ButtonCategories>
        </Link>
        <Link href={"http://localhost:3000/Categorieslist/Mental"}>
        <ButtonCategories
          icon="/svg/Mental.svg"
          title="Mental consultant"
          description="sharing your mental problems here! we can help you with it."
        ></ButtonCategories>
        </Link>
        <Link href={"http://localhost:3000/Categorieslist/Technology"}>
        <ButtonCategories
          icon="/svg/Technology.svg"
          title="Technology"
          description="Communicate with Technology lovers here!"
        ></ButtonCategories>
        </Link>
      </div>
    </div>
  );
};

export default ButtonCategorieslist;