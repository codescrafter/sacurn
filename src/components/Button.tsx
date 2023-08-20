import classNames from 'classnames';
import React from 'react';

interface IProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
}

const Button = ({ className, onClick, children }: IProps) => {
  return (
    <button className={classNames('bg-navy-blue text-white p-2', className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
