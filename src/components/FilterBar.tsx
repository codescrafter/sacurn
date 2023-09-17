import { useEffect } from 'react';

import { useFilterOptionsStore } from '@/store/filterOptions';
import { useWishListStore } from '@/store/wishList';

import SelectField from './SelectInput';
import Sort from './Sort';

const FilterBar = () => {
  const filters = useWishListStore((state) => state.filters);
  const updateWishListByFilters = useWishListStore((state) => state.updateWishListByFilters);
  const getFilterOptions = useFilterOptionsStore((state) => state.getFilterOptions);
  const locationOptions = useFilterOptionsStore((state) => state.locationOptions);
  const vintageOptions = useFilterOptionsStore((state) => state.vintageOptions);
  const priceOptions = useFilterOptionsStore((state) => state.priceOptions);

  useEffect(() => {
    getFilterOptions();
  }, []);

  return (
    <div className="flex flex-row gap-[20px] items-center justify-end mb-7">
      <SelectField
        label="Location"
        value={filters.location}
        options={locationOptions}
        handleChange={(location: (typeof locationOptions)[number]['value'] | undefined) => {
          updateWishListByFilters({
            location
          });
        }}
      />
      <SelectField
        label="Vintages"
        value={filters.vintage}
        options={vintageOptions}
        handleChange={(vintage: (typeof vintageOptions)[number]['value'] | undefined) => {
          updateWishListByFilters({
            vintage
          });
        }}
      />
      <SelectField
        label="Price"
        value={filters.price}
        options={priceOptions}
        handleChange={(price: string | undefined) => {
          updateWishListByFilters({
            price
          });
        }}
      />
      <Sort
        isLowToHight={!filters.desc}
        onSortChange={() => {
          updateWishListByFilters({
            desc: !filters.desc
          });
        }}
      />
    </div>
  );
};

export default FilterBar;
