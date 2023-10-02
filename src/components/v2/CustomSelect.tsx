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
          'bg-white 2.3xl:h-11.5 2.3xl:w-[296px] 2xl:h-10 2xl:w-[260px] xl:h-8.5 xl:w-[215px] h-7 w-[165px] 2xl:px-6 xl:px-4.5 px-3 py-2.5 outline-none  flex items-center cursor-pointer gap-2.5',
          {
            ' shadow-input-field rounded-full': !isOpen,
            'rounded-t-2.5xl': isOpen
          }
        )}
        onClick={() => isOpenHandler(true)}
      >
        <p className="2.3xl:text-lg 2xl:text-base xl:text-sm 1.5lg:text-xs text-xms">身份選擇</p>
        <img src="/v2/user-info-form/down-arrow.svg" className="" />
      </div>
      {isOpen && (
        <div className="rounded-b-2.5xl bg-white py-1 flex flex-col min-[1400px]:gap-4 gap-2 min-[1400px]:pb-3 pb-2 2.3xl:px-10 2xl:px-8.7 min-[1350px]:px-7 1.5lg:px-5.5 px-4.5  ">
          {options.map((option, index) => (
            <label
              className={classNames(
                'bg-white hover:text-light-blue cursor-pointer 2.3xl:text-lg 2xl:text-base xl:text-sm 1.5lg:text-xs text-xms',
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
