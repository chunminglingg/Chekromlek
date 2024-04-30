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
<<<<<<< HEAD
      className=" w-[630px] max-sm:w-[320px] -translate-x-52 max-sm:translate-x-full  max-sm:h-auto max-md:-translate-x-52 max-md:w-auto min-md:h-auto md:mt-[15%]"
=======
      className=" w-[150px] max-sm:w-auto -translate-x-52 max-sm:translate-x-full  max-sm:h-auto max-md:-translate-x-52 max-md:w-auto min-md:h-auto md:mt-[13%]"
>>>>>>> 0e504de146662779b3d57093e600038ae9a172d0
      onClick={() => setModalState(true)}>
      <Post />
      </div>
      <div>{modalState && <ShowModal setModalState={setModalState}/>}</div>
    </div>
  );
};

export default Modal;
