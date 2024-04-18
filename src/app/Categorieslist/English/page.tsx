import React from 'react'
import { ButtonCategories } from '@/components/Molecules'
import { ListofNew } from '@/components/Organisms/RangeofList'
const English = () => {
  return (
    <div>
    <div className='flex flex-col justify-center mt-[14%]'>
       <ButtonCategories
        icon="/svg/English.svg"
        title=  "English"
        description="share your experiences here!"
      ></ButtonCategories>
      <ListofNew></ListofNew>
    </div>
    </div>
  )
}

export default English
