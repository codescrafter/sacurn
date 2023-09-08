import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect } from 'react';

import { useProductListStore } from '@/store/productList';
import { useWishListStore } from '@/store/wishList';

import SelectField from '../SelectInput';
import LayoutSwitch from './LayoutSwitch';
import Tile from './Tile';

const ProductList = () => {
  const productList = useProductListStore((state) => state.productList);
  const getProductList = useProductListStore((state) => state.getProductList);
  const wishList = useWishListStore((state) => state.wishList);
  const getWishList = useWishListStore((state) => state.getWishList);

  useEffect(() => {
    if (productList.length === 0) getProductList();
    if (wishList.length === 0) getWishList();
  }, []);

  return (
    <div className="flex pr-10">
      {/* first col */}
      <div className="w-[40%] 2xl:w-[42%]">
        <div className="absolute top-0 h-screen z-[-1]">
          <img src="/images/products/green/side-image.png" alt="sacurn" className="h-full object-cover" />
        </div>
      </div>
      {/* second col */}
      <div className="w-[60%] 2xl:w-[58%]">
        <LayoutSwitch />
        <div className="mt-3 flex justify-between items-center">
          <div className="flex justify-end items-center gap-5">
            <SelectField
              label="Location"
              value="Location"
              handleChange={(value: string) => {
                console.log(value);
              }}
            />
            <SelectField
              label="Vintages"
              value="Vintages"
              handleChange={(value: string) => {
                console.log(value);
              }}
            />
            <SelectField
              label="Price"
              value="Price"
              handleChange={(value: string) => {
                console.log(value);
              }}
            />
          </div>
          <div className="text-white">
            Sort: Low to High <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="yellowScrollNoBg mr-1 pr-5.5 mt-13 overflow-scroll overflow-x-hidden">
          <div className="flex flex-col gap-5 h-[60vh] 2xl:h-[74vh]">
            {productList.map((product) => (
              <Tile
                key={product.id}
                id={product.id}
                image={product.image || '-'}
                name={product.name || '-'}
                // rating={product.rating}
                // standard={product.standard}
                // type={product.type}
                vintage={product.vintage || '-'}
                minPrice={product.min_price}
                maxPrice={product.max_price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
