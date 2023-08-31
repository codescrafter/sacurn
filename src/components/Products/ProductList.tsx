import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowUp';

import SelectField from '../SelectInput';
import LayoutSwitch from './LayoutSwitch';
import Tile from './Tile';

const ProductList = () => {
  return (
    <div className="flex pr-10">
      {/* first col */}
      <div className="w-[40%] 2xl:w-[42%]">
        <div className="absolute top-0 h-screen">
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
            {DATA.map((item) => (
              <Tile
                key={item.id}
                image={item.image}
                name={item.name}
                rating={item.rating}
                standard={item.standard}
                type={item.type}
                vintage={item.vintage}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

const DATA = [
  {
    id: '1',
    name: '(VCS-985)Cordillera Azul REDD+ Product',
    rating: 'A',
    standard: 'Verified Carbon Standard',
    type: 'REDD+',
    vintage: '2017',
    price: '5.00~10.00',
    image: '/images/products/green/frog.png'
  },
  {
    id: '2',
    name: '(VCS-985)Cordillera Azul REDD+ Product',
    rating: 'A',
    standard: 'Verified Carbon Standard',
    type: 'REDD+',
    vintage: '2017',
    price: '5.00~10.00',
    image: '/images/products/green/gorilla.png'
  },
  {
    id: '3',
    name: '(VCS-985)Cordillera Azul REDD+ Product',
    rating: 'A',
    standard: 'Verified Carbon Standard',
    type: 'REDD+',
    vintage: '2017',
    price: '5.00~10.00',
    image: '/images/products/green/bird.png'
  },
  {
    id: '4',
    name: '(VCS-985)Cordillera Azul REDD+ Product',
    rating: 'A',
    standard: 'Verified Carbon Standard',
    type: 'REDD+',
    vintage: '2017',
    price: '5.00~10.00',
    image: '/images/products/green/frog.png'
  },
  {
    id: '5',
    name: '(VCS-985)Cordillera Azul REDD+ Product',
    rating: 'A',
    standard: 'Verified Carbon Standard',
    type: 'REDD+',
    vintage: '2017',
    price: '5.00~10.00',
    image: '/images/products/green/gorilla.png'
  }
];
