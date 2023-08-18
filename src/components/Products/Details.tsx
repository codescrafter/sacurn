import classNames from 'classnames';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

import CustomButton from '../CustomButton';
import BenefitImpact from './BenefitImpact';
import CartonImpact from './CartonImpact';
import ProductDetail from './ProductDetail';
import ProductSlider from './ProductSlider';

const Details = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="flex mt-4">
      {/* First Col */}
      <div className="w-[38%]">
        <div className="relative z-[2]">
          <ImgSlider images={['/images/products/green/detail1.png', '/images/products/green/bird.png']} />
        </div>
        <div className="pl-5 pt-7">
          {/* Price */}
          <h5 className="text-lg font-bold text-white mb-2 pl-3">Price</h5>
          <div className="bg-transparent-grey rounded p-5 flex justify-center items-center">
            <div className="flex justify-between items-center gap-4">
              <div>
                <div className="flex items-baseline text-white">
                  <span className="text-2xl">USD</span>
                  <b className="text-5xl font-semibold">5.00~5.00</b>
                  <span className="text-2xl">/Tonne</span>
                </div>
                <p className="text-sm text-white">Ranges from vintage 2017</p>
              </div>
              <div>
                <img src="/images/products/green/dollar-2.svg" alt="sacurn" />
              </div>
            </div>
          </div>
          {/* Ratings Breakdown */}
          <div className="mt-4">
            <h5 className="text-lg font-bold text-white mb-2 pl-3">Ratings Breakdown</h5>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-transparent-grey rounded flex flex-col justify-center items-center p-4">
                <p className="text-xl font-bold text-white">Carbon Rating</p>
                <p className="text-xl font-bold text-white">A</p>
              </div>
              <div className="bg-transparent-grey rounded flex flex-col justify-center items-center p-4">
                <p className="text-xl font-bold text-white">Co-benefit</p>
                <p className="text-xl font-bold text-white">4/5</p>
              </div>
            </div>
          </div>
          {/* Certification From */}
          <div className="mt-4">
            <h5 className="text-lg font-bold text-white mb-2 pl-3">Certification From</h5>
            <div className="bg-transparent-grey rounded p-8 flex justify-center items-center">
              <img src="/images/products/green/verra-standard.svg" alt="sacurn" />
            </div>
          </div>
        </div>
      </div>
      {/* Second Col */}
      <div className="w-[62%]">
        <div className="px-10 pb-4 flex gap-6 items-center justify-end">
          <CustomButton
            variant="rounded-full"
            className={classNames('bg-dark-green', {
              ['text-white w-[205px] h-7 flex justify-center items-center']: true,
              ['hidden w-90 h-4']: false
            })}
          >
            綠碳
          </CustomButton>
          <CustomButton
            variant="rounded-full"
            className={classNames('bg-yellow', {
              ['text-white w-[205px] h-7 flex justify-center items-center']: true,
              ['hidden w-90 h-4']: false
            })}
          >
            黃碳
          </CustomButton>
          <CustomButton
            variant="rounded-full"
            className={classNames('bg-blue', {
              ['text-white w-[205px] h-7 flex justify-center items-center']: true,
              ['hidden w-90 h-4']: false
            })}
          >
            藍碳
          </CustomButton>
        </div>
        <div>
          <div className="relative z-[1] w-[103%] left-[-32px]">
            <ProductSlider />
          </div>
          <div className="">
            <div className="flex items-start gap-2 pr-8 mt-5">
              <h1 className="text-[32px] font-semibold text-white">
                (VCS-985)Cordillera Azul REDD+ ProductCordillera Azul REDD+ Product
              </h1>
              <img src="/images/products/green/start-gold.svg" alt="sacurn" />
            </div>
            {/* Product Details Tabs */}
            <div className="px-5">
              <div className="">
                <ul role="tablist" className="mb-4 rounded-full inline-flex h-10 bg-yellow-500 w-full">
                  <li
                    className={classNames('inline-block w-1/2 h-full text-center rounded-full', {
                      'bg-white': openTab === 1
                    })}
                  >
                    <a
                      className={classNames(
                        'flex justify-center items-center rounded-full h-full py-2 text-xl font-medium',
                        {
                          'text-dark-grey': openTab === 1,
                          'text-white underline': openTab !== 1
                        }
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#current campaigns"
                      role="tablist"
                    >
                      Product Details
                    </a>
                  </li>
                  <li
                    className={classNames('inline-block w-1/2 h-full text-center rounded-full', {
                      'bg-white': openTab === 2
                    })}
                  >
                    <a
                      className={classNames(
                        'flex justify-center items-center rounded-full h-full py-2 text-xl font-medium',
                        {
                          'text-dark-grey': openTab === 2,
                          'text-white underline': openTab !== 2
                        }
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="past campaigns"
                      role="tablist"
                    >
                      Carton Impact & Performance
                    </a>
                  </li>
                  <li
                    className={classNames('inline-block w-1/2 h-full text-center rounded-full', {
                      'bg-white': openTab === 3
                    })}
                  >
                    <a
                      className={classNames(
                        'flex justify-center items-center rounded-full h-full py-2 text-xl font-medium',
                        {
                          'text-dark-grey': openTab === 3,
                          'text-white underline': openTab !== 3
                        }
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      data-toggle="tab"
                      href="past campaigns"
                      role="tablist"
                    >
                      Co-benefit Impact
                    </a>
                  </li>
                </ul>
                <div className="bg-transparent-black p-4">
                  {openTab === 1 && (
                    <div
                      className={classNames('block', {
                        hidden: openTab !== 1
                      })}
                    >
                      <ProductDetail />
                    </div>
                  )}
                  {openTab === 2 && (
                    <div
                      className={classNames('block', {
                        hidden: openTab !== 2
                      })}
                    >
                      <CartonImpact />
                    </div>
                  )}
                  {openTab === 3 && (
                    <div
                      className={classNames('block', {
                        hidden: openTab !== 3
                      })}
                    >
                      <BenefitImpact />
                    </div>
                  )}
                </div>
              </div>
              {/* Body */}
            </div>
          </div>
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
    <div className="relative h-[285px]">
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
