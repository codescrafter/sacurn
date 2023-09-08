import { useEffect } from 'react';

import FilterBar from '@/components/FilterBar';
import Navbar from '@/components/Navbar';
import WishListProdCard from '@/components/WishListProdCard';
import { WatchList } from '@/libs/api';
import { useWishListStore } from '@/store/wishList';

const WishList = () => {
  const wishList = useWishListStore((state) => state.wishList);
  const getWishList = useWishListStore((state) => state.getWishList);

  useEffect(() => {
    if (wishList.length === 0) getWishList();
  }, []);

  return (
    <div className="bg-[url('../public/images/wishlist/background.png')] bg-no-repeat bg-cover py-10 h-screen px-5 pr-8">
      <Navbar className="mb-8" />
      <FilterBar />
      <div className="grid grid-cols-2 gap-6.5 overflow-y-scroll yellowScroll overflow-x-hidden pr-5 max-w-[1680px] mx-auto">
        {wishList.map((product: WatchList) => {
          return <WishListProdCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default WishList;
