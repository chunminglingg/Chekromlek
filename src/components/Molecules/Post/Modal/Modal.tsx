"use client";
import { useState } from "react";
import React from "react";
import  ShowModal  from "@/components/Molecules/Post/Modal/ShowModal";
import Post from "../Post";

const Modal = () => {
  const [modalState, setModalState] = useState<boolean>(false);
  return (
    <div  >
      <div
      className=" w-[300px] mt-[10%] min-sm:mt-[15%] min-sm:ms-[10%]"
      onClick={() => setModalState(true)}>
      <Post />
      </div>
      <div>{modalState && <ShowModal setModalState={setModalState}/>}</div>
    </div>
  );
};

export default Modal;
