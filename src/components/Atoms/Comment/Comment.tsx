import Image from 'next/image'
import React from 'react'

const Comment = () => {
  return (
    <>
        <button className='flex flex-row justify-center items-center gap-1  h-[30px] rounded-lg hover:bg-slate-100 hover:opacity-[60%]'>
            <p className='font-normal text-[12px] '>Comment</p>
            <Image src={"/card-svg/comment.svg"} alt='Comment' width={24} height={24} />
        </button>
    </>
  )
}

export default Comment