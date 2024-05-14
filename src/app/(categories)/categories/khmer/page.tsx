import React from 'react'
import { ButtonCategories } from '@/components/Molecules'
import { ListofNew } from '@/components/Organisms/RangeofList'
const Khmer = () => {
  return (
    <div className='flex flex-col justify-center mt-[5%]'>
       <ButtonCategories
        icon="/svg/Khmer.svg"
        title="Khmer"
        description="share your experiences here!"
      ></ButtonCategories>
    </div>
  )
}

export default Khmer
