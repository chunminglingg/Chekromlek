"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Like = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <>
      <button className='flex flex-row gap-1 justify-center' onClick={handleClick}>
        <p className='font-normal text-[12px]'>{liked ? '13' : '12'}</p>
        <Image src={liked ? "/card-svg/like/Afterlike.svg" : "/card-svg/like/like.svg"} alt={liked ? 'after-like' : 'like'} width={12} height={16} />
      </button>
    </>
  );
};

export default Like;
