import { FC } from 'react';

const ProductDeatilView: FC = () => {
  return (
    <div className="relative w-full flex flex-col 2xl:mt-37 xl:mt-24 mt-18">
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="2xl:text-4.5xl xl:text-2xl text-1.5xl">{product.name}</h1>
          <p className="2xl:text-2.5xl xl:text-lg text-base font-thin">{product.developer}</p>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex flex-row ">
            <div className="flex rounded-full bg-pale-yellow 2xl:h-12.7 xl:h-8  2xl:w-12.7 xl:w-8  hover:cursor-pointer w-6 h-6">
              <img
                className="mx-auto my-auto 2xl:h-auto 2xl:w-auto xl:w-4 xl:h-4 w-2 h-2"
                src={'/images/products-page/plus.svg'}
                alt="sacurn"
              />
            </div>
            <p className="text-pale-yellow ml-2 my-auto text-sm">購買</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row 2xl:mt-7.7 xl:mt-4 mt-3 justify-start pb-2">
        <div className="relative flex flex-col items-end 2xl:-translate-x-4 xl:-translate-x-2 -translate-x-2">
          <div className="relative styledDiv 2xl:py-5.2 xl:py-2.2 2xl:px-17.7 xl:px-14  items-center 2xl:mb-4 xl:mb-2 py-2 mb-2 px-8">
            <h1 className="2xl:text-3.5xl xl:text-1.5xl mb-3.2 font-medium text-xl">Profile</h1>
            <div className="flex flex-row mb-3">
              <img
                className="2xl:mr-2.5 xl:mr-1 2xl:w-auto 2xl:h-auto xl:w-3 xl:h-3.5 mr-1 w-3 h-3.5"
                src={'/images/products-page/locationsmall.svg'}
                alt="sacurn"
              />
              <p className="2xl:text-base xl:text-xs text-xs">{product.profile.country}</p>
            </div>
            <div className="flex flex-row">
              <img
                className="2xl:mr-1.2 xl:mr-1  2xl:w-auto 2xl:h-auto xl:w-3 xl:h-3.5 mr-1 w-3 h-3.5"
                src={'/images/products-page/verified.svg'}
                alt="sacurn"
              />
              <p className="2xl:text-base xl:text-xs text-xs">{product.profile.verification}</p>
            </div>
          </div>
          <div className="flex flex-col items-center xl:py-4.7 2xl:pl-4 pl-0 2xl:pr-6.2 xl:pr-2.5 xl:h-full styledDiv py-3 pr-1.5">
            <img
              className="2xl:mb-2.7 xl:mb-1.5 mb-1 2xl:h-auto 2xl:w-auto xl:h-8 xl:w-8 h-7 w-7"
              src={'/images/products-page/methodology.svg'}
              alt="sacurn"
            />
            <div className="text-right">
              <h1 className="2xl:text-3.5xl xl:text-2.5xl font-medium mb-0.5 text-1.5xl">Methodology</h1>
              <h3 className="2xl:text-2xl xl:text-xl font-medium  mb-0.7 text-lg">{product.methodology}</h3>
              <p className="2xl:w-59.2 xl:w-51 xl:text-xs text-xs 2xl:mb-2.5 xl:mb-4 font-thin w-40">
                {product.methodology_explaination}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="border border-white flex flex-col">
            <h1 className="2xl:text-3.5xl xl:text-2.5xl font-medium mt-6.2 ml-13 mb-3.5 text-2xl">About</h1>
            <div className="flex flex-row xl:mb-8.2 xl:mr-6.5 mb-7.5 mr-6">
              <div className="px-0.5 h-[60%] rounded-md bg-white ml-6.7 mr-4.2"></div>
              <p className="2xl:max-w-[640px] 2xl:w-auto xl:min-w-[400px] xl:max-w-[630px] xl:w-auto min-w-[200px] max-w-[500px] w-auto  2xl:text-2xl xl:text-base text-sm ">
                {product.about}
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between h-auto w-full">
            <div className="flex flex-col border border-white 2xl:mt-4 mt-2">
              <img
                className="2xl:mx-11.5 2xl:h-auto 2xl:w-auto xl:mx-4.5 xl:h-[50%] xl:w-[50%] h-[45%] w-[45%] mx-5 mt-4.7 hover:cursor-pointer"
                src={'/images/products-page/playbutton.svg'}
                alt="sacurn"
              />
              <p className="mx-auto 2xl:text-auto xl:text-xs text-xxs mb-1.2">Watch Video</p>
            </div>
            <img className="2xl:w-52 xl:w-52 w-40 mx-auto" src={'/images/products-page/standard1.svg'} alt="sacurn" />
            <img className="2xl:w-28 xl:w-28 w-20 mx-auto" src={'/images/products-page/standard2.svg'} alt="sacurn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeatilView;

const product = {
  name: 'CarbonCure Concrete Mineralization',
  developer: 'Project developed by CarbonCure Technologies',
  methodology: 'Soil carbon',
  methodology_explaination:
    'Soil carbon sequestration is the process of increasing organic and inorganic soil carbon through capturing and storing of carbon from plants.',
  profile: { country: 'Indonisia', verification: 'Not verified' },
  about:
    'CarbonCure is an engineering technology company that is licensing its technology to cure CO2 into concrete production. CarbonCure sells its equipment, retrofitting manufacturers’ concrete plants. CarbonCure allows plants to be connected to a CO2 tank stored onsite and automatically injects a precise dosage of CO2 into the concrete during mixing.'
};
