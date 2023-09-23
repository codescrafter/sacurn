import classNames from 'classnames';
import React, { Fragment } from 'react';

import Navbar from '../Navbar';

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
          "bg-[url('../public/v2/bg.png')] w-full h-[calc(100vh-71px)] 2xl:h-[calc(100vh-74px)] bg-no-repeat bg-cover"
        )}
      >
        <div className="flex justify-between gap-4">
          <div className="w-[30%] mt-[102px]">
            <div className="pl-12">
              <img src="/v2/card.svg" alt="sacurn card" className="" />
              <p className="text-ceramic text-xs font-bold relative -mt-[14px] mx-[8%] text-center 2xl:text-left xl:tracking-[1.8px] 2xl:tracking-[3.6px] ">
                此會員憑證卡由土星永續股份有限公司認證發行
              </p>
            </div>
          </div>
          <div className="w-[70%]">{children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
