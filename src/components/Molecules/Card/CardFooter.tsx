import React, { ReactNode } from "react";
import { Button } from "@/components/Atoms/Button";


interface CardFooterProps {
  children?: ReactNode;
}

const CardFooter: React.FC<CardFooterProps> = ({children}) => {
  return (
    <div className=" w-[90%] m-auto h-1/4 border-gray-250 border-t-2 mt-1 flex justify-between p-2">
      <>
        <div className="flex w-auto flex-row items-center gap-5 ">
          <div className="flex flex-row gap-2 items-center justify-center">
            <p className="text-[#6C757D] text-[10px] font-bold">{children}</p>
            <a href="#">
              
                <svg
                  width="16"
                  height="21"
                  viewBox="0 0 16 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.45817 7.16704C4.45817 6.04569 2.96673 5.74847 2.57105 6.79768C1.61391 9.33567 0.916504 11.6061 0.916504 12.8336C0.916504 16.7456 4.08782 19.9169 7.99984 19.9169C11.9119 19.9169 15.0832 16.7456 15.0832 12.8336C15.0832 11.5148 14.2782 8.99223 13.211 6.22735C11.8285 2.64574 11.1372 0.854939 10.284 0.758482C10.0109 0.727617 9.71307 0.783108 9.46947 0.910222C8.70817 1.30747 8.70817 3.26066 8.70817 7.16704C8.70817 8.34064 7.75678 9.29204 6.58317 9.29204C5.40957 9.29204 4.45817 8.34064 4.45817 7.16704Z"
                    stroke="url(#paint0_linear_1209_271)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1209_271"
                      x1="7.99984"
                      y1="0.750122"
                      x2="7.99984"
                      y2="19.9169"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#7B2CBF" />
                      <stop offset="1" stop-color="#D600E8" />
                    </linearGradient>
                  </defs>
                </svg>
             
            </a>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center ">
            <p className="text-[10px] text-[#6C757D] font-bold">Comment</p>
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3259 5.77772C20 6.78661 20 8.19108 20 11C20 13.8089 20 15.2134 19.3259 16.2223C19.034 16.659 18.659 17.034 18.2223 17.3259C17.3409 17.9148 16.1577 17.9892 14 17.9986V18L12.8944 20.2111C12.5259 20.9482 11.4741 20.9482 11.1056 20.2111L10 18V17.9986C7.8423 17.9892 6.65907 17.9148 5.77772 17.3259C5.34096 17.034 4.96596 16.659 4.67412 16.2223C4 15.2134 4 13.8089 4 11C4 8.19108 4 6.78661 4.67412 5.77772C4.96596 5.34096 5.34096 4.96596 5.77772 4.67412C6.78661 4 8.19108 4 11 4H13C15.8089 4 17.2134 4 18.2223 4.67412C18.659 4.96596 19.034 5.34096 19.3259 5.77772Z"
                  stroke="url(#paint0_linear_1428_1372)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 9L15 9"
                  stroke="#968FE5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 13H12"
                  stroke="#968FE5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1428_1372"
                    x1="12"
                    y1="4"
                    x2="12"
                    y2="20.7639"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7B2CBF" />
                    <stop offset="1" stop-color="#D600E8" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>

          <div className="flex flex-row gap-2 items-center justify-center ">
            <p className="text-[10px] text-[#6C757D] font-bold">Save</p>
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 9C4 6.17157 4 4.75736 4.87868 3.87868C5.75736 3 7.17157 3 10 3H14C16.8284 3 18.2426 3 19.1213 3.87868C20 4.75736 20 6.17157 20 9V15.8276C20 18.5109 20 19.8525 19.1557 20.2629C18.3114 20.6733 17.2565 19.8444 15.1465 18.1866L14.4713 17.656C13.2849 16.7239 12.6917 16.2578 12 16.2578C11.3083 16.2578 10.7151 16.7239 9.52871 17.656L8.85346 18.1866C6.74355 19.8444 5.68859 20.6733 4.84429 20.2629C4 19.8525 4 18.5109 4 15.8276V9Z"
                  stroke="url(#paint0_linear_1428_1368)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1428_1368"
                    x1="12"
                    y1="3"
                    x2="12"
                    y2="20.3668"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7B2CBF" />
                    <stop offset="1" stop-color="#D600E8" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
        </div>

        {/* button on right */}
        <div className="flex w-auto h-10">
          <Button className="bg-[#8185f3] hover:opacity-[80%] w-[85px] h-[35px] rounded-xl">
            <div className="flex flex-row items-center text-sm justify-center gap-1">
              <p className=" text-white text-[11px] font-medium">Answer</p>
             
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.49935 3.6665V3.6665C7.32201 3.6665 6.23335 3.6665 5.39686 4.07901C4.60713 4.46846 3.96798 5.10762 3.57852 5.89735C3.16602 6.73384 3.16602 7.8225 3.16602 9.99984V14.3332C3.16602 15.276 3.16602 15.7474 3.45891 16.0403C3.7518 16.3332 4.22321 16.3332 5.16602 16.3332H9.49935C11.6767 16.3332 12.7654 16.3332 13.6018 15.9207C14.3916 15.5312 15.0307 14.8921 15.4202 14.1023C15.8327 13.2658 15.8327 12.1772 15.8327 9.99984V9.99984"
                    stroke="white"
                    stroke-width="1.2"
                  />
                  <path
                    d="M7.125 8.4165L11.875 8.4165"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.125 11.5835H9.5"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.041 6.8335L15.041 2.0835M12.666 4.4585H17.416"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
           
            </div>
          </Button>
        </div>
      </>
    </div>
  );
};

export { CardFooter };
