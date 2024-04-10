import React from "react";
import Image from "next/image";
interface ImageProps {
  img: string;
}

const CardImage: React.FC<ImageProps> = ({ img }) => {
  return (
    <div className="flex items-center justify-center pt-5 pb-1 ">
      <Image
        src={img}
        width={320}
        height={320}
        className="rounded-md"
        alt="User's Photo"
      />
    </div>
  );
};

export { CardImage };
