import classNames from 'classnames';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAccountSteps } from '@/store/accountSteps';
import { AccountStepsEnum } from '@/type';

import CustomButton from '../CustomButton';

const AccountSteps = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const selected = useAccountSteps((state) => state.step);

  useEffect(() => {
    setSelectedHandler(pathname as AccountStepsEnum);
    navigate(pathname);
  }, [pathname]);

  const setSelectedHandler = (selectedSection: AccountStepsEnum) => {
    useAccountSteps.setState({ step: selectedSection });
  };

  return (
    <div className="flex flex-col gap-5 w-max mt-5 ml-3">
      <div className="flex min-[1300px]:w-[53vw] w-[50vw] h-[42px] first:rounded-s-md">
        <CustomButton
          children="帳號資訊"
          variant="secondary"
          className={classNames('w-[25%] 2xl:text-lg text-base font-bold rounded-s-md', {
            'shadow-membership-nav-in !bg-light-white': selected === AccountStepsEnum.ACCOUNT_INFORMATION,
            'shadow-membership-nav-out bg-white': selected != AccountStepsEnum.ACCOUNT_INFORMATION
          })}
          onClick={() => {
            setSelectedHandler(pathname as AccountStepsEnum);
            navigate('/v2/account-information');
          }}
        />
        <CustomButton
          children="企業帳號總覽"
          variant="secondary"
          className={classNames('w-[25%] 2xl:text-lg text-base font-bold', {
            'shadow-membership-nav-in !bg-light-white': selected === AccountStepsEnum.ENTERPRISE_ACCOUNT,
            'shadow-membership-nav-out bg-white': selected != AccountStepsEnum.ENTERPRISE_ACCOUNT
          })}
          onClick={() => {
            setSelectedHandler(pathname as AccountStepsEnum);
            navigate('/v2/enterprise-account');
          }}
        />
        <CustomButton
          children="帳戶碳積分"
          variant="secondary"
          className={classNames('w-[25%] 2xl:text-lg text-base font-bold', {
            'shadow-membership-nav-in !bg-light-white': selected === AccountStepsEnum.ACCOUNT_CARBON_CREDIT,
            'shadow-membership-nav-out bg-white': selected != AccountStepsEnum.ACCOUNT_CARBON_CREDIT
          })}
          onClick={() => {
            setSelectedHandler(pathname as AccountStepsEnum);
            navigate('/v2/account-carbon-credit');
          }}
        />
        <CustomButton
          children="操作說明"
          variant="secondary"
          className={classNames('w-[25%] 2xl:text-lg text-base font-bold rounded-e-md', {
            'shadow-membership-nav-in !bg-light-white': selected === AccountStepsEnum.OPERATING_INSTRUCTION,
            'shadow-membership-nav-out bg-white': selected != AccountStepsEnum.OPERATING_INSTRUCTION
          })}
          onClick={() => {
            setSelectedHandler(pathname as AccountStepsEnum);
            navigate('/v2/operating-instruction');
          }}
        />
      </div>
      <div className="bg-white shadow-membership-nav-underline mix-blend-soft-light h-0.5 w-full rounded-full" />
    </div>
  );
};

export default AccountSteps;
