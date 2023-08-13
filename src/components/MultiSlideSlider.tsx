import { FC, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames";

const MultiSlideSlider: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const sliderRef = useRef<Slider | null>(null);
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
    afterChange: (currSlide: number) => setCurrentSlide(currSlide)
  };

  return (
    <div className="mix-blend-hard-light bg-slider relative pt-5 2xl:pb-11 pb-9 pl-8">
      <div className="absolute z-20 left-9 2xl:bottom-3 bottom-1 2xl:gap-3.5 gap-2.5 flex">
        {["01", "02", "03", "04", "05"].map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              sliderRef?.current?.slickGoTo(index);
            }}
            className={classNames(
              "2xl:w-[13px] 2xl:h-[13px] w-2.5 h-2.5 border-2 border-white rounded-full mb-3.5 cursor-pointer",
              {
                "bg-transparent": currentSlide === index,
                "bg-white": currentSlide !== index
              }
            )}
          ></div>
        ))}
      </div>
      <Slider centerMode={false} {...settings} ref={sliderRef}>
        {[1, 2, 3, 4, 5].map(() => (
          <div className="!w-[422px]">
            <img
              src={"/images/landing-page/multislide.png"}
              width={422}
              height={324}
              alt="multislide.png"
              className="2xl:w-[422px] 2xl:h-[324px] w-100 h-72 object-cover"
            />
            <p className="font-bold 2xl:text-2xl text-xl 2xl:leading-8 2xl:mt-3.5 mt-2">
              2023年企業出口貿易產品-減碳診斷/減碳輔導
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MultiSlideSlider;
