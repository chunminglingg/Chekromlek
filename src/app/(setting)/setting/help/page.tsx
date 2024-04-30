import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='w-[40%] max-sm:w-[70%] max-md:w-[60%] min-md:w-[60%] max-lg:w-[60%] flex-row items-center justify-center  mt-[8%] max-md:mt-[12%] max-sm:mt-[18%] max-lg:mt-[10%] ' >
    {/* User Setting */}
    <div className='flex items-end justify-start border-b-2 border-gray-300  gap-2 '>
     <Image src={'/icons/help.svg'} alt='setting_icon' width={24} height={24} />
     <p className=' items-center justify-center text-[18px] font-semibold'>Help Center</p>
   </div>
   <div>
    <p className='mt-[3%] ms-[5%]'>How Can I help You?</p>
   </div>

   {/* Answer */}
   <Link href={'#'}>
   <button className='mt-[3%] w-full h-[70px] max-sm:h-[60px] flex-row flex items-center justify-between  border rounded-md shadow-md p-2 hover:bg-gray-50'>
   <div className='flex items-center justify-start gap-1'>
    
     <div className=' flex flex-col items-start justify-start ms-2'>
     <p className=' items-start justify-start text-[16px] text-black'>Contact US</p>
     </div>
   </div>
   </button>
   </Link>

 
   
   
 </div>
  )
}
