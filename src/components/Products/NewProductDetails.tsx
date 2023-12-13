import classNames from 'classnames';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

import { useCarbonCreditStore } from '@/store/carbonCredit';
import { useProductListStore } from '@/store/productList';
import { CarbonTag } from '@/type';

import Navbar from '../Navbar';

const NewProductDetails = () => {
  const carbonCredit = useCarbonCreditStore((state) => state.carbonCredit);

  const selectedTag = useProductListStore((state) => state.filters.tag);

  let imgsArray = ['/images/products/green/detail1.png'];
  if (selectedTag === CarbonTag.Green || selectedTag === CarbonTag.White) {
    imgsArray = ['/images/products/green/detail1.png'];
  } else if (selectedTag === CarbonTag.Yellow) {
    imgsArray = ['/images/products/yellow/detail1.png'];
  } else if (selectedTag === CarbonTag.Blue) {
    imgsArray = ['/images/products/blue/detail1.svg'];
  }

  return (
    <div className="bg-[url('../public/images/products/green/bg-green.png')] bg-no-repeat bg-cover bg-center h-screen min-h-[700px]">
      <div className="py-4">
        <Navbar />
      </div>
      <div className="px-5">
        <div className="flex items-center gap-[50px]">
          <ImgSlider images={imgsArray} location={carbonCredit?.location || ''} />
          <div className="font-istok-web">
            <h2 className="text-[30px] font-normal text-white leading-normal font-istok-web">
              (VCS-985)Cordillera Azul REDD+ ProductCordillera Azul REDD+ Product (VCS-985)Cordillera Azul REDD+
              ProductCordillera Azul REDD+ Product
            </h2>
            <div className="flex border border-white h-[145px] mt-3">
              <div className="border-r border-white h-full w-[20%] 3xl:w-[254px]"></div>
              <div className="border-x border-white h-full w-[26%] 3xl:w-[339px]"></div>
              <div className="border-x border-white h-full w-[31%] 3xl:w-[445px]"></div>
              <div className="border-l border-white h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductDetails;

// Image Slider
interface SliderIProps {
  images: string[];
  location: string;
}
const ImgSlider = ({ images, location }: SliderIProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    afterChange: (currSlide: number) => setCurrentSlide(currSlide)
  };
  return (
    <div className="relative h-[316px]">
      <div className="absolute z-20 left-0 bottom-8 right-0 gap-1.5 flex items-center pr-[30%] pl-6">
        <img src="/images/products/location-icon.svg" alt="location" className="w-[12px] h-[19px] object-contain" />
        <span className="text-white text-base font-bold">{location}</span>
      </div>
      <div className="absolute z-20 left-0 bottom-5 right-0 gap-1.5 flex pr-[30%] pl-6">
        {['01', '02', '03'].map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              sliderRef?.current?.slickGoTo(index);
            }}
            className={classNames('cursor-pointer flex-1 h-1 w-full rounded-[20px]', {
              'bg-white': currentSlide === index,
              'bg-white-smoke-3': currentSlide !== index
            })}
          />
        ))}
      </div>
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index} className="product-clip-path bg-card-bg">
            <img className="w-[658px] h-[316px] object-cover" src={image} alt="sacurn" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
