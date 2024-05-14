import React from 'react'
import { ButtonCategories } from '@/components/Molecules'
import { ListofNew } from '@/components/Organisms/RangeofList'
const History = () => {
  return (
    <div>
    <div className='flex flex-col justify-center mt-[14%]'>
       <ButtonCategories
        icon="/svg/History.svg"
        title= "History"
        description="Get to know history together here!"
      ></ButtonCategories>
    </div>
    </div>
  )
}

export default History
