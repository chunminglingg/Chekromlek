"use client";
import { useState } from "react";
import React from "react";
import  ShowModal  from "@/components/Molecules/Post/Modal/ShowedModal";
import Post from "@/components/Molecules/Post/Post";

const Modal = () => {
  const [modalState, setModalState] = useState<boolean>(false);
  return (
    <div >
      <div
      className=" w-[630px] max-sm:w-[320px] -translate-x-52 max-sm:translate-x-full  max-sm:h-auto max-md:-translate-x-52 max-md:w-auto min-md:h-auto md:mt-[15%]"
      onClick={() => setModalState(true)}>
      <Post />
      </div>
      <div>{modalState && <ShowModal setModalState={setModalState}/>}</div>
    </div>
  );
};

export default Modal;
