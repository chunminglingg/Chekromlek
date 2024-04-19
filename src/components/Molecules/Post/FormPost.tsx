"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/Atoms";
import UploadButton from "../UploadImage/UploadButton";

function FormPost() {
  return (
    <div className=" mt-[10%] max-md:w-[250px] items-center justify-center ">
      <div className=" h-auto border-b-2 border-neutral-200 ">
        <p className="text-md">Create a Post</p>
      </div>
      <div>
        <select className="w-[180px] h-[30px] mt-[3%] font-extralight border rounded-md border-gray-700 focus:outline-none focus:ring focus:ring-gray-700 max-sm:w-[89px]">
          <option value="Mathematic">Mathematic</option>
          <option value="Physic">Physic</option>
          <option value="Khmer_Writing">Khmer Writing</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Biology">Biology</option>
          <option value="History">History</option>
        </select>
      </div>
      <div className="  m-[2%] border-t border-gray-200">
        <div className=" flex items-center justify-center ">
           {/* Post */}
          <div className="  p-3 ">
            <button className="inline-flex  gap-2 m-[1%]">
              <Image src="/post.svg" alt="post" width={24} height={24} />
              <p>Post</p>
            </button>
          </div>
          {/* Attachement */}
          <div className=" p-3">
            <button className="inline-flex  gap-2 m-[1%]">
              <UploadButton/>
            </button>
          </div>
          {/* Link */}
          <div className=" p-3 ">
            <button className="inline-flex  gap-2 m-[1%]">
              <Image src="/link.svg" alt="img" width={24} height={24} />
              <p>Link</p>
            </button>
          </div>
        </div>
        <div>
          <textarea
            id="message"
            rows={8}
            className="p-2 w-full md:w-[513px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="typing something..."
          ></textarea>
        </div>
      </div>
      <div className="flex items-end justify-end">
      <Button className=" flex items-center justify-center border w-[80px] h-[43px] rounded-md bg-violet-700 hover:opacity-50">
        <p className="text-white">Post</p>
      </Button>
      </div>
    </div>
  );
}

export default FormPost;
