'use client'
import Image from "next/image";
import React, { useState } from "react";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // Here you can perform real-time search operations
    console.log('Search term:', event.target.value);
  };

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
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default SearchInput;
