import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VerticalSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,

    afterChange: (currSlide) => setCurrentSlide(currSlide),
  };
  console.log(currentSlide);
  return (
    <div className="relative">
      <div className="absolute z-20 left-3.5 top-[40%] flex flex-col">
        {["01", "02", "03", "04"].map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              sliderRef.current.slickGoTo(index);
            }}
            className={`2xl:w-[13px] 2xl:h-[13px] w-2.5 h-2.5 border-2 border-white rounded-full mb-3.5 cursor-pointer ${
              currentSlide === index ? "bg-transparent" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
      <Slider
        ref={sliderRef}
        autoplay={true}
        autoplaySpeed={6000}
        initialSlide={0}
        slickGoTo={currentSlide}
        lazyLoad="progressive"
        {...settings}
        className="relative text-white max-h-[418px] overflow-hidden"
      >
        {[1, 2, 3, 4].map(() => (
          <div className="2xl:pt-11 pt-6 2xl:pl-[53px] pl-8 2xl:pb-7 pb-4 max-h-[418px] cursor-pointer">
            <h3 className="font-bold 2xl:text-[87px] text-[60px] 2xl:leading-[109px] leading-[73px]">
              國內首創自願性
              <br />
              碳資產管理平台
            </h3>
            <p className="font-normal 2xl:text-lg text-base 2xl:leading-6 leading-5 text-justify mt-1 mb-3">
              我們相信，碳權在綠色金融的大道中，不僅是一種商業模式，更是
              <br />
              一種使命。土星與企業共同攜手探索綠色金融之可能性，以實現全
              <br />
              球氣候治理目標，推動可持續發展的綠色未來。
            </p>
            <button className="2xl:w-[178px] 2xl:h-[37px] w-37 h-8 2xl:text-xl text-lg font-medium bg-pale-yellow rounded-[10px] text-navy-blue">
              瞭解更多
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VerticalSlider;
