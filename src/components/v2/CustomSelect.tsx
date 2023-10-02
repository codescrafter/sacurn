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
      ref={dropDownRef}
    >
      <div
        className={classNames(
          'bg-white min-[1600px]:h-11.5 min-[1600px]:w-[296px] min-[1500px]:h-10 min-[1500px]:w-[260px] min-[1300px]:h-8.5 min-[1300px]:w-[215px] h-7 w-[165px] min-[1500px]:px-6 min-[1300px]:px-4.5 px-3 py-2.5 outline-none  flex items-center cursor-pointer gap-2.5',
          {
            ' shadow-input-field rounded-full': !isOpen,
            'rounded-t-2.5xl': isOpen
          }
        )}
        onClick={() => isOpenHandler(true)}
      >
        <p className="min-[1600px]:text-lg min-[1500px]:text-base min-[1300px]:text-sm min-[1200px]:text-xs text-xms">
          身份選擇
        </p>
        <img src="/v2/user-info-form/down-arrow.svg" className="" />
      </div>
      {isOpen && (
        <div className="rounded-b-2.5xl bg-white py-1 flex flex-col min-[1400px]:gap-4 gap-2 min-[1400px]:pb-3 pb-2 min-[1600px]:px-10 min-[1500px]:px-8.7 min-[1350px]:px-7 px-4.5  ">
          {options.map((option, index) => (
            <label
              className={classNames(
                'bg-white hover:text-light-blue cursor-pointer min-[1600px]:text-lg min-[1500px]:text-base min-[1300px]:text-sm min-[1200px]:text-xs text-xms',
                {
                  'font-extrabold underline text-navy-blue leading-normal': isSelected === option
                }
              )}
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
