import classNames from 'classnames';
import { useRef, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';

import useOutsideClick from '@/hooks/useOutsideClick';

import { UserInfoFormValues } from './UserInfoForm';

interface CustomSelectIProps {
  setValue: UseFormSetValue<UserInfoFormValues>;
}

const CustomSelect = ({ setValue }: CustomSelectIProps) => {
  const dropDownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState('');
  const isOpenHandler = (val: boolean) => {
    setIsOpen((state) => {
      if (state == true && val == true) return false;
      return val;
    });
  };

  const isSelectedHandler = (val: string) => {
    setValue('operation_permission', val);
    setIsSelected(val);
  };

  useOutsideClick(dropDownRef, () => {
    if (isOpen) isOpenHandler(false);
  });

  return (
    <div
      className={classNames({
        'bg-white shadow-input-field rounded-2.5xl h-max': isOpen,
        '': !isOpen
      })}
    >
      <div
        className={classNames(
          'bg-white h-11.5 px-6 py-2.5 outline-none w-[296px] flex items-center cursor-pointer gap-2.5',
          {
            ' shadow-input-field rounded-full': !isOpen,
            'rounded-t-2.5xl': isOpen
          }
        )}
        onClick={() => isOpenHandler(true)}
        ref={dropDownRef}
      >
        <p>身份選擇</p>
        <img src="/v2/user-info-form/down-arrow.svg" />
      </div>
      {isOpen && (
        <div className="rounded-b-2.5xl bg-white py-1 flex flex-col gap-4 pb-3 px-10 ">
          {options.map((option, index) => (
            <label
              className={classNames('bg-white hover:text-light-blue cursor-pointer', {
                'font-extrabold underline text-navy-blue leading-normal': isSelected === option
              })}
              key={index}
              onClick={() => isSelectedHandler(option)}
            >
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;

const options = ['管理員', '操作人員', '操作人員(無後台操作權)'];
