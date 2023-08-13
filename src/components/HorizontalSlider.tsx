import React, { FC, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IProps {}

const HorizontalSlider: FC<IProps> = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const sliderRef = useRef<Slider | null>(null);
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
    afterChange: (currSlide: number) => setCurrentSlide(currSlide)
  };
  return (
    <div className="mix-blend-hard-light bg-slider 2xl:pb-12 pb-9 relative mt-4">
      <div className="absolute z-20 2xl:left-9 left-5.5 2xl:bottom-2 bottom-0 2xl:gap-3.5 gap-2.5 flex">
        {["01", "02", "03", "04", "05"].map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              sliderRef?.current?.slickGoTo(index);
            }}
            className={`2xl:w-[13px] 2xl:h-[13px] w-2.5 h-2.5 border-2 border-white rounded-full mb-3.5 cursor-pointer ${
              currentSlide === index ? "bg-transparent" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
      <Slider {...settings} ref={sliderRef}>
        {[1, 2, 3, 4, 5].map(() => (
          <div className="2xl:pt-6 pt-4 2xl:pl-8 pl-5 2xl:pr-6 pr-4">
            <p className="font-bold 2xl:text-2xl text-lg">
              證交所董事會通過設碳權交易所示警買碳權相關股注意風險
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HorizontalSlider;
