import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from '@/components/CustomButton';
import { useEmployeeStore } from '@/store/employee';
import { BLUE, GREEN, YELLOW } from '@/util/constants';
interface IProps {
  title: string | null | undefined;
  userName: string;
  userEmail: string;
  id: number;
  img: string | undefined | null;
  isActive: boolean;
}

const EnterpriseCard = ({ title, userName, userEmail, img, isActive, id }: IProps) => {
  const updateEmployeeDetail = useEmployeeStore((state) => state.updateEmployeeDetails);

  const randomColor = () => {
    const randomValue = Math.random();
    if (randomValue < 0.3) return YELLOW;
    if (randomValue < 0.9 && randomValue > 0.3) return GREEN;
    else return BLUE;
  };

  const unFreezeEmployeeAccount = (id: number) => {
    const formData = new FormData();
    formData.append('status', '1');
    updateEmployeeDetail(id, formData);
  };
  const navigate = useNavigate();

  return (
    <div
      className={classNames(
        'relative bg-white rounded-lg w-[100%] h-[316px] flex justify-center items-center group hover:border-4  transition-all cursor-pointer',
        {
          'hover:border-dark-grey': !isActive
        }
      )}
      onClick={() => {
        if (isActive) navigate(`/v2/profile-update/${id}`);
      }}
    >
      <div
        className={classNames('w-full h-full absolute rounded-sm', {
          'group-hover:bg-[#abababd1]': !isActive
        })}
      />
      {!isActive && (
        <CustomButton
          variant="rounded-full"
          className="absolute z-20 py-2.5 px-5 !bg-white !text-navy-blue font-sm font-bold hidden group-hover:block"
          onClick={() => unFreezeEmployeeAccount(id)}
        >
          重新激活帳號
        </CustomButton>
      )}
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
