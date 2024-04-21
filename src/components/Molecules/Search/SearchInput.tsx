import Image from "next/image";
import React from "react";

const SearchInput = () => {
  return (
    <>
      <div className="flex flex-row items-center border border-gray-300 rounded-md p-2">
        <Image
          alt=""
          src={"/icons/search.svg"}
          width={24}
          height={24}
          className="hidden md:inline-block"
        />
        <input
          type="text"
          placeholder="Search"
          className="outline-none ml-2 flex-grow"
        />
      </div>
    </>
  );
};

export default SearchInput;
