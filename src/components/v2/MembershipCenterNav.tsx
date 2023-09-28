import classNames from 'classnames';
import { useState } from 'react';

import CustomButton from '../CustomButton';

const MembershipCenterNav = () => {
  const [selected, setSelected] = useState('');
  const setSelectedHandler = (selectedSection: string) => {
    setSelected(selectedSection);
  };
  return (
    <div className="flex flex-col gap-5 w-max mt-5">
      <div className="flex 2xl:w-[55vw] xl:w-[53vw] w-[50vw] h-[42px] first:rounded-s-md">
        <CustomButton
          children="帳號資訊"
          variant="secondary"
          className={classNames('w-[25%] 2xl:text-lg text-base font-bold rounded-s-md', {
            'shadow-membership-nav-in !bg-light-white': selected === 'account_info',
            'shadow-membership-nav-out bg-white': selected != 'account_info'
          })}
          onClick={() => setSelectedHandler('account_info')}
        />
        <CustomButton
          children="企業帳號總覽"
          variant="secondary"
          className={classNames('w-[25%] 2xl:text-lg text-base font-bold', {
            'shadow-membership-nav-in !bg-light-white': selected === 'enterprise_account_info',
            'shadow-membership-nav-out bg-white': selected != 'enterprise_account_info'
          })}
          onClick={() => setSelectedHandler('enterprise_account_info')}
        />
        <CustomButton
          children="帳戶碳積分"
          variant="secondary"
          className={classNames('w-[25%] 2xl:text-lg text-base font-bold', {
            'shadow-membership-nav-in !bg-light-white': selected === 'account_carbon_credits',
            'shadow-membership-nav-out bg-white': selected != 'account_carbon_credits'
          })}
          onClick={() => setSelectedHandler('account_carbon_credits')}
        />
        <CustomButton
          children="操作說明"
          variant="secondary"
          className={classNames('w-[25%] 2xl:text-lg text-base font-bold rounded-e-md', {
            'shadow-membership-nav-in !bg-light-white': selected === 'instructions',
            'shadow-membership-nav-out bg-white': selected != 'instructions'
          })}
          onClick={() => setSelectedHandler('instructions')}
        />
      </div>
      <div className="bg-white shadow-membership-nav-underline mix-blend-soft-light h-0.5 w-full rounded-full" />
    </div>
  );
};

export default MembershipCenterNav;
