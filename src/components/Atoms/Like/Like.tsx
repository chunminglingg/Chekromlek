"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Like = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (

    <>
      <button className='flex flex-row gap-1 justify-center' onClick={handleClick}>
        <p className='font-normal text-[12px]'>{liked ? '13' : '12'}</p>
        <Image src={liked ? "/card-svg/like/Afterlike.svg" : "/card-svg/like/like.svg"} alt={liked ? 'after-like' : 'like'} width={12} height={16} />
      </button>
    </>
=======
    <button
      className={`flex flex-row gap-1 justify-center items-center ${
        isLiked ? 'text-[#E53E4F]' : 'text-[#343A40]'
      }`}
      onClick={handleClick}
    >
      <p className={`text-[16px] max-sm:text-xs font-normal`}>{isLiked ? '13' : '12'}</p>
      <img
        src={isLiked ? "/card-svg/like/Afterlike.svg" : "/card-svg/like/like.svg"}
        alt={isLiked ? 'after-like' : 'like'}
        width={16}
        height={16}
      />
    </button>
>>>>>>> 5c7792705014daa063d65ee1f89c49cb05e88785
  );
};

export default Like;
