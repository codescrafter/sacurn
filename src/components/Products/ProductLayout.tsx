import classNames from 'classnames';
import { ReactNode } from 'react';

import Navbar from '@/components/Navbar';

interface IProps {
  children: ReactNode;
}

const ProductLayout = ({ children }: IProps) => {
  return (
    <div
      className={classNames('w-full min-h-screen bg-no-repeat bg-center bg-cover', {
        "bg-[url('../public/images/products/bg-green.png')]": true
      })}
    >
      <div className="">
        <Navbar className={`pt-4 relative z-30`} />
        <div className="pt-4">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
