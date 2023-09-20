import classNames from 'classnames';

import { useProductListStore } from '@/store/productList';
import { CarbonTag } from '@/type';

import CustomButton from '../CustomButton';

const LayoutSwitch = () => {
  const filters = useProductListStore((state) => state.filters);
  const updateProductListByFilters = useProductListStore((state) => state.updateProductListByFilters);

  return (
    <div className="px-10 pb-4 flex gap-6 items-center justify-end h-[46px]">
      <CustomButton
        variant="rounded-full"
        className={classNames('bg-white text-[#525252]', {
          ['w-[205px] h-7 flex justify-center items-center']: filters.tag === CarbonTag.White,
          ['w-[90px] h-[18px]']: filters.tag !== CarbonTag.White
        })}
        onClick={() => {
          updateProductListByFilters({
            tag: CarbonTag.White
          });
        }}
      >
        {filters.tag === CarbonTag.White ? '所有碳權' : ''}
      </CustomButton>

      <CustomButton
        variant="rounded-full"
        className={classNames('!bg-dark-green', {
          ['text-white w-[205px] h-7 flex justify-center items-center']: filters.tag === CarbonTag.Green,
          ['w-[90px] h-[18px]']: filters.tag !== CarbonTag.Green
        })}
        onClick={() => {
          updateProductListByFilters({
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
          updateProductListByFilters({
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
          updateProductListByFilters({
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
