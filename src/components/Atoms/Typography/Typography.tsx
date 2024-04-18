import React, { ReactNode } from "react";
interface TypoProps{
  children?:ReactNode;
  className?:string;
  align?:"left"|"center"|"right";
  fontSize?:"bold"|"Medium"|"normal";
}
const Typography: React.FC<TypoProps> = ({children,className,align="left",fontSize="normal"}) => {
  const TypographyAlign=(align:string)=>{
    switch(align){
      case"left":
        return"text-left";
      case"center":
        return"text-center";
      case"right":
        return"text-right";
    }
  };
  const TypographyFont=(fontSize:string)=>{
    switch(fontSize){
      case"bold":
        return "font-bold";
      case"Medium":
        return "font-Medium";
      default:
        return "normal";
    }
  }
  const typographyAlignStyles=TypographyAlign(align);
  const TypographyFontStyles=TypographyFont(fontSize);
  return (
   <p className={`${typographyAlignStyles} ${className} ${TypographyFontStyles}`}>{children}</p>
  );
};
export {Typography}




