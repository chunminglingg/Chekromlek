'use client'
import Image from "next/image";
import React, { useState } from "react";

type SearchInputProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput: React.FC<SearchInputProps>= ({setSearch}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
     setSearch(e.target.value);
  };
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
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default SearchInput;