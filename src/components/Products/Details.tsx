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
