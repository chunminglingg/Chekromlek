"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/Atoms/Button/Button";
import UploadButton from "../UploadImage/UploadButton";

function FormPost() {
  return (
    <div className=" mt-[10%] max-md:w-[410px] items-center justify-center max-sm:w-[320px] ">
      <div className=" h-auto border-b-2 border-neutral-200 ">
        <p className="text-md">Create a Post</p>
      </div>
      <div>
        <select className="w-[180px] h-[30px] mt-[3%] max-sm:w-[120px] text-gray-500 text-[13px] border rounded-md border-gray-700 focus:outline-none focus:ring focus:ring-gray-700">
        <option value="Choose" >Choose Categories....</option>
          <option value="Mathematic">Mathematic</option>
          <option value="Physic">Physic</option>
          <option value="Khmer_Writing">Khmer Writing</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Biology">Biology</option>
          <option value="History">History</option>
        </select>
      </div>
      <div className="mt-[3%] border-t-2 border-gray-200  ">
        <div className=" flex items-start justify-between -translate-x-3">
           {/* Post */}
          <div className="  p-3  ">
            <button className="inline-flex  gap-2 ">
              <Image src="/post.svg" alt="post" width={24} height={24} />
              <p>Post</p>
            </button>
          </div>
          {/* Attachement */}
          <div className=" p-3">
            <button className="inline-flex  gap-2 ">
              <UploadButton/>
            </button>
          </div>
          {/* Link */}
          <div className=" p-3 ">
            <button className="inline-flex  gap-2 ">
              <Image src="/link.svg" alt="img" width={24} height={24} />
              <p>Link</p>
            </button>
          </div>
        </div>
        <div>
          <textarea
            id="message"
            rows={5}
            className="p-2 w-full md:w-[453px] text-sm text-black bg-gray-50 rounded-lg border border-gray-300  dark:text-white focus:outline-none"
            placeholder="typing something..."
          ></textarea>
        </div>
      </div>
      <div className="flex items-end justify-end">
      <Button className=" flex items-center justify-center border w-[100px] h-[40px] rounded-md bg-violet-700 hover:opacity-50">
        <p className="text-white">Post</p>
      </Button>
      </div>
    </div>
  );
}

export default FormPost;
