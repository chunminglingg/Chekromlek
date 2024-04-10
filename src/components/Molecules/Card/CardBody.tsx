import React, { ReactNode } from "react";
interface CardBodyProps {
  children?: ReactNode;
}

const CardBody: React.FC<CardBodyProps> = ({ children }) => {
  return (
    <div className="m-auto w-[90%] mt-3">
      <h2 className='"text-base text-[#78797e] font-sans"'>{children}</h2>
    </div>
  );
};

export { CardBody };
