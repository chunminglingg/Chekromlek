import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({children,className}) => {
  return (
    <div>
      <button className={className}>{children}</button>
    </div>
  );
};

export { Button };