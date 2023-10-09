import classNames from 'classnames';
import React from 'react';

import CustomButton from '@/components/CustomButton';
interface IProps {
  title: string;
  userName: string;
  userEmail: string;
  id: number;
  img: string;
  isActive: boolean;
}

const EnterpriseCard = ({ title, userName, userEmail, img, isActive }: IProps) => {
  const randomColor = () => {
    const randomValue = Math.random();
    if (randomValue < 0.5) return false;
    else return true;
  };

  return (
    <div className="relative bg-white rounded-lg w-[100%] h-[316px] flex justify-center items-center group hover:border-4 hover:border-dark-grey transition-all">
      <div className="w-full h-full absolute group-hover:bg-[#abababd1] rounded-sm" />
      <CustomButton
        variant="rounded-full"
        className="absolute z-20 py-2.5 px-5 !bg-white !text-navy-blue font-sm font-bold hidden group-hover:block"
      >
        重新激活帳號
      </CustomButton>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-deep-sea-blue font-bold text-xl md:text-base xl:text-xl 2xl:text-2xl ">{title}</h1>
        <div
          className={classNames(
            'relative border-4 rounded-full bg-moon-soon mt-2 flex justify-center items-end h-24 w-24',
            {
              'border-mustard-yellow': !randomColor(),
              'border-muted-green': randomColor(),
              'border-deep-sea-blue': true
            }
          )}
        >
          <img src={img} alt="no Image" className="h-15 xl:h-18" />
          <div
            className={classNames(
              'h-5 w-5 rounded-full border-4 border-white shadow-sm shadow-smoke-gray absolute right-1',
              {
                'bg-soft-green': isActive,
                'bg-gray-cloud': !isActive
              }
            )}
          />
        </div>
        <h1 className="font-bold text-xl md:text-base xl:text-xl 2xl:text-2xl">{userName}</h1>
        <p className="font-normal text-smoke-gray text-base 2xl:text-xl">{userEmail}</p>
      </div>
    </div>
  );
};

export default EnterpriseCard;
