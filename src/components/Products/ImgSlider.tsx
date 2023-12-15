import classNames from 'classnames';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

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
    <div className="relative h-[316px] 2xl:w-[460px] w-[360px]">
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

export default ImgSlider;
