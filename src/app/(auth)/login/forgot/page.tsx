import Image from "next/image";
import React from "react";
import "../../../globals.css"
import Link from "next/link";

const page = () => {
  return (
    <>
     <div className="flex flex-col md:flex-row h-screen w-screen justify-between">
  {/* Left panel */}
  <div className="hidden md:flex w-[60%] h-screen bg-[#7B2CBF] lg:flex relative justify-center items-center shadow-md">
    <div>
      <Image
        src={"/login/pandel3.svg"}
        alt="panel3"
        width={530}
        height={300}
      />
    </div>
  </div>

  {/* Right card */}
  <div className="w-full md:w-[40%] h-screen flex flex-col items-center justify-center relative">
    <div className="absolute top-2 right-4">
      <Image src={"/login/logo.svg"} alt="logo" width={120} height={60} />
    </div>
    <div className="w-[500px] md:w-[80%] h-[300px] relative rounded-3xl shadow-md">
      <div className="flex flex-col gap-5 h-[93px] justify-center">
        <p className="font-medium text-[20px] ml-5 text-[#343A40]">Find your account</p>
        <div className="h-[1px] bg-[#dadcdd]"></div>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="ml-4 text-[16px] text-gray-400">Please enter your email address or mobile number to search for your account.</p>
        <input type="email" className="border w-[92%] h-[50px] p-4 rounded-xl" placeholder="yourname@example.com"/>
      </div>
      <div className="flex flex-row gap-3 absolute bottom-6 right-5">
        <Link href={"/login"} ><button className="px-6 py-3 bg-slate-600 text-white rounded-xl hover:bg-slate-500">Cancel</button></Link>
        <Link href={"/login/newpass"}><button className="px-6 py-3 bg-[#7B2CBF] text-white rounded-xl hover:opacity-[90%]">Search</button></Link>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default page;
