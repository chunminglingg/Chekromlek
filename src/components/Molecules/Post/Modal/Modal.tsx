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

      className=" w-[150px] max-sm:w-auto items-start -translate-x-72 max-sm:translate-x-full  max-sm:h-auto md:-translate-x-80 md:ms-[-5px] max-md:w-auto min-md:h-auto md:mt-[3%]"
      onClick={() => setModalState(true)}>
      <Post />
      </div>
      <div>{modalState && <ShowModal setModalState={setModalState}/>}</div>
    </div>
  );
};

export default Modal;
