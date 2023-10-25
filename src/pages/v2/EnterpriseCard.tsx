import classNames from 'classnames';
import React from 'react';

import CustomButton from '@/components/CustomButton';
import { IsOnlineEnum } from '@/libs/api';
import { useEmployeeStore } from '@/store/employee';
import { BLUE, GREEN, YELLOW } from '@/util/constants';
interface IProps {
  title: string | null | undefined;
  userName: string;
  userEmail: string;
  id: number;
  img: string | undefined | null;
  isActive: IsOnlineEnum | undefined;
}

interface unFreezeEmployeeAccountProps {
  id: number;
  userEmail: string;
  title: string | undefined;
}

const EnterpriseCard = ({ title, userName, userEmail, img, isActive, id }: IProps) => {
  const updateEmployeeDetail = useEmployeeStore((state) => state.updateEmployeeDetails);

  const randomColor = () => {
    const randomValue = Math.random();
    if (randomValue < 0.3) return YELLOW;
    if (randomValue < 0.9 && randomValue > 0.3) return GREEN;
    else return BLUE;
  };

  const unFreezeEmployeeAccount = (data: unFreezeEmployeeAccountProps) => {
    const dataToSend = { email: data.userEmail, position: data.title, status: 0 };
    console.log(dataToSend);
    updateEmployeeDetail(data.id, dataToSend);
  };

  return (
    <div className="relative bg-white rounded-lg w-[100%] h-[316px] flex justify-center items-center group hover:border-4 hover:border-dark-grey transition-all">
      <div className="w-full h-full absolute group-hover:bg-[#abababd1] rounded-sm" />
      <CustomButton
        variant="rounded-full"
        className="absolute z-20 py-2.5 px-5 !bg-white !text-navy-blue font-sm font-bold hidden group-hover:block"
        onClick={() => unFreezeEmployeeAccount({ id, userEmail, title } as unFreezeEmployeeAccountProps)}
      >
        重新激活帳號
      </CustomButton>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-navy-blue font-bold text-xl md:text-base xl:text-xl 2xl:text-2xl ">{title}</h1>
        <div
          className={classNames(
            'relative border-4 rounded-full bg-grey mt-2 flex justify-center items-end h-24 w-24 border-light-green',
            {
              'border-pale-yellow': randomColor() === YELLOW,
              'border-light-green': randomColor() === GREEN,
              'border-navy-blue': randomColor() === BLUE
            }
          )}
        >
          <img src={img ?? '/images/enterprise-account/user-icon.svg'} alt="no Image" className="h-15 xl:h-18" />
          <div
            className={classNames(
              'h-5 w-5 rounded-full border-4 border-white shadow-sm shadow-dark-grey absolute right-1',
              {
                'bg-soft-green': isActive,
                'bg-silverstone': !isActive
              }
            )}
          />
        </div>
        <h1 className="font-bold text-xl md:text-base xl:text-xl 2xl:text-2xl">{userName}</h1>
        <p className="font-normal text-dark-grey text-base 2xl:text-xl">{userEmail}</p>
      </div>
    </div>
  );
};

export default EnterpriseCard;
