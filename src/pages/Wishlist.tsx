import { useEffect } from 'react';

import FilterBar from '@/components/FilterBar';
import Navbar from '@/components/Navbar';
import WishListProdCard from '@/components/WishListProdCard';
import { useWishListStore } from '@/store/wishList';
import { WishlistTypes } from '@/type';
import { WISHLIST_DATA } from '@/util/constants';

const WishList = () => {
  const wishList = useWishListStore((state) => state.wishList);
  const getWishList = useWishListStore((state) => state.getWishList);
  console.log(wishList);

  useEffect(() => {
    console.log('fetching wishlist');
    getWishList(1);
  }, []);
  return (
    <div className="bg-[url('../public/images/wishlist/background.png')] bg-no-repeat bg-cover py-10 h-screen px-5 pr-8">
      <Navbar className="mb-8" />
      <FilterBar />
      <div className="grid grid-cols-2 gap-6.5 overflow-y-scroll yellowScroll overflow-x-hidden h-[80%] pr-5">
        {WISHLIST_DATA.map((product: WishlistTypes) => {
          return <WishListProdCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default WishList;
