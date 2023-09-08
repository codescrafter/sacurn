import classNames from 'classnames';

import { useProductListStore } from '@/store/productList';
import { CarbonTag } from '@/type';

import CustomButton from '../CustomButton';

const LayoutSwitch = () => {
  const filters = useProductListStore((state) => state.filters);
  const updateProductListFilters = useProductListStore((state) => state.updateProductListFilters);

  return (
    <div className="px-10 pb-4 flex gap-6 items-center justify-end h-[46px]">
      <CustomButton
        variant="rounded-full"
        className={classNames('bg-dark-green', {
          ['text-white w-[205px] h-7 flex justify-center items-center']: filters.tag === CarbonTag.Green,
          ['w-[90px] h-[18px]']: filters.tag !== CarbonTag.Green
        })}
        onClick={() => {
          updateProductListFilters({
            tag: CarbonTag.Green
          });
        }}
      >
        {filters.tag === CarbonTag.Green ? '綠碳' : ''}
      </CustomButton>
      <CustomButton
        variant="rounded-full"
        className={classNames('bg-yellow', {
          ['text-white w-[205px] h-7 flex justify-center items-center']: filters.tag === CarbonTag.Yellow,
          ['w-[90px] h-[18px]']: filters.tag !== CarbonTag.Yellow
        })}
        onClick={() => {
          updateProductListFilters({
            tag: CarbonTag.Yellow
          });
        }}
      >
        {filters.tag === CarbonTag.Yellow ? '黃碳' : ''}
      </CustomButton>
      <CustomButton
        variant="rounded-full"
        className={classNames('bg-blue', {
          ['text-white w-[205px] h-7 flex justify-center items-center']: filters.tag === CarbonTag.Blue,
          ['w-[90px] h-[18px]']: filters.tag !== CarbonTag.Blue
        })}
        onClick={() => {
          updateProductListFilters({
            tag: CarbonTag.Blue
          });
        }}
      >
        {filters.tag === CarbonTag.Blue ? '藍碳' : ''}
      </CustomButton>
    </div>
  );
};

export default LayoutSwitch;
