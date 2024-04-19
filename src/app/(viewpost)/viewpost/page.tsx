import Modal from '@/components/Molecules/Post/Modal/Modal'
import {ViewPost} from '@/components/Molecules/Post/ViewPost/ViewPost'
import React from 'react'

export default function Viewpost() {
  return (
    <div className='mt-[5%] '>
    <div className=''>
        <ViewPost  profile='/card-svg/avatar.svg' hour={2} username='Kimlang Tieng' caption='Why is it that although China is already the second largest  in the world....See more'  />
    </div>
    </div>
  )
}
