"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Saved = () => {
  const [Save, setSave] = useState(false);

  const handleClick = () => {
    setSave(!Save);
  };
  return (
    <button
      className={`flex flex-row gap-2 justify-center items-center ${
        Save ? 'text-[#3A7CA5]' : 'text-[#343A40]'
      }`}
      onClick={handleClick}
    >
      <p className={`text-[16px] max-sm:text-sm font-normal`}>{Save ? 'Unsaved' : 'Save'}</p>
      <Image
        src={Save ? "/card-svg/save/AfterSave.svg" : "/card-svg/save/saved.svg"}
        alt={Save ? 'after-save' : 'save'}
        width={18}
        height={18}
      />
    </button>
  );
};

export default Saved;
