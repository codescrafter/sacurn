import classNames from 'classnames';
import { ReactNode } from 'react';

import CustomButton from '@/components/CustomButton';
import Navbar from '@/components/Navbar';

interface IProps {
  children: ReactNode;
}

const ProductLayout = ({ children }: IProps) => {
  return (
    <div
      className={classNames('w-full h-screen bg-no-repeat bg-center bg-cover', {
        "bg-[url('../public/images/products/bg-green.png')]": true
      })}
    >
      <div className="">
        <Navbar className={`pt-4 relative z-30`} />
        <div className="py-9">
          <div className="px-10 flex gap-6 items-center justify-end">
            <CustomButton
              variant="rounded-full"
              className={classNames('bg-dark-green', {
                ['text-white w-[205px] h-7 flex justify-center items-center']: true,
                ['hidden w-90 h-4']: false
              })}
            >
              綠碳
            </CustomButton>
            <CustomButton
              variant="rounded-full"
              className={classNames('bg-yellow', {
                ['text-white w-[205px] h-7 flex justify-center items-center']: true,
                ['hidden w-90 h-4']: false
              })}
            >
              黃碳
            </CustomButton>
            <CustomButton
              variant="rounded-full"
              className={classNames('bg-blue', {
                ['text-white w-[205px] h-7 flex justify-center items-center']: true,
                ['hidden w-90 h-4']: false
              })}
            >
              藍碳
            </CustomButton>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
