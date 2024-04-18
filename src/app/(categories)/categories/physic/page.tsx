import React from 'react'
import { ButtonCategories } from '@/components/Molecules'
import { ListofNew } from '@/components/Organisms/RangeofList'
function Physic() {
  return (
    <div className="flex flex-col justify-center mt-[5%]">
    <ButtonCategories
     icon="/svg/Physic.svg"
     title="Physical"
     description="share your experiences here!"
   ></ButtonCategories>
   <ListofNew></ListofNew>
    </div>
  )
}

export default Physic
