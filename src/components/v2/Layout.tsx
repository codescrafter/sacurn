import classNames from 'classnames';
import React, { Fragment, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useCompanyStore } from '@/store/company';
import { useMembershipStepsStore } from '@/store/memberShipSteps';
import { COOKIE_AUTH_NAME } from '@/store/user';
import { MembershipStep, MembershipStepsPath, MembershipTypes } from '@/type';
import { getCookie } from '@/util/helper';

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
  const navigate = useNavigate();
  const membership = useMembershipStepsStore((state) => state.step);
  const getCompanyInfo = useCompanyStore((state) => state.getCompany);
  const [company] = useCompanyStore((state) => [state.company, state.getCompany]);

  useEffect(() => {
    const step = pathname.split('-').pop()?.toUpperCase();
    let current_membership_step: MembershipStep | undefined = undefined;
    if (step && ['RENEWAL', 'REISSUE', 'REVOKED'].includes(step)) {
      current_membership_step = step as MembershipStep;
    }
    if (current_membership_step) {
      useMembershipStepsStore.setState({ step: MembershipStep[current_membership_step] });
    } else {
      useMembershipStepsStore.setState({ step: undefined });
    }
  }, []);

  useEffect(() => {
    (async () => {
      const companyId = getCookie(COOKIE_AUTH_NAME);
      await getCompanyInfo(companyId);
    })();
  }, []);

  console.log('company--------------', company);

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
              {/* <div className="bg-[url('../public/v2/cardv1.svg')] bg-no-repeat bg-contain w-[380px] h-[220px]">
                Hlloe fjdkfldkjfld
              </div> */}
              <div className="relative w-[380px] h-[220px]">
                <img src="/v2/cardv1.svg" alt="sacurn card" className="w-full h-full object-cover" />
                <div className="absolute top-[34%] right-[8%] flex flex-col items-end w-full">
                  <p className="text-[26px] font-bold tracking-[0.9px] text-white leading-[25px]">
                    {/* 艾克斯厚定<span className="text-xs tracking-[0.39px]">股份有限公司</span> */}
                    {company?.name}
                  </p>
                  <p className="text-sm fond-bold tracking-[0.36px] text-white text-end leading-[24px]">
                    {company.account_name || ''}
                  </p>
                  <p className="text-[22px] font-bold text-white text-end drop-shadow-sm leading-[20px]">
                    {company.account_number || ''}
                  </p>
                  <p className="text-sliver-sand text-xs font-bold tracking-[0.193px] text-end">會員編號</p>
                  <div className="flex gap-6 justify-end">
                    <div className="text-end">
                      <p className="text-sm font-bold drop-shadow-lg text-white leading-[20px]">
                        {new Date(company.representative_id_card_issue_date || '')
                          .toLocaleDateString()
                          .split('/')
                          .reverse()
                          .join('/')}
                      </p>
                      <p className="text-sliver-sand text-xs font-bold tracking-[0.193px] text-end">核發日期</p>
                    </div>
                    <div className="text-end">
                      <p className="text-sm font-bold drop-shadow-lg text-white leading-[20px]">
                        {new Date(company.representative_id_card_issue_date || '')
                          .toLocaleDateString()
                          .split('/')
                          .reverse()
                          .join('/')}
                      </p>
                      <p className="text-sliver-sand text-xs font-bold tracking-[0.193px] text-end">到期日期</p>
                    </div>
                  </div>
                </div>
                <p className="text-ceramic text-xs font-bold relative -mt-[10px] mx-[8%] text-center 2xl:text-left xl:tracking-[1.8px] flex justify-center">
                  此會員憑證卡由土星永續股份有限公司認證發行
                </p>
              </div>
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
                      navigate(step.path);
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
    path: MembershipStepsPath.RENEWAL,
    icon: '/v2/layout/card.svg'
  },
  {
    id: 2,
    title: '會員卡補發',
    slug: MembershipStep.REISSUE,
    path: MembershipStepsPath.REISSUE,
    icon: '/v2/layout/help.svg'
  },
  {
    id: 3,
    title: '會員卡廢止',
    slug: MembershipStep.REVOKED,
    path: MembershipStepsPath.REVOKED,
    icon: '/v2/layout/cancel.svg'
  }
];
