import React from "react";

export default function Post() {
  return (
    <div>
      {/* <click to Post> */}
      {/* svg profile */}
      <div className=" md:w-[413px] flex items-center justify-between border rounded-lg border-slate-100 transition-transform -translate-x-full sm:translate-x-1/2 max-sm:mt-[10%] md:h-[70px]  sm:mt-[10%] sm:h-[50px] hover:bg-slate-100">
       <div className="flex items-center justify-between gap-2 ms-[2%]">
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.5 21C3.5 11.335 11.335 3.5 21 3.5C30.665 3.5 38.5 11.335 38.5 21C38.5 26.5613 35.9059 31.5166 31.8618 34.7221C31.1262 32.6073 29.7868 30.7469 28.0008 29.3764C25.9924 27.8353 23.5315 27 21 27C18.4685 27 16.0077 27.8353 13.9992 29.3764C12.2133 30.7469 10.8738 32.6073 10.1382 34.7221C6.09409 31.5166 3.5 26.5613 3.5 21ZM26.7832 30.9631C28.4102 32.2115 29.5886 33.9521 30.1441 35.9239C27.483 37.5578 24.3515 38.5 21 38.5C17.6485 38.5 14.517 37.5578 11.8559 35.9239C12.4114 33.9521 13.5898 32.2115 15.2168 30.9631C16.8759 29.6901 18.9087 29 21 29C23.0913 29 25.1241 29.6901 26.7832 30.9631ZM16.75 15.75C16.75 13.4028 18.6528 11.5 21 11.5C23.3472 11.5 25.25 13.4028 25.25 15.75C25.25 18.0972 23.3472 20 21 20C18.6528 20 16.75 18.0972 16.75 15.75ZM21 9.5C17.5482 9.5 14.75 12.2982 14.75 15.75C14.75 19.2018 17.5482 22 21 22C24.4518 22 27.25 19.2018 27.25 15.75C27.25 12.2982 24.4518 9.5 21 9.5Z"
            fill="#968FE5"
          />
          <rect x="4" y="4" width="34" height="34" rx="17" stroke="#968FE5" />
        </svg>
      <p className="text-zinc-300 flex items-start justify-start ">Create Post...</p>
      </div>
      <div className="me-[3%]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.0186 7.49526C2 8.22343 2 9.0521 2 9.99985V11.9999H10.0971C9.76426 11.8432 9.40022 11.7399 9.01534 11.7014L7 11.4999H6.99999C5.68663 11.3685 5.02995 11.3028 4.49718 11.0869C3.36574 10.6282 2.50574 9.67787 2.1619 8.50641C2.0787 8.22293 2.03826 7.91083 2.0186 7.49526ZM21.8742 5.77441L21.5 16.9999C20.5396 16.9999 19.6185 16.6183 18.9393 15.9392L17.8123 14.8122C17.4423 14.4421 17.2572 14.2571 17.0697 14.1384C16.4165 13.7249 15.5835 13.7249 14.9303 14.1384C14.7428 14.2571 14.5577 14.4421 14.1877 14.8122L13.4145 15.5853C12.8925 16.1073 12 15.7376 12 14.9994V21.9999H14C17.7712 21.9999 19.6569 21.9999 20.8284 20.8283C22 19.6567 22 17.7711 22 13.9999V9.99985C22 8.20729 22 6.84075 21.8742 5.77441Z"
            fill="#222222"
          />
          <path
            d="M3 10C3 8.08611 3.00212 6.75129 3.13753 5.74416C3.26907 4.76579 3.50966 4.2477 3.87868 3.87868C4.2477 3.50966 4.76579 3.26907 5.74416 3.13753C6.75129 3.00212 8.08611 3 10 3H14C15.9139 3 17.2487 3.00212 18.2558 3.13753C19.2342 3.26907 19.7523 3.50966 20.1213 3.87868L20.8112 3.18882L20.1213 3.87868C20.4903 4.2477 20.7309 4.76579 20.8625 5.74416C20.9979 6.75129 21 8.08611 21 10V14C21 15.9139 20.9979 17.2487 20.8625 18.2558C20.7309 19.2342 20.4903 19.7523 20.1213 20.1213C19.7523 20.4903 19.2342 20.7309 18.2558 20.8625C17.2487 20.9979 15.9139 21 14 21H13V14C13 13.9818 13 13.9637 13 13.9456C13.0001 13.5215 13.0002 13.1094 12.9545 12.7695C12.903 12.3863 12.7774 11.949 12.4142 11.5858C12.051 11.2226 11.6137 11.097 11.2305 11.0455C10.8906 10.9998 10.4785 10.9999 10.0544 11C10.0363 11 10.0182 11 10 11H3V10Z"
            stroke="#222222"
            stroke-width="2"
          />
          <circle cx="16" cy="8" r="2" fill="#222222" />
          <path
            d="M8 16V15H9V16H8ZM3.62469 20.7809C3.19343 21.1259 2.56414 21.056 2.21913 20.6247C1.87412 20.1934 1.94404 19.5641 2.37531 19.2191L3.62469 20.7809ZM7 21V16H9V21H7ZM8 17H3V15H8V17ZM8.6247 16.7809L3.62469 20.7809L2.37531 19.2191L7.3753 15.2191L8.6247 16.7809Z"
            fill="#222222"
          />
        </svg>
        </div>
      </div>
    </div>
  );
}
