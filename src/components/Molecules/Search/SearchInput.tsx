import Image from "next/image";
import React from "react";

const SearchInput = () => {
  return (
    <>
      <div className="flex flex-row items-center border border-gray-300 rounded-md p-2  max-sm:me-12 md:w-[290px]">
        <Image
          alt="cancel"
          src={"/icons/search.svg"}
          width={25}
          height={25}
          className="bg-none"
        />
        <input
          type="text"
          placeholder="Search"
          className="outline-none flex-grow bg-none w-auto max-sm:w-[150px]"
        />
      </div>
    </>
  );
};

export default SearchInput;
