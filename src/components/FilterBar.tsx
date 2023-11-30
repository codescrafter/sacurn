import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, ClickAwayListener, SxProps } from '@mui/material';
import { useEffect, useState } from 'react';

import { useFilterOptionsStore } from '@/store/filterOptions';
import { useWishListStore } from '@/store/wishList';
import { FilledRadio, UnFilledRadio } from '@/svg';

// import Searchbar from './Searchbar';
import SelectField from './SelectInput';

const FilterBar = () => {
  const [isSort, setIsSort] = useState(false);
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
    <div className="flex justify-end gap-11 items-end mb-7">
      <div className="flex flex-row gap-[20px] items-center justify-end">
        {/* <Searchbar value={searchByCode} setValue={(e) => setSearchByCode(e.target.value)} /> */}
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
      </div>
      <div className="mr-6">
        <ClickAwayListener onClickAway={() => setIsSort(false)}>
          <div>
            <p
              className="whitespace-nowrap text-[17px] tracking-[0.51px] leading-normal font-normal text-white cursor-pointer"
              onClick={() => setIsSort(!isSort)}
            >
              Sort: Low to High
              {isSort ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </p>
            <div>
              {isSort ? (
                <Box sx={styles}>
                  <div className="p-2">
                    <h6 className="text-dark-grey text-[17px] tracking-[0.51px] font-bold mb-4">Price</h6>
                    <div
                      onClick={() => {
                        updateWishListByFilters({
                          desc: false
                        });
                        setIsSort(false);
                      }}
                      className="flex cursor-pointer justify-between items-center mb-4"
                    >
                      <span className="text-dark-grey text-[17px] tracking-[0.51px] font-normal">Low to High</span>
                      {!filters.desc ? <FilledRadio /> : <UnFilledRadio />}
                    </div>
                    <div
                      onClick={() => {
                        updateWishListByFilters({
                          desc: true
                        });
                        setIsSort(false);
                      }}
                      className="flex cursor-pointer justify-between items-center"
                    >
                      <span className="text-dark-grey text-[17px] tracking-[0.51px] font-normal">High to Low</span>
                      {filters.desc ? <FilledRadio /> : <UnFilledRadio />}
                    </div>
                  </div>
                </Box>
              ) : null}
            </div>
          </div>
        </ClickAwayListener>
      </div>
    </div>
  );
};

export default FilterBar;
const styles: SxProps = {
  position: 'absolute',
  top: 200,
  right: 60,
  zIndex: 1,
  p: 1,
  border: '2px solid #DFDFDF',
  bgcolor: 'background.paper',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  color: 'black',
  width: '205px',
  borderRadius: '5px'
};
