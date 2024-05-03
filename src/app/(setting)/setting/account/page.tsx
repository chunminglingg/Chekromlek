import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <div className='w-[40%] max-sm:w-[70%] max-md:w-[60%] min-md:w-[60%] max-lg:w-[60%] flex-row items-center justify-center  mt-[8%] max-md:mt-[12%] max-sm:mt-[18%] max-lg:mt-[10%] ' >
       {/* User Setting */}
       <div className='flex items-end justify-start border-b-2 border-gray-300  gap-2 p-2'>
        <Image src={'/icons/account.svg'} alt='setting_icon' width={30} height={30} />
        <p className=' items-center justify-center text-[18px] font-semibold'>Account</p>
      </div>
      {/* Change Name */}
      <Link href={'#'}>
      <button className='mt-[6%] w-full h-[70px] max-sm:h-[60px] flex-row flex items-center justify-between  border rounded-md shadow-md p-5 hover:bg-slate-50'>
       <div className='flex items-center justify-start gap-1'>
       <p className=' items-center justify-center text-[16px] text-gray-400'>Change Name</p>
      </div>
      <Image src={'/icons/go_on.svg'} alt='goon' width={17} height={17} />
      </button>
      </Link>

      {/* Change Password */}
      <Link href={'#'}>
      <button className='mt-[3%] w-full h-[70px] max-sm:h-[60px] flex-row flex items-center justify-between  border rounded-md shadow-md p-5 hover:bg-slate-50'>
       <div className='flex items-center justify-start gap-1'>
       <p className=' items-center justify-center text-[16px] text-gray-400'>Change Password</p>
      </div>
      <Image src={'/icons/go_on.svg'} alt='goon' width={17} height={17} />
      </button>
      </Link>

       {/* Change Email */}
       <Link href={'#'}>
      <button className='mt-[3%] w-full h-[70px] max-sm:h-[60px] flex-row flex items-center justify-between  border rounded-md shadow-md p-5 hover:bg-slate-50'>
       <div className='flex items-center justify-start gap-1'>
       <p className=' items-center justify-center text-[16px] text-gray-400'>Change Email</p>
      </div>
      <Image src={'/icons/go_on.svg'} alt='goon' width={17} height={17} />
      </button>
      </Link>
      
      
    </div>
  )
}
