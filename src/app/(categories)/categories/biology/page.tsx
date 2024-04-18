import React from 'react'
import { ButtonCategories } from '@/components/Molecules'
import { ListofNew } from '@/components/Organisms/RangeofList'
const Biology = () => {
  return (
    <div className='flex flex-col justify-center mt-[5%]'>
       <ButtonCategories
        icon="/svg/Biology.svg"
        title="Biology"
        description="share your experiences here!"
      ></ButtonCategories>
      <ListofNew></ListofNew>
    </div>
  )
}

export default Biology
