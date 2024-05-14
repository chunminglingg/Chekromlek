// import { createContext, ReactNode, useContext, useState } from "react";

// type SearchContextType = {
//   searchQuery: string;
//   setSearchQuery: (query: string) => void;
// };

// const SearchContext = createContext<SearchContextType | undefined>(undefined);

// export const useSearch = () => {
//   const context = useContext(SearchContext);
//   if (!context) {
//     throw new Error("useSearch must be used within a SearchProvider");
//   }
//   return context;
// };

// type SearchProviderProps = {
//   children: ReactNode;
// };

// export const SearchProvider = ({ children }: SearchProviderProps) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   return (
//     <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
//       {children}
//     </SearchContext.Provider>
//   );
// };
//  export default SearchContext;


// PostCardContext.js
"use client";
import React, { createContext, useState, FC, PropsWithChildren } from 'react';
import { PostCardType } from "../@Types/PostCardType";

interface PostCardContextProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchCardContext = createContext<PostCardContextProps>({
  searchQuery: "",
  setSearchQuery: () => {},
});

const PostCardProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <SearchCardContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchCardContext.Provider>
  );
};
 export default PostCardProvider;

