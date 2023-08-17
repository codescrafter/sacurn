import classNames from 'classnames';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

import ProductSlider from './ProductSlider';

const Details = () => {
  return (
    <div className="flex mt-4">
      {/* First Col */}
      <div className="w-[38%]">
        <ImgSlider images={['/images/products/green/detail1.png', '/images/products/green/bird.png']} />
        <div>
          <h5 className="text-lg font-bold text-white ">Price</h5>
          <div className="bg-transparent-grey rounded p-4 flex justify-center items-center">
            <div className="flex justify-evenly items-start">
              <div className="flex items-baseline text-white">
                <span className="text-2xl">USD</span>
                <b className="text-[50px] font-semibold">5.00~5.00</b>
                <span>/Tonne</span>
              </div>
              <div>
                <img src="/images/products/green/dollar-2.svg" alt="sacurn" />
              </div>
            </div>
            <p className="text-sm">Ranges from vintage 2017</p>
          </div>
        </div>
      </div>
      {/* Second Col */}
      <div className="w-[62%]">
        <div>
          <ProductSlider />
        </div>
      </div>
    </div>
  );
};

export default Details;

interface SliderIProps {
  images: string[];
}
const ImgSlider = ({ images }: SliderIProps) => {
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
    <div className="relative h-full">
      <div className="absolute z-20 left-0 bottom-4 right-0 gap-1.5 flex pr-[30%] pl-6">
        {['01', '02', '03'].map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              sliderRef?.current?.slickGoTo(index);
            }}
            className={classNames('cursor-pointer flex-1 h-1 w-full rounded-[20px]', {
              'bg-light-grey': currentSlide === index,
              'bg-white': currentSlide !== index
            })}
          />
        ))}
      </div>
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index} className="product-clip-path h-[285px] bg-card-bg">
            <img className="w-full h-full object-cover" src={image} alt="sacurn" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
