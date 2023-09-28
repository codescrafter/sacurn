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
      <div className="flex w-[55vw] h-[42px]">
        <CustomButton
          children="帳號資訊"
          variant="secondary"
          className={classNames('w-[25%] text-lg font-bold', {
            'shadow-membership-nav-in !bg-light-white': selected === 'account_info',
            'shadow-membership-nav-out bg-white': selected != 'account_info'
          })}
          onClick={() => setSelectedHandler('account_info')}
        />
        <CustomButton
          children="企業帳號總覽"
          variant="secondary"
          className={classNames('w-[25%] text-lg font-bold', {
            'shadow-membership-nav-in !bg-light-white': selected === 'enterprise_account_info',
            'shadow-membership-nav-out bg-white': selected != 'enterprise_account_info'
          })}
          onClick={() => setSelectedHandler('enterprise_account_info')}
        />
        <CustomButton
          children="帳戶碳積分"
          variant="secondary"
          className={classNames('w-[25%] text-lg font-bold', {
            'shadow-membership-nav-in !bg-light-white': selected === 'account_carbon_credits',
            'shadow-membership-nav-out bg-white': selected != 'account_carbon_credits'
          })}
          onClick={() => setSelectedHandler('account_carbon_credits')}
        />
        <CustomButton
          children="操作說明"
          variant="secondary"
          className={classNames('w-[25%] text-lg font-bold', {
            'shadow-membership-nav-in !bg-light-white': selected === 'instructions',
            'shadow-membership-nav-out bg-white': selected != 'instructions'
          })}
          onClick={() => setSelectedHandler('instructions')}
        />
      </div>
      <div className="bg-white shadow-membership-nav-underline mix-blend-soft-light h-0.5 w-full" />
    </div>
  );
};

export default MembershipCenterNav;
