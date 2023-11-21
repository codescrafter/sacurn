import { useEffect } from 'react';

import FilterBar from '@/components/FilterBar';
import Navbar from '@/components/Navbar';
import WishListProdCard from '@/components/WishListProdCard';
import WishlistSwitch from '@/components/WishlistSwitch';
import { WatchList } from '@/libs/api';
import { useWishListStore } from '@/store/wishList';

const WishList = () => {
  const wishList = useWishListStore((state) => state.wishList);
  const getWishListWithFilter = useWishListStore((state) => state.getWishListWithFilter);

  useEffect(() => {
    getWishListWithFilter();
  }, []);

  return (
    <div className="bg-[url('../public/images/wishlist/background.png')] bg-no-repeat bg-cover py-10 h-screen px-5 pr-8">
      <Navbar className="mb-8" />
      <WishlistSwitch />
      <FilterBar />
      <div className="grid grid-cols-2 gap-6.5 max-h-[72vh] overflow-y-auto yellowScroll overflow-x-hidden pr-5 3xl:max-w-full mx-auto 3xl:mx-2">
        {wishList.map((product: WatchList) => {
          return <WishListProdCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default WishList;
