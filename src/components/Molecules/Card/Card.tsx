import React, { ReactNode } from 'react'
interface ButtonProps{
  children : ReactNode
}

const Card: React.FC<ButtonProps> = ({children}) => {
  return (
    
   
    <div className=" w-[387px] h-auto relative items-center justify-center mb-0 transition-transform sm:translate-x-1/2 max-sm:m-auto  shadow-lg" >
     <div>
      {children}
     </div>
    </div>
  )
}

export {Card};