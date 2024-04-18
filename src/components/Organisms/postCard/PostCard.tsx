import Image from "next/image";
import React from "react";

function PostCard() {
  return (
    <>
      <div className=" flex flex-col gap-2 justify-center items-center">
        <div className="mt-[90px] flex items-center"></div>
        <div className="card w-[350px] h-[525px] bg-slate-900 flex justify-center items-center rounded-md ">
          <div className="card-items w-[320px] h-[500px] bg-white flex flex-col gap-2">
            <div className="card-header flex flex-row justify-between">
              <div className="profile flex flex-row gap-2">
                <div className="avatar w-[42px] h-[42px] rounded-full ">
                  <Image alt="avatar" src={"card-svg/avatar.svg"} height={42} width={42} />
                </div>
                <div className="Name&Time ">
                  <h3 className="font-medium text-[16px] text-[#343A40]">Kimlang Tieng</h3>
                  <p className="font-normal text-[12px] text-[#6C757D]">2 hour ago</p>
                </div>
              </div>
              <button className="options">
                <Image alt="option" src={"card-svg/option.svg"} width={20} height={20} className="hover:shadow-xl"/>
              </button>
            </div>
            <div className="card-footer flex justify-center items-center ">
              <div className="w-[100%] h-[0.5px] bg-slate-300"></div>
              <div className="card-items-footer flex flex-row">
                <div className="left-items">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="right-item"></div>
              </div>
            </div>
          </div>
        </div>
 
      </div>
    </>
  );
}

export default PostCard;
