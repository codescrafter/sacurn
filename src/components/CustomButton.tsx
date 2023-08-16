import classNames from 'classnames';
import React, { useState } from 'react';

interface IProps {
  variant:
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

const CustomButton = ({ variant, children, className, onClick }: IProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <button
      className={classNames('text-base text-white', className, {
        'bg-navy-blue': variant === 'primary',
        'bg-transparent': variant === 'secondary',
        'rounded-xl': variant === 'rounded',
        'rounded-full': variant === 'rounded-full',
        'bg-transparent border border-navy-blue': variant === 'outline',
        'bg-transparent border border-navy-blue rounded-xl': variant === 'rounded-outline',
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
