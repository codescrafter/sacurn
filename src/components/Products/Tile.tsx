import classNames from 'classnames';

import CustomButton from '../CustomButton';
import CustomRating from '../Rating';

const Tile = () => {
  return (
    <div className={classNames('bg-card-bg p-4 rounded-2xl flex justify-between items-center')}>
      <div className="flex gap-5">
        {/* first col */}
        <div className="w-[300px] h-[190px]">
          <img src="/images/products/green/frog.png" alt="sacurn" />
        </div>
        {/* second col */}
        <div>
          <h3 className="text-lg font-bold text-black">(VCS-985)Cordillera Azul REDD+ Product</h3>
          <div className="flex gap-1 items-center">
            <img src="/images/products/green/location.svg" alt="location" className="inline-block mr-2" />
            <p className="text-sm text-grey">Peru</p>
          </div>
          <div className="inline-block bg-white rounded-full px-5 py-2 text-blue text-sm font-bold">Rating A</div>
          <div className="flex items-center gap-3 bg-red-200 rounded-full px-5 py-2 text-blue text-sm font-bold">
            Co-Benefit
            <CustomRating />
          </div>
          <div>
            <div className="flex gap-10 items-center mb-2">
              <p className="font-xs text-grey">Standard</p>
              <p className="text-xs text-black">Verified Carbon Standard</p>
            </div>
            <div className="flex gap-10 items-center mb-2">
              <p className="font-xs text-grey">Type</p>
              <p className="text-xs text-black">REDD+</p>
            </div>
            <div className="flex gap-10 items-center mb-2">
              <p className="font-xs text-grey">Vintage</p>
              <p className="text-xs text-black">2017</p>
            </div>
          </div>
        </div>
      </div>
      {/* third col */}
      <div className="flex flex-col justify-around gap-7 items-end">
        <div className="flex items-center gap-1">
          <p className="text-sm text-black">USD</p>
          <p className="text-xl font-bold text-black">5.00~10.00</p>
          <p className="text-[10px] text-black">/ tonne</p>
        </div>
        <img src="/images/products/green/dollar.svg" alt="sacurn" />
        <img src="/images/products/green/start-plus.svg" alt="sacurn" />
        <CustomButton variant="primary" className="w-full flex items-center gap-2 justify-center">
          details
          <img src="/images/products/green/arrow.svg" alt="arrow-right" className="ml-2" />
        </CustomButton>
      </div>
    </div>
  );
};

export default Tile;
