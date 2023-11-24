import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { WatchList } from '@/libs/api';
import { useWishListStore } from '@/store/wishList';
import { CarbonTag } from '@/type';

interface IProps {
  product: WatchList;
}

const WishListProdCard = ({ product }: IProps) => {
  const deleteWishList = useWishListStore((state) => state.deleteWishList);

  const deleteWishlistItemHandler = async () => {
    await deleteWishList(product.id);
  };
  return (
    <>
      <div className="flex flex-row px-5.7 py-3.2 min-[1500px]:min-w-[700px] min-[630px] w-auto bg-milky rounded-lg max-h-[190px] 3xl:w-full 3xl:h-[260px] 3xl:max-h-full">
        <img
          src={product.image}
          className={classNames(
            'min-[1700px]:w-[256px] min-[1700px]:h-[162px] min-[1500px]:min-w-[220px] min-[1200px]:min-w-[180px] min-w-[150px] w-auto min-[1500px]:h-[150px] min-[1200px]:h-[130px] h-[140px] rounded-lg mr-3 border-[5px] 3xl:h-[232px] 3xl:min-w-[332px]',
            {
              'border-light-green': product.carbon_tag === CarbonTag.Green,
              'border-yellow': product.carbon_tag === CarbonTag.Yellow,
              'border-navy-blue': product.carbon_tag === CarbonTag.Blue,
              [product.carbon_tag]: true
            }
          )}
        />
        <div className="flex flex-col w-full pt-1">
          <h1 className="text-lg text-navy-blue font-bold">{product.name}</h1>
          <div className="flex flex-row">
            <p className="self-start text-xms font-bold text-black">USD</p>
            <p className="self-center font-bold text-black text-lg mx-0.5">
              {`$${product.min_price}~${product.max_price}`}
            </p>
            <p className="self-end text-xms font-bold text-black">/Tonne</p>
          </div>
          <div className="flex flex-col w-full justify-end h-full items-end">
            <p className="text-grey text-[13px] font-bold leading-5 mb-1">
              Item added {new Date(product.created_at).toDateString()}
            </p>
            <div className="flex flex-row gap-2 w-max">
              <Link to={`/product-carbon/${product.carbon_credit}`}>
                <button className="shadow-button-box-shadow flex justify-center items-center w-[82px] h-8 rounded-[10px] bg-pale-yellow">
                  <img src="/images/wishlist/dollar.svg" className="w-3 h-5 object-contain" />
                </button>
              </Link>
              <button
                className="shadow-button-delete-shadow border border-grey rounded-mdlg mx-auto min-[1500px]:px-4 px-2 min-[1500px]:py-0.7 py-0.5 hover:bg-[#f3dddd]"
                onClick={deleteWishlistItemHandler}
              >
                <img src="/images/wishlist/delete.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishListProdCard;
