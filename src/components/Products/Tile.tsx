import classNames from 'classnames';
import dateFormat from 'dateformat';
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
  coBenefit: number;
  vintage: string;
  minPrice: string;
  maxPrice: string;
  location: string;
}

const Tile = ({
  id,
  tag,
  name,
  rating,
  image,
  standard,
  type,
  coBenefit,
  vintage,
  minPrice,
  maxPrice,
  location
}: IProps) => {
  const addToWhishList = useWishListStore((store) => store.addToWhishList);
  const deleteWishList = useWishListStore((store) => store.deleteWishList);
  const wishList = useWishListStore((store) => store.wishList);

  const wishItem = wishList.find((wishItem) => wishItem.carbon_credit === id);

  return (
    <div className="bg-card-bg py-[20px] px-[24px] rounded-2xl flex justify-between items-center">
      <div className="flex gap-5">
        {/* first col */}
        <div className="w-[310px] h-[215px]">
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
            <p className="text-sm text-grey">{location}</p>
          </div>
          {rating && (
            <>
              <div className="inline-block bg-white rounded-full px-4 py-0.5 text-blue text-sm font-bold mb-2">
                Rating {rating}
              </div>
              <br />
              <div className="inline-flex items-center bg-white gap-1.5 bg-red-200 rounded-full px-4 py-0.5 text-blue text-sm font-bold">
                Co-Benefit
                <CustomRating count={coBenefit} />
              </div>
            </>
          )}

          <div className="mt-6">
            {standard && (
              <div className="flex gap-[41px] items-center">
                <p className="font-[13px] text-grey min-w-[66px]">Standard</p>
                <p className="font-[13px] text-black flex-1">{standard}</p>
              </div>
            )}
            {type && (
              <div className="flex gap-[41px] items-center">
                <p className="font-[13px] text-grey min-w-[66px]">Type</p>
                <p className="font-[13px] text-black flex-1">{type}</p>
              </div>
            )}
            <div className="flex gap-[41px] items-center">
              <p className="font-[13px] text-grey min-w-[66px]">Vintage</p>
              <p className="font-[13px] text-black flex-1">{dateFormat(vintage, 'yyyy')}</p>
            </div>
          </div>
        </div>
      </div>
      {/* third col */}
      <div className="flex flex-1 flex-col justify-between items-end h-full py-2">
        <div>
          <div className="flex items-center gap-1 whitespace-nowrap">
            <p className="text-sm text-black">USD</p>
            <p className="text-xl font-bold text-black">
              {minPrice} ~ {maxPrice}
            </p>
            <p className="text-[10px] text-black">/Tonne</p>
          </div>
          <div className="h-full flex flex-col items-end gap-3 pt-2 pr-1">
            <Link to={`/product-carbon/${id}`}>
              <img
                src="/images/products/green/dollar2.svg"
                alt="sacurn"
                className="w-9 h-9 object-contain"
                width={36}
                height={36}
              />
            </Link>
            {wishItem ? (
              <button onClick={() => deleteWishList(wishItem.id)}>
                <img
                  src="/images/wishlist/favicon.svg"
                  alt="sacurn"
                  className="w-[56px] h-[46px] object-contain relative left-3.5"
                />
              </button>
            ) : (
              <button onClick={() => addToWhishList(id)}>
                <img
                  src="/images/wishlist/unfavicon.svg"
                  alt="sacurn"
                  className="w-[56px] h-[46px] object-contain relative left-3.5"
                />
              </button>
            )}
          </div>
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
