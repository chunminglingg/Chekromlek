import React from 'react'
import Image from 'next/image';
import { Typography } from '@/components/Atoms';
interface ButtonCategoriesProps {
    title: string;
    description: string;
    icon: string;
}
const handleOnclick=()=>{
  alert("hello")
  }
const ButtonCategories:React.FC<ButtonCategoriesProps> = ({title,description,icon}) => {
  return (
<div className=" mt-2">
  <div className=' w-[250] lg:w-[400px] ml-14 m-auto lg:m-auto'>
      <button onClick={handleOnclick} className=" w-[123px] lg:w-[450px] lg:h-[100px] float-left m-2 hover:bg-slate-200 h-[120px] px-[3px] flex items-center justify-between rounded-[16px] border border-gray-600">
        <div className="lg:flex lg:items-center lg:space-x-[15px] lg:ml-2">
          <Image src={icon} alt="categories-icon" width={50} height={50} className='ml-8' />
          <div className="flex items-start justify-start flex-col">
            <Typography
              fontSize="bold"
              className=" mt-1 text-[#7B2CBF] text-xs lg:text-base w-full max-w-[270px] whitespace-nowrap line-clamp-1"
            >
              {title}
            </Typography>
            <Typography className="text-[10px] text-zinc-400">
              {description}
            </Typography>
          </div>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className='hidden lg:block'
        >
          <path d="M12 18L18 12L12 6" stroke="#222222" />
          <path d="M6 18L12 12L6 6" stroke="#222222" />
        </svg>
      </button>
      </div>
    </div>
  )
}

export default ButtonCategories
