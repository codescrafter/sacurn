import classNames from 'classnames';
import React, { Fragment } from 'react';

import Navbar from '../Navbar';
import RangeSlider from './RangeSlider';

interface IProps {
  children: React.ReactNode;
  background?: 'primary' | 'secondary';
}

const Layout = ({ children }: IProps) => {
  return (
    <Fragment>
      <Navbar className="!bg-navy-blue py-4" />
      <div
        className={classNames(
          "bg-[url('../public/v2/bg.png')] w-full h-[calc(100vh-71px)] min-h-[700px] 2xl:h-[calc(100vh-74px)] bg-no-repeat bg-cover"
        )}
      >
        <div className="flex justify-between gap-4">
          <div className="w-[30%] mt-10 min-[1400px]:mt-[102px]">
            <div className="pl-12">
              <img src="/v2/card.svg" alt="sacurn card" className="" />
              <p className="text-ceramic text-xs font-bold relative -mt-[14px] mx-[8%] text-center 2xl:text-left xl:tracking-[1.8px] 2xl:tracking-[3.6px] ">
                此會員憑證卡由土星永續股份有限公司認證發行
              </p>
            </div>
            <div>
              <h4 className="text-white text-4xl font-bold text-center mt-3 min-[1400px]:mt-7">ECOGREEN</h4>
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
                <img src="/v2/layout/card.svg" alt="card" className="w-[112px] h-14 object-contain" />
                <img src="/v2/layout/help.svg" alt="card" className="w-[112px] h-14 object-contain" />
                <img src="/v2/layout/cancel.svg" alt="card" className="w-[112px] h-14 object-contain" />
              </div>
            </div>
          </div>
          <div className="w-[70%]">{children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
