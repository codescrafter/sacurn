import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';

import { useFilterOptionsStore } from '@/store/filterOptions';
import { useProductListStore } from '@/store/productList';
import { useWishListStore } from '@/store/wishList';
import { CarbonTag } from '@/type';

import Searchbar from '../Searchbar';
import SelectField from '../SelectInput';
import SortFiltersModal from '../SortFiltersModal';
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
  const selectedTag = useProductListStore((state) => state.filters.tag);
  const [searchByCode, setSearchByCode] = useState<string>('');

  useEffect(() => {
    getFilterOptions();
    getProductListWithFilter();
    if (wishList.length === 0) getWishList();
  }, []);

  const onSortChange = useCallback(
    (sortType: 'price' | 'vintage', desc: boolean) => {
      updateProductListByFilters({
        desc: desc,
        sort_by: sortType
      });
    },
    [filters.desc]
  );

  return (
    <div className="flex pr-10 justify-end">
      {/* first col */}
      <div className=" 2xl:w-[42%]">
        <div className="absolute top-0 left-0 h-screen z-[-1]">
          <img
            src={classNames(
              {
                '/images/products/green/side-image.png':
                  selectedTag === CarbonTag.Green || selectedTag === CarbonTag.White
              },
              {
                '/images/products/yellow/side-image.png': selectedTag === CarbonTag.Yellow
              },
              {
                '/images/products/blue/side-image.png': selectedTag === CarbonTag.Blue
              }
            )}
            alt="sacurn"
            className="h-full object-cover hidden lg:block"
          />
        </div>
      </div>
      {/* second col */}
      <div className=" 2xl:w-[58%] flex-1 max-w-[900px] 2xl:max-w-full">
        <LayoutSwitch />
        <div className="mt-2 flex justify-between items-end pl-4 pr-8">
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
            <Searchbar value={searchByCode} setValue={(e) => setSearchByCode(e.target.value)} className="hidden" />
          </div>
          <div className="hidden 2.5xl:block">
            <SortFiltersModal desc={filters.desc} sortBy={filters.sort_by} onSortChange={onSortChange} />
          </div>
        </div>
        <div className="flex justify-end pr-8 mt-2 2.5xl:hidden">
          <SortFiltersModal desc={filters.desc} sortBy={filters.sort_by} onSortChange={onSortChange} />
        </div>
        <div className="yellowScrollNoBg mr-1 pr-5.5 mt-5 overflow-auto overflow-x-hidden">
          <div className="flex flex-col gap-5 h-[60vh] 2xl:h-[74vh]">
            {productList.map((product) => (
              <Tile
                key={product.id}
                id={product.id}
                tag={product.carbon_tag}
                image={product.image || '-'}
                name={product.name || '-'}
                location={product.location}
                rating={product.carbon_rating || '-'}
                standard={product.certification_from || '-'}
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
