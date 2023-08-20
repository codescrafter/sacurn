import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import CustomButton from '../CustomButton';
import CustomRating from '../Rating';

interface IProps {
  name: string;
  image: string;
  rating: string;
  standard: string;
  type: string;
  vintage: string;
  price: string;
}

const Tile = ({ name, rating, image, standard, type, vintage, price }: IProps) => {
  const navigate = useNavigate();
  return (
    <div className={classNames('bg-card-bg p-2 px-4 rounded-2xl flex justify-between items-center')}>
      <div className="flex gap-5">
        {/* first col */}
        <div className="w-[340px] h-[240px]">
          <img src={image} alt="sacurn" className="h-full w-full object-contain" />
        </div>
        {/* second col */}
        <div className="py-2">
          <h3 className="text-lg font-bold text-black">{name}</h3>
          <div className="flex gap-.5 items-center mb-1">
            <img src="/images/products/green/location.svg" alt="location" className="inline-block mr-2" />
            <p className="text-sm text-grey">Peru</p>
          </div>
          <div className="inline-block bg-white rounded-full px-5 py-1 text-blue text-sm font-bold mb-2">
            Rating {rating}
          </div>
          <br />
          <div className="inline-flex items-center bg-white gap-1 bg-red-200 rounded-full px-5 py-1 text-blue text-sm font-bold">
            Co-Benefit
            <CustomRating />
          </div>
          <div className="mt-7">
            <div className="flex gap-10 items-center">
              <p className="font-xs text-grey w-[25%]">Standard</p>
              <p className="text-sm text-black w-[75%]">{standard}</p>
            </div>
            <div className="flex gap-10 items-center">
              <p className="font-xs text-grey w-[25%]">Type</p>
              <p className="text-sm text-black w-[75%]">{type}</p>
            </div>
            <div className="flex gap-10 items-center">
              <p className="font-xs text-grey w-[25%]">Vintage</p>
              <p className="text-sm text-black w-[75%]">{vintage}</p>
            </div>
          </div>
        </div>
      </div>
      {/* third col */}
      <div className="flex flex-col justify-between items-end h-full py-2">
        <div className="flex items-center gap-1">
          <p className="text-sm text-black">USD</p>
          <p className="text-xl font-bold text-black">{price}</p>
          <p className="text-[10px] text-black">/Tonne</p>
        </div>
        <div className="h-full flex flex-col items-start justify-evenly">
          <img src="/images/products/green/dollar.svg" alt="sacurn" />
          <img src="/images/products/green/start-plus.svg" alt="sacurn" />
        </div>
        <CustomButton
          variant="primary"
          className="w-full flex items-center gap-2 justify-center"
          onClick={() => {
            navigate('/product-detail/1');
          }}
        >
          details
          <img src="/images/products/green/arrow.svg" alt="arrow-right" className="ml-2" />
        </CustomButton>
      </div>
    </div>
  );
};

export default Tile;
