"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "../../globals.css";
import signupVali from "@/schema/Auth@login";

interface dataTypes {
  username: string;
  email: string;
  password: string;
}
const Pages = () => {
  const [data, setData] = useState<dataTypes>({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log("Submitting data:", data);
    try {
      await signupVali.validate(data, { abortEarly: false });
      // Validation successful, proceed with form submission logic (e.g., send data to server)
      // Redirect to /afterlogin route
      window.location.href = "/afterlogin"; // This is a simple way to redirect
      console.log("Form data is valid!");
    } catch (error: any | unknown) {
      const fieldErrors: { [key: string]: string } = {};
      // Error From Yup
      error.inner.forEach((err: any) => {
        fieldErrors[err.path] = err.message;
      });
      console.log("Field Error", fieldErrors);
      setErrors((prev) => ({
        ...prev,
        ...fieldErrors,
      }));
      return;
    }
  }

  return (
    <>
      <div className="flex justify-between h-screen w-screen">
        {/* left */}
        <div className="w-[65%] text-white relative flex justify-center items-center shadow-md max-lg:hidden">
          <div>
            <Image
              alt="panel"
              src={"login/pandel1.svg"}
              width={680}
              height={360}
            />
          </div>
        </div>
        {/* right */}
        <div className="flex w-[35%] justify-center items-center h-screen relative max-lg:w-full">
          <div aria-label="form" className=" flex flex-col items-center ">
            <Link href={"/"}>
              <button>
                {" "}
                <Image
                  alt="panel"
                  src={"login/logo.svg"}
                  width={120}
                  height={60}
                />
              </button>
            </Link>
            <div>
              <form
                action="login"
                className="mt-5 flex flex-col gap-3 items-center"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="w-[400px]  max-sm:w-[290px] h-[60px] border border-[#cccccd] rounded-lg  pl-4"
                    placeholder="Username"
                    name="username"
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <p className="text-[#EB5757] ">{errors.username}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <input
                    type="email"
                    className="w-[400px]  max-sm:w-[290px] h-[60px] border border-[#cccccd] rounded-lg  pl-4"
                    placeholder="yourname@example.com"
                    name="email"
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-[#EB5757] ">{errors.email}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <input
                    type="password"
                    className="w-[400px] h-[60px] max-sm:w-[290px] border border-[#cccccd] rounded-lg  pl-4"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="text-[#EB5757] ">{errors.password}</p>
                  )}
                </div>

                <div className="flex flex-col items-center mt-4">
                  <button
                    type="submit"
                    className="w-[400px] h-[60px] bg-[#7B2CBF]  max-sm:w-[290px] hover:text-[#d1b6f6] text-white rounded-lg hover:opacity-[80%]"
                  >
                    Register
                  </button>
                </div>

                <p className="text-center text-gray-400">
                  _____________________
                  <span className="text-[#7b2cbf]">or</span>
                  _______________________{" "}
                </p>
                <p className="text-center text-[#434A4F] ">
                  {" Already have account"}{" "}
                  <Link
                    href={"/login"}
                    className="text-[#9747FF] hover:text-[#d1b6f6]"
                  >
                    Log In
                  </Link>
                </p>
                <div className="flex flex-col items-center justify-center mt-2 gap-2  ">
                  <button className="flex flex-row items-center gap-2 w-[370px] h-[64px] border justify-center rounded-lg hover:opacity-[80%]  max-sm:w-[290px]">
                    <Image
                      src={"socialMedia/facebook.svg"}
                      alt="facebook"
                      width={32}
                      height={32}
                    />
                    <div className="text-[#434A4F]">
                      Continues with Facebook
                    </div>
                  </button>
                  <button className="flex flex-row items-center gap-2 w-[370px] h-[64px] border justify-center rounded-lg hover:opacity-[80%] max-sm:w-[290px] ">
                    <Image
                      src={"socialMedia/google.svg"}
                      alt="google"
                      width={32}
                      height={32}
                    />
                    <div className="text-[#434A4F] ">Continues with Google</div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
