import React, { Component, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HorizontalSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const sliderRef = useRef(null);
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
    afterChange: (currSlide) => setCurrentSlide(currSlide),
  };
  return (
    <div className="mix-blend-hard-light bg-slider pb-14 relative mt-4">
      <div className="absolute z-20 left-9 bottom-3 gap-3.5 flex">
        {["01", "02", "03", "04", "05"].map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              sliderRef.current.slickGoTo(index);
            }}
            className={`w-[13px] h-[13px] border-2 border-white rounded-full mb-3.5 cursor-pointer ${
              currentSlide === index ? "bg-transparent" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
      <Slider {...settings} ref={sliderRef}>
        <div className="pt-6 pl-8 pr-6">
          <p className="font-bold text-2xl">
            證交所董事會通過設碳權交易所示警買碳權相關股注意風險
          </p>
        </div>
        <div className="pt-6 pl-8 pr-6">
          <p className="font-bold text-2xl">
            證交所董事會通過設碳權交易所示警買碳權相關股注意風險
          </p>
        </div>
        <div className="pt-6 pl-8 pr-6">
          <p className="font-bold text-2xl">
            證交所董事會通過設碳權交易所示警買碳權相關股注意風險
          </p>
        </div>
        <div className="pt-6 pl-8 pr-6">
          <p className="font-bold text-2xl">
            證交所董事會通過設碳權交易所示警買碳權相關股注意風險
          </p>
        </div>
        <div className="pt-6 pl-8 pr-6">
          <p className="font-bold text-2xl">
            證交所董事會通過設碳權交易所示警買碳權相關股注意風險
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default HorizontalSlider;
