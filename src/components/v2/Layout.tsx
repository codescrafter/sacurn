import classNames from 'classnames';
import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';

import { useMembershipStepsStore } from '@/store/memberShipSteps';
import { MembershipStep, MembershipTypes } from '@/type';

import Navbar from '../Navbar';
import AccountSteps from './AccountSteps';
import RangeSlider from './RangeSlider';

interface IProps {
  children: React.ReactNode;
  background?: 'primary' | 'secondary';
  variant?: 'secondary';
}

const Layout = ({ children, variant }: IProps) => {
  const { pathname } = useLocation();
  const membership = useMembershipStepsStore((state) => state.step);

  return (
    <Fragment>
      <Navbar className="!bg-navy-blue py-4" />
      <div
        className={classNames(
          "bg-[url('../public/v2/bg.png')] w-full min-h-[calc(100vh-71px)] pb-7 2xl:min-h-[calc(100vh-74px)] bg-no-repeat bg-cover",
          {
            "bg-[url('../public/v2/secondary.png')]":
              pathname === '/v2/card-renewal' || pathname === '/v2/membership-upgrade'
          }
        )}
      >
        <div className="flex justify-between gap-4">
          <div className="w-[30%] mt-10 min-[1400px]:mt-[102px] min-[1700px]:mt[150px]">
            <div className="pl-12">
              <img src="/v2/card.svg" alt="sacurn card" className="" />
              <p className="text-ceramic text-xs font-bold relative -mt-[14px] mx-[8%] text-center 2xl:text-left xl:tracking-[1.8px] 2xl:tracking-[3.6px] ">
                此會員憑證卡由土星永續股份有限公司認證發行
              </p>
            </div>
            <div>
              <h4 className="text-white text-4xl font-bold text-center mt-3 min-[1400px]:mt-7 min-[1700px]:mt-10">
                ECOGREEN
              </h4>
              <div className="flex justify-center my-3 min-[1400px]:my-7">
                <div className="w-0.5 h-10 min-[1400px]:h-[55px] bg-white" />
              </div>
              <div className="px-[20%]">
                <p className="text-sm font-normal text-white">
                  目前累積訂單 <b className="text-pale-yellow text-2xl font-bold">19</b>
                  <b className="text-lg font-bold text-white">/20</b>
                </p>
                <RangeSlider value={90} />
                <p className="text-sm font-normal text-white mt-4 min-[1400px]:mt-10">
                  目前累積消費 <b className="text-pale-yellow text-2xl font-bold">$99,000</b>
                  <b className="text-lg font-bold text-white">/100,000</b>
                </p>
                <RangeSlider value={95} />
              </div>
              <div className="flex gap-6 items-center px-[20%] mt-6 min-[1400px]:mt-12">
                {MEMBERSHIP_STEPS.map((step) => (
                  <div
                    key={step.id}
                    className={classNames('text-ceramic font-bold cursor-pointer flex flex-col gap-3', {
                      'transition-none border bg-[#ffffff4d] rounded-lg px-4 py-2': membership === step.slug
                    })}
                    onClick={() => {
                      useMembershipStepsStore.setState({ step: step.slug });
                    }}
                  >
                    <img src={step.icon} alt={step.title} className="w-[90px] h-10 object-contain" />
                    <span className="text-center whitespace-nowrap">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {variant !== 'secondary' && (
            <div className="w-[70%]">
              <AccountSteps />
              {children}
            </div>
          )}
          {variant === 'secondary' && <div className="w-[70%]">{children}</div>}
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;

const MEMBERSHIP_STEPS: MembershipTypes[] = [
  {
    id: 1,
    title: '會員卡續卡',
    slug: MembershipStep.RENEWAL,
    icon: '/v2/layout/card.svg'
  },
  {
    id: 2,
    title: '會員卡補發',
    slug: MembershipStep.REISSUE,
    icon: '/v2/layout/help.svg'
  },
  {
    id: 1,
    title: '會員卡廢止',
    slug: MembershipStep.REVOKED,
    icon: '/v2/layout/cancel.svg'
  }
];
