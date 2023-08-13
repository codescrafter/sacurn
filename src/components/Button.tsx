import React, { FC } from "react";

interface IProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
}

const Button: FC<IProps> = ({ className, onClick, children }) => {
  return (
    <button className={`bg-navy-blue text-white p-2 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
