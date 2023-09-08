import classNames from 'classnames';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useWishListStore } from '@/store/wishList';
import { CarbonTag } from '@/type';

import CustomButton from '../CustomButton';
import CustomRating from '../Rating';

interface IProps {
  id: number;
  tag?: string | CarbonTag;
  name: string;
  image: string;
  rating?: string;
  standard?: string;
  type?: string;
  vintage: string;
  minPrice: string;
  maxPrice: string;
}

const Tile = ({ id, tag, name, rating, image, standard, type, vintage, minPrice, maxPrice }: IProps) => {
  const addToWhishList = useWishListStore((store) => store.addToWhishList);
  const deleteWishList = useWishListStore((store) => store.deleteWishList);
  const wishList = useWishListStore((store) => store.wishList);

  const isExistInWishList = useMemo(() => {
    const result = wishList.find((wishItem) => wishItem.carbon_credit === id);
    return !!result;
  }, [wishList]);

  return (
    <div className="bg-card-bg py-[20px] px-[24px] rounded-2xl flex justify-between items-center">
      <div className="flex gap-5">
        {/* first col */}
        <div className="w-[340px] h-[240px]">
          <img
            src={image}
            alt="sacurn"
            className={classNames('h-full w-full object-cover border-[5px] rounded-[14px]', {
              'border-light-green': tag === CarbonTag.Green,
              'border-yellow': tag === CarbonTag.Yellow,
              'border-navy-blue': tag === CarbonTag.Blue
            })}
          />
        </div>
        {/* second col */}
        <div className="py-2">
          <h3 className="text-lg font-bold text-black">{name}</h3>
          <div className="flex gap-.5 items-center mb-1">
            <img src="/images/products/green/location.svg" alt="location" className="inline-block mr-2" />
            <p className="text-sm text-grey">Peru</p>
          </div>
          {rating && (
            <>
              <div className="inline-block bg-white rounded-full px-5 py-1 text-blue text-sm font-bold mb-2">
                Rating {rating}
              </div>
              <br />
              <div className="inline-flex items-center bg-white gap-1 bg-red-200 rounded-full px-5 py-1 text-blue text-sm font-bold">
                Co-Benefit
                <CustomRating />
              </div>
            </>
          )}

          <div className="mt-7">
            {standard && (
              <div className="flex gap-10 items-center">
                <p className="font-xs text-grey w-[25%]">Standard</p>
                <p className="text-sm text-black w-[75%]">{standard}</p>
              </div>
            )}
            {type && (
              <div className="flex gap-10 items-center">
                <p className="font-xs text-grey w-[25%]">Type</p>
                <p className="text-sm text-black w-[75%]">{type}</p>
              </div>
            )}
            <div className="flex gap-10 items-center">
              <p className="font-xs text-grey w-[25%]">Vintage</p>
              <p className="text-sm text-black w-[75%]">{vintage}</p>
            </div>
          </div>
        </div>
      </div>
      {/* third col */}
      <div className="flex flex-1 flex-col justify-between items-end h-full py-2">
        <div className="flex items-center gap-1">
          <p className="text-sm text-black">USD</p>
          <p className="text-xl font-bold text-black">
            {minPrice} ~ {maxPrice}
          </p>
          <p className="text-[10px] text-black">/Tonne</p>
        </div>
        <div className="h-full flex flex-col items-start justify-evenly">
          <Link to={`/product-carbon/${id}`}>
            <img src="/images/products/green/dollar.svg" alt="sacurn" />
          </Link>
          {isExistInWishList ? (
            <button onClick={() => deleteWishList(id)}>
              <img src="/images/products/green/star-minus.svg" alt="sacurn" />
            </button>
          ) : (
            <button onClick={() => addToWhishList(id)}>
              <img src="/images/products/green/star-plus.svg" alt="sacurn" />
            </button>
          )}
        </div>
        <Link to={`/product-detail/${id}`} className="w-full max-w-[152px]">
          <CustomButton variant="primary" className="w-full flex items-center gap-2 justify-center">
            details
            <img src="/images/products/green/arrow.svg" alt="arrow-right" className="ml-2" />
          </CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default Tile;
