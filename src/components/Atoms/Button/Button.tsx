import React, { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset"; 
  children: ReactNode;
  className?: string;
  background?: " bg-slate-100"|"bg-violet-500" | "bg-slate-300";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void; // Make onClick optional
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick, background = " bg-white-100" }) => {
  const Buttonbg = (background: string) => {
    switch (background) {
      case "bg-violet-500":
        return "bg-violet-500";
      case "bg-slate-300":
        return "bg-slate-300";
      default:
        return " bg-white-100"; // Return empty string if background is not defined
    }
  };

  const buttonbackground = Buttonbg(background);

  return (
    <div>
      <button className={`${className} ${buttonbackground} border p-2 rounded-md`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export { Button };
