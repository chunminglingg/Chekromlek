"use client"
import React, { useState } from 'react';

const Saved = () => {
  const [Save, setSave] = useState(false);

  const handleClick = () => {
    setSave(!Save);
  };

  return (
    <>
      <button className='flex flex-row gap-1 justify-center' onClick={handleClick}>
        <p className='font-normal text-[12px]'>{Save ? 'Unsaved' : 'Save'}</p>
        <img src={Save ? "/card-svg/save/AfterSave.svg" : "/card-svg/save/saved.svg"} alt={Save ? 'after-save' : 'save'} width={16} height={16} />
      </button>
    </>
  );
};

export default Saved;
