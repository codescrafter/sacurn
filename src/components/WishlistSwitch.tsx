import classNames from 'classnames';

import { useWishListStore } from '@/store/wishList';
import { CarbonTag } from '@/type';

import CustomButton from './CustomButton';

const WishlistSwitch = () => {
  const filters = useWishListStore((state) => state.filters);
  const updateWishListByFilters = useWishListStore((state) => state.updateWishListByFilters);

  return (
    <div className="px-10 pb-7 flex gap-6 items-center justify-end h-[46px]">
      <CustomButton
        variant="rounded-full"
        className={classNames('bg-white !text-[#525252]', {
          ['w-[205px] h-7 flex justify-center items-center']: filters.tag === CarbonTag.White,
          ['w-[90px] h-[18px]']: filters.tag !== CarbonTag.White
        })}
        onClick={() => {
          updateWishListByFilters({
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
          updateWishListByFilters({
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
          updateWishListByFilters({
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
          updateWishListByFilters({
            tag: CarbonTag.Blue
          });
        }}
      >
        {filters.tag === CarbonTag.Blue ? '藍碳' : ''}
      </CustomButton>
    </div>
  );
};

export default WishlistSwitch;
