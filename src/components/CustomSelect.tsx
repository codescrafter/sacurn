import React, { FC, MouseEvent, useRef, useState } from 'react';

import useOutsideClick from '../hooks/useOutsideClick';

interface IProps {
  options: string[];
  defaulValue: string;
  callback?: (option: string) => void;
}

const CustomSelect: FC<IProps> = ({ options, defaulValue, callback }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(defaulValue);

  const ref = useRef<any>();

  useOutsideClick(ref, () => {
    if (open) setOpen(false);
  });

  const toggleDropdown = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    event.stopPropagation();
    setOpen(!open);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setOpen(false);
    callback && callback(option);
  };

  return (
    <div className="relative inline-block z-40">
      <div className="rounded py-2 flex items-center cursor-pointer" onClick={toggleDropdown}>
        <div className="text-dark-grey text-base xl:text-lg font-black flex items-center gap-2">
          {selectedOption || 'Select an option'}{' '}
          <img width={10} height={12} src={'/images/operation-record/icon_chervon_down.png'} alt="arrow" />
        </div>
      </div>
      {open && (
        <div ref={ref} className="absolute right-0 top-10 py-2 min-w-[10rem] bg-white rounded-lg shadow-lg z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="cursor-pointer whitespace-nowrap px-4 py-2 hover:bg-grey/10 text-dark-grey text-base xl:text-lg font-black"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
