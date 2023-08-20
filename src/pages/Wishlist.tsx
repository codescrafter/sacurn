import FilterBar from '@/components/FilterBar';
import Navbar from '@/components/Navbar';
import WishListProdCard from '@/components/WishListProdCard';
import { WishlistTypes } from '@/type';

const WishList = () => {
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

const WISHLIST_DATA: WishlistTypes[] = [
  {
    id: 1,
    name: '(VCS-985)Cordillera Azul REDD+ Product',
    imagePath: 'product1'
  },
  {
    id: 2,
    name: '(VCS-985)Cordillera Azul REDD+ Product',
    imagePath: 'product2'
  },

  {
    id: 3,
    name: '(VCS-985)Cordillera Azul REDD+ Product',
    imagePath: 'product3'
  },
  {
    id: 4,
    name: '(VCS-985)Cordillera Azul REDD+ Product Cordillera Azul REDD+ Product',
    imagePath: 'product1'
  },
  {
    id: 5,
    name: '(VCS-985)Cordillera Azul REDD+ Product Cordillera Azul REDD+ Product',
    imagePath: 'product2'
  },
  {
    id: 6,
    name: '(VCS-985)Cordillera Azul REDD+ Product Cordillera Azul REDD+ Product',
    imagePath: 'product3'
  },
  {
    id: 7,
    name: '(VCS-985)Cordillera Azul REDD+ Product',
    imagePath: 'product1'
  },
  {
    id: 8,
    name: '(VCS-985)Cordillera Azul REDD+ Product',
    imagePath: 'product2'
  }
];
