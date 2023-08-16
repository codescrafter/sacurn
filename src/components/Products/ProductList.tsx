import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowUp';
import classNames from 'classnames';

import SelectField from '../SelectInput';
import Tile from './Tile';

const ProductList = () => {
  return (
    <div className={classNames('flex px-10')}>
      {/* first col */}
      <div className="w-[42%]">
        <div className="absolute top-0 h-screen">
          <img src={'/images/products/green/side-image.png'} alt="sacurn" className="h-full object-cover" />
        </div>
      </div>
      {/* second col */}
      <div className="w-[58%]">
        <div className="mt-5 flex justify-between items-center">
          <div className=" flex justify-end items-center gap-5">
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
          <div>
            Sort: Low to High <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="flex flex-col gap-2 py-5 overflow-y-auto h-[78vh]">
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
