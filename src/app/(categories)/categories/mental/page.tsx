import React from 'react'
import { ButtonCategories } from '@/components/Molecules'
import { ListofNew } from '@/components/Organisms/RangeofList'
const Mental = () => {
  return (
    <div className='flex flex-col justify-center mt-[5%]'>
       <ButtonCategories
        icon="/svg/Mental.svg"
        title="Mental"
        description="share your experiences here!"
      ></ButtonCategories>
      <ListofNew></ListofNew>
    </div>
  )
}

export default Mental
