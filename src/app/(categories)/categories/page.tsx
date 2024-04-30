"use client";
import { ButtonCategories } from "@/components";
import ButtonCategorieslist from "@/components/Organisms/ButtonCategorieslist/ButtonCategorieslist";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [showMore, setShowMore] = useState(false);
  const categories = [
    {
      href: "/categories/math",
      icon: "/svg/Math.svg",
      title: "Mathematic",
      description: "Communicate with math lovers here!",
    },
    {
      href: "/categories/physic",
      icon: "/svg/Physic.svg",
      title: "Physical",
      description: "Communicate with physic lovers here!",
    },
    {
      href: "/categories/chemistry",
      icon: "/svg/Chemistry.svg",
      title: "Chemistry",
      description: "Communicate with chemistry lovers here!",
    },
    {
      href: "/categories/biology",
      icon: "/svg/Biology.svg",
      title: "Biology",
      description: "Communicate with bio lovers here!",
    },
    {
      href: "/categories/khmer",
      icon: "/svg/khmer.svg",
      title: "Writing",
      description: "Share your khmer writing here!",
    },
    {
      href: "/categories/history",
      icon: "/svg/History.svg",
      title: "History",
      description: "Get to know history together here!",
    },
    {
      href: "/categories/english",
      icon: "/svg/English.svg",
      title: "English",
      description: "Sharing your English learning tips here!",
    },
  ];
  const displayedCategories = categories.slice(
    0,
    showMore ? categories.length : 3
  );

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <div className="flex flex-col justify-start">
        <div className="text-2xl font-semibold  text-[#343A40]">Categories</div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="text-lg pt-2 font-medium text-[#6C757D] opacity-[60%]">
              Education
            </div>

            <div className="grid grid-cols-1 justify-start">
              {displayedCategories.map((category) => (
                <Link href={category.href} key={category.title}>
                  <ButtonCategories
                    icon={category.icon}
                    title={category.title}
                    description={category.description}
                  />
                </Link>
              ))}
            </div>

            {categories.length > 3 && (
              <button
                className="mt-4 text-center bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
                onClick={handleShowMore}
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            )}
          </div>

          <div className="text-lg pt-2 font-medium  text-[#6C757D] opacity-[60%]">
            General Content
          </div>
          <div className="grid grid-cols-1 justify-start">
            <Link href={"/categories/generalknowledge"}>
              <ButtonCategories
                icon="/svg/GeneralKnowledge.svg"
                title="General Knowledge"
                description="share your experiences here!"
              ></ButtonCategories>
            </Link>
            <Link href={"/categories/mental"}>
              <ButtonCategories
                icon="/svg/Mental.svg"
                title="Mental consultant"
                description="sharing your mental problems here! we can help you with it."
              ></ButtonCategories>
            </Link>
            <Link href={"/categories/technology"}>
              <ButtonCategories
                icon="/svg/Technology.svg"
                title="Technology"
                description="Communicate with Technology lovers here!"
              ></ButtonCategories>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
