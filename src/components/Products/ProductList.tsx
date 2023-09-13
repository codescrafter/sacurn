import { useCallback, useEffect } from 'react';

import { useFilterOptionsStore } from '@/store/filterOptions';
import { useProductListStore } from '@/store/productList';
import { useWishListStore } from '@/store/wishList';

import SelectField from '../SelectInput';
import Sort from '../Sort';
import LayoutSwitch from './LayoutSwitch';
import Tile from './Tile';

const ProductList = () => {
  const productList = useProductListStore((state) => state.productList);
  const updateProductListByFilters = useProductListStore((state) => state.updateProductListByFilters);
  const getProductListWithFilter = useProductListStore((state) => state.getProductListWithFilter);
  const filters = useProductListStore((state) => state.filters);
  const wishList = useWishListStore((state) => state.wishList);
  const getWishList = useWishListStore((state) => state.getWishList);
  const getFilterOptions = useFilterOptionsStore((state) => state.getFilterOptions);
  const locationOptions = useFilterOptionsStore((state) => state.locationOptions);
  const vintageOptions = useFilterOptionsStore((state) => state.vintageOptions);
  const priceOptions = useFilterOptionsStore((state) => state.priceOptions);

  useEffect(() => {
    getFilterOptions();
    if (productList.length === 0) getProductListWithFilter();
    if (wishList.length === 0) getWishList();
  }, []);

  const onSortChange = useCallback(() => {
    updateProductListByFilters({
      desc: !filters.desc
    });
  }, [filters.desc]);

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
              value={filters.location}
              options={locationOptions}
              handleChange={(location: (typeof locationOptions)[number]['value'] | undefined) => {
                updateProductListByFilters({
                  location
                });
              }}
            />
            <SelectField
              label="Vintages"
              value={filters.vintage}
              options={vintageOptions}
              handleChange={(vintage: (typeof vintageOptions)[number]['value'] | undefined) => {
                updateProductListByFilters({
                  vintage
                });
              }}
            />
            <SelectField
              label="Price"
              value={filters.price}
              options={priceOptions}
              handleChange={(price: string | undefined) => {
                updateProductListByFilters({
                  price
                });
              }}
            />
          </div>
          <Sort isLowToHight={!filters.desc} onSortChange={onSortChange} />
        </div>
        <div className="yellowScrollNoBg mr-1 pr-5.5 mt-13 overflow-scroll overflow-x-hidden">
          <div className="flex flex-col gap-5 h-[60vh] 2xl:h-[74vh]">
            {productList.map((product) => (
              <Tile
                key={product.id}
                id={product.id}
                tag={product.carbon_tag}
                image={product.image || '-'}
                name={product.name || '-'}
                rating={product.rating || '-'}
                standard={product.standard || '-'}
                type={product.type || '-'}
                coBenefit={product.co_benefit || 0}
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
