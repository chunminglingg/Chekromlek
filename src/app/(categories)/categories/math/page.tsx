import React from 'react'
import { ButtonCategories } from '@/components/Molecules'
import { ListofNew } from '@/components/Organisms/RangeofList'
const Math = () => {
  return (
    <div className='flex flex-col justify-center mt-[5%]'>
       <ButtonCategories
        icon="/svg/Math.svg"
        title="Mathemathic"
        description="share your experiences here!"
      ></ButtonCategories>
      <ListofNew></ListofNew>
    </div>
  )
}

export default Math
