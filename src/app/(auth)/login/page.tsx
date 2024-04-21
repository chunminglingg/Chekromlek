import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../../globals.css";

const pages = () => {
  return (
    <>
    <div className="flex justify-between h-screen w-screen">
      {/* left */}
      <div className="w-[65%] text-white relative flex justify-center items-center shadow-md">
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
      <div className="flex w-[35%] justify-center h-screen relative  ">
        <div
          aria-label="form"
          className="mt-[10%] flex flex-col items-center"
        >
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
            <form action="login" className="mt-5 flex flex-col gap-3">
              <input
                type="email"
                className="w-[400px] h-[60px] border border-[#cccccd] rounded-lg  pl-4"
                placeholder="yourname@example.com"
              />
              <input
                type="password"
                className="w-[400px] h-[60px] border border-[#cccccd] rounded-lg  pl-4"
                placeholder="Password"
              />
              <p className="text-end text-[#434A4F]">
                Forgot{" "}
                <Link
                  href={"/login/forgot"}
                  className="text-[#9747FF] hover:text-[#d1b6f6]"
                >
                  password
                </Link>{" "}
                ?
              </p>
              <div className="flex flex-col items-center mt-4">
                <Link href={"/"}>
                  <button
                    type="submit"
                    className="w-[200px] h-[60px] bg-[#7B2CBF] hover:text-[#d1b6f6] text-white rounded-lg hover:opacity-[80%]"
                  >
                    Login
                  </button>
                </Link>
              </div>
              <p className="text-center text-gray-400">
                _____________________
                <span className="text-[#7b2cbf]">or</span>
                _______________________{" "}
              </p>
              <p className="text-center text-[#434A4F] ">
                Don't have account ?{" "}
                <Link
                  href={"/signup"}
                  className="text-[#9747FF] hover:text-[#d1b6f6]"
                >
                  Sign up
                </Link>
              </p>
              <div className="flex flex-col items-center justify-center mt-2 gap-2">
                <button className="flex flex-row items-center gap-2 w-[370px] h-[64px] border justify-center rounded-3xl hover:opacity-[80%]">
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
                <button className="flex flex-row items-center gap-2 w-[370px] h-[64px] border justify-center rounded-3xl hover:opacity-[80%]">
                  <Image
                    src={"socialMedia/google.svg"}
                    alt="google"
                    width={32}
                    height={32}
                  />
                  <div className="text-[#434A4F]">
                    Continues with Facebook
                  </div>
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

export default pages;
