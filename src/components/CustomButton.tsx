import classNames from 'classnames';
import React, { useState } from 'react';

interface IProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'rounded'
    | 'outline'
    | 'rounded-outline'
    | 'rounded-full'
    | 'light'
    | 'rounded-sm'
    | 'outline-sm';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CustomButton = ({ variant = 'primary', children, className, onClick }: IProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <button
      className={classNames('text-base', className, {
        'bg-navy-blue text-white': variant === 'primary',
        'bg-transparent text-navy-blue': variant === 'secondary',
        'rounded-xl text-white': variant === 'rounded',
        'rounded-full text-white': variant === 'rounded-full',
        'bg-transparent border border-navy-blue text-navy-blue': variant === 'outline',
        'bg-transparent border border-navy-blue rounded-xl text-white': variant === 'rounded-outline',
        'btn-transition': isClicked
      })}
      onClick={() => {
        setIsClicked(true);
        onClick && onClick();
      }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
