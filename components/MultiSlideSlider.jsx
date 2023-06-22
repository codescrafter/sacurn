import React, { Component, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const MultiSlideSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1.35,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false,
    swipeToSlide: true,
    arrows: false,
    slickGoTo: currentSlide,
    autoplay: true,
    autoplaySpeed: 6000,
    afterChange: (currSlide) => setCurrentSlide(currSlide),
  };
  //   when page loads, make

  return (
    <div className="mix-blend-hard-light bg-slider relative pt-5 pb-[52px] pl-8">
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
      <Slider centerMode={false} {...settings} ref={sliderRef}>
        <div className="!w-[422px]">
          <Image
            src={"/images/landing-page/multislide.png"}
            width={422}
            height={324}
            alt="multislide.png"
          />
          <p className="font-bold text-2xl leading-8">
            2023年企業出口貿易產品-減碳診斷/減碳輔導 1
          </p>
        </div>
        <div className="!w-[422px]">
          <Image
            src={"/images/landing-page/multislide.png"}
            width={422}
            height={324}
            alt="multislide.png"
          />
          <p className="font-bold text-2xl leading-8">
            2023年企業出口貿易產品-減碳診斷/減碳輔導 2
          </p>
        </div>
        <div className="!w-[422px]">
          <Image
            src={"/images/landing-page/multislide.png"}
            width={422}
            height={324}
            alt="multislide.png"
          />
          <p className="font-bold text-2xl leading-8">
            2023年企業出口貿易產品-減碳診斷/減碳輔導 3
          </p>
        </div>
        <div className="!w-[422px]">
          <Image
            src={"/images/landing-page/multislide.png"}
            width={422}
            height={324}
            alt="multislide.png"
          />
          <p className="font-bold text-2xl leading-8">
            2023年企業出口貿易產品-減碳診斷/減碳輔導 4
          </p>
        </div>
        <div className="!w-[422px]">
          <Image
            src={"/images/landing-page/multislide.png"}
            width={422}
            height={324}
            alt="multislide.png"
          />
          <p className="font-bold text-2xl leading-8">
            2023年企業出口貿易產品-減碳診斷/減碳輔導 5
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default MultiSlideSlider;
