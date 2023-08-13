import { FC } from 'react';

import { ProductItemTypes } from '../type';
import { PRODUCT_ITEMS } from '../util/constants';

const ProductsListView: FC = () => {
  return (
    <div className="bg-transparent flex flex-col gap-4.5 max-h-[75vh]">
      {PRODUCT_ITEMS?.map((product: ProductItemTypes) => {
        return (
          <div className="bg-white rounded-3xl 2xl:px-4 2xl:py-5 px-3 py-3.5 flex flex-row cursor-pointer">
            <div className="p-1 rounded-2xl">
              <img
                className="2xl:h-47.2 2xl:w-74.7 h-40 w-64 rounded-2xl object-cover"
                src={product.imagePath}
                alt="sacurn"
              />
            </div>
            <div className="flex flex-col ml-3.7">
              <h1 className="text-black 2xl:text-3xl text-2xl font-semibold">{product.name}</h1>
              <h3 className="text-slate-blue-grey 2xl:text-xl text-lg font font-semibold">{product.projectby}</h3>
              <div className="flex flex-row mt-1">
                <div className="bg-light-grey rounded-3xl 2xl:pl-3.7 pl-2.5 2xl:pr-5.7 pr-4.5 py-0.5 flex flex-row">
                  <p className="text-medium-grey 2xl:mr-2.5 mr-1.5">{product.type}</p>
                  <img src={'/images/products-page/download.svg'} alt="sacurn" />
                </div>
                <div className="flex flex-row ml-4.5">
                  <img className="mr-1.2" src={'/images/products-page/location.svg'} alt="sacurn" />
                  <p className="text-soft-red font-semibold my-auto">{product.location}</p>
                </div>
              </div>
              <div className="flex flex-col h-full justify-end">
                <p className="text-black">{product.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsListView;
