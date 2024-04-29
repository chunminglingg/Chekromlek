import Image from 'next/image'
import React from 'react'


const HeaderPost = ({profile = "/card-svg/avatar.svg"} : {profile?: string}) => {
 
  return (
    <>
        <div className='flex flex-row gap-4 w-[663px] max-sm:w-[350px] h-[60px] items-center justify-between p-6 border border-slate-3000  rounded-xl mb-4'>
            <div className=''>
               <Image alt='profile' src={profile} width={50} height={40} className='rounded-full object-cover p-0 m-0' />
            </div>
            <div className='flex justify-start w-full'>
                <p className='text-gray-500'>Create a post...</p>
            </div>
            <div>
                <Image alt='createPost' src='/svg/create.svg' width={42} height={42} className='rounded-full object-cover p-0 m-0 opacity-60' />
            </div>
        </div>
    </>
  )
}

export default HeaderPost