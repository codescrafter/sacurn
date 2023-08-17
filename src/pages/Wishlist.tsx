// import { useState } from 'react';

import FilterBar from '@/components/FilterBar';
import Navbar from '@/components/Navbar';
// import ViewStyleBar from '@/components/ViewStyleBar';
import WishListProdCard from '@/components/WishListProdCard';

function WishList() {
  // const [display, setDisplay] = useState<string>('dark-green');
  return (
    <>
      <div className="bg-[url('../public/images/wishlist/background.png')] bg-no-repeat bg-cover py-10 h-screen px-5 pr-8">
        <Navbar className="mb-8" />
        {/* <ViewStyleBar activeColor={display} setDisplay={setDisplay} /> */}
        <FilterBar />
        <div className="grid grid-cols-2 gap-6.5 overflow-y-scroll yellowScroll overflow-x-hidden h-[80%] pr-5">
          {wishlistProd.map((product) => {
            return <WishListProdCard product={product} />;
          })}
        </div>
      </div>
    </>
  );
}

export default WishList;

const wishlistProd = [
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
