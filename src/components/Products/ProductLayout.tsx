import classNames from 'classnames';
import { ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import { useProductListStore } from '@/store/productList';
import { CarbonTag } from '@/type';

interface IProps {
  children: ReactNode;
}

const ProductLayout = ({ children }: IProps) => {
  const selectedTag = useProductListStore((state) => state.filters.tag);

  return (
    <div
      className={classNames(
        'w-full min-h-screen bg-no-repeat bg-center bg-cover absolute z-[-2]',
        {
          "bg-[url('../public/images/products-page/cover.png')]": CarbonTag.White === selectedTag
        },
        {
          "bg-[url('../public/images/products/green/bg-green.png')]": CarbonTag.Green === selectedTag
        },
        {
          "bg-[url('../public/images/products/yellow/bg-yellow.png')]": CarbonTag.Yellow === selectedTag
        },
        {
          "bg-[url('../public/images/products/blue/bg-blue.png')]": CarbonTag.Blue === selectedTag
        }
      )}
    >
      <Navbar className="pt-4 relative z-30" />
      <div>{children}</div>
    </div>
  );
};

export default ProductLayout;
