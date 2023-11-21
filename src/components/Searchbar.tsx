import classNames from 'classnames';
import React from 'react';

interface Props {
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Searchbar = ({ value, setValue, className }: Props) => {
  return (
    <div
      className={classNames(
        'bg-white-smoke-2 w-[254px] h-[34px] rounded-[10px] flex justify-between items-center',
        className
      )}
    >
      <input
        type="text"
        value={value}
        onChange={setValue}
        placeholder="輸入會員代號"
        className="bg-transparent pl-4 h-full outline-none text-white text-[17px] tracking-[1.19px] placeholder-white"
      />
      <div className="flex gap-[14px]">
        <div className="bg-white w-[1.5px] rounded-md" />
        <span className="mr-[9px] cursor-pointer">
          <img src="/images/products/search-icon.svg" alt="search" className="w-5 h-5 object-contain" />
        </span>
      </div>
    </div>
  );
};

export default Searchbar;
