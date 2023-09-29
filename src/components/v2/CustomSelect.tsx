import classNames from 'classnames';
import { useState } from 'react';

const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandler = () => {
    setIsOpen((state) => !state);
  };
  return (
    <div className={classNames({ 'bg-white shadow-input-field rounded-2.5xl': isOpen, '': !isOpen })}>
      <div
        className={classNames('h-11.5 px-6 py-2.5 outline-none w-[296px] flex items-center cursor-pointer gap-2.5', {
          ' shadow-input-field rounded-full': !isOpen
        })}
        onClick={isOpenHandler}
      >
        <p>身份選擇</p>
        <img src="/v2/user-info-form/down-arrow.svg" />
      </div>
      {isOpen && (
        <div className="rounded-b-2.5xl bg-white py-1 flex flex-col gap-4 pb-3 px-10">
          {options.map((option) => (
            <label>{option}</label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;

const options = ['管理員', '操作人員', '操作人員(無後台操作權)'];
