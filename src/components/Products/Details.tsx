import classNames from 'classnames';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

import BenefitImpact from './BenefitImpact';
import CartonImpact from './CartonImpact';
import LayoutSwitch from './LayoutSwitch';
import ProductDetail from './ProductDetail';
import ProductSlider from './ProductSlider';

const Details = () => {
  const [openTab, setOpenTab] = useState(1);

  enum Tabs {
    Product_Details = 1,
    Carton_Impact_Performance = 2,
    Cobenefit_Impact = 3
  }

  return (
    <div className="flex mt-4 pb-4">
      {/* First Col */}
      <div className="w-[38%]">
        <div className="relative z-[2]">
          <ImgSlider images={['/images/products/green/detail1.png', '/images/products/green/bird.png']} />
        </div>
        <div className="pl-5 pt-12">
          {/* Price */}
          <h5 className="text-lg font-bold text-white mb-4 pl-3">Price</h5>
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
          <div className="mt-7">
            <h5 className="text-lg font-bold text-white mb-4 pl-3">Ratings Breakdown</h5>
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
          <div className="mt-7">
            <h5 className="text-lg font-bold text-white mb-4 pl-3">Certification From</h5>
            <div className="bg-transparent-grey rounded p-8 flex justify-center items-center">
              <img src="/images/products/green/verra-standard.svg" alt="sacurn" />
            </div>
          </div>
        </div>
      </div>
      {/* Second Col */}
      <div className="w-[62%]">
        <LayoutSwitch />
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
                      'bg-white': openTab === Tabs.Product_Details
                    })}
                  >
                    <a
                      className={classNames(
                        'flex justify-center items-center rounded-full h-full py-2 text-xl font-medium',
                        {
                          'text-dark-grey': openTab === Tabs.Product_Details,
                          'text-white underline': openTab !== Tabs.Product_Details
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
                      'bg-white': openTab === Tabs.Carton_Impact_Performance
                    })}
                  >
                    <a
                      className={classNames(
                        'flex justify-center items-center rounded-full h-full py-2 text-xl font-medium',
                        {
                          'text-dark-grey': openTab === Tabs.Carton_Impact_Performance,
                          'text-white underline': openTab !== Tabs.Carton_Impact_Performance
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
                      'bg-white': openTab === Tabs.Cobenefit_Impact
                    })}
                  >
                    <a
                      className={classNames(
                        'flex justify-center items-center rounded-full h-full py-2 text-xl font-medium',
                        {
                          'text-dark-grey': openTab === Tabs.Cobenefit_Impact,
                          'text-white underline': openTab !== Tabs.Cobenefit_Impact
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
                <div className="bg-transparent-black p-4 overflow-hidden">
                  {openTab === Tabs.Product_Details && (
                    <div
                      className={classNames('block', {
                        hidden: openTab !== Tabs.Product_Details
                      })}
                    >
                      <ProductDetail />
                    </div>
                  )}
                  {openTab === Tabs.Carton_Impact_Performance && (
                    <div
                      className={classNames('block', {
                        hidden: openTab !== Tabs.Carton_Impact_Performance
                      })}
                    >
                      <CartonImpact />
                    </div>
                  )}
                  {openTab === Tabs.Cobenefit_Impact && (
                    <div
                      className={classNames('block', {
                        hidden: openTab !== Tabs.Cobenefit_Impact
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
