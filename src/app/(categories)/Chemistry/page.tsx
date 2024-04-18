import React from 'react'
import { ButtonCategories } from '@/components/Molecules'
import { ListofNew } from '@/components/Organisms/RangeofList'
const Chemistry = () => {
  return (
    <div>
    <div className='flex flex-col justify-center mt-[14%]'>
       <ButtonCategories
        icon="/svg/Chemistry.svg"
        title="Chemistry"
        description="Communicate with chemistry lovers here!"
      ></ButtonCategories>
      <ListofNew></ListofNew>
    </div>
    </div>
  )
}

export default Chemistry
