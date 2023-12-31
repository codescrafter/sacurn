import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';

import { useCarbonCreditStore } from '@/store/carbonCredit';
import { useProductListStore } from '@/store/productList';
import { useWishListStore } from '@/store/wishList';
import { CarbonTag } from '@/type';
import { formatNumberByComma } from '@/util/helper';

import BenefitImpact from './BenefitImpact';
import CartonImpact from './CartonImpact';
import LayoutSwitch from './LayoutSwitch';
import ProductDetail from './ProductDetail';

enum Tabs {
  Product_Details = 1,
  Carton_Impact_Performance = 2,
  Cobenefit_Impact = 3
}

const Details = () => {
  const navigate = useNavigate();
  const param = useParams();
  const [openTab, setOpenTab] = useState(1);
  const [idInWishlist, setIdInWishlist] = useState<number>(0);

  const carbonCredit = useCarbonCreditStore((state) => state.carbonCredit);
  const getCarbonCredit = useCarbonCreditStore((state) => state.getCarbonCredit);
  const addToWhishList = useWishListStore((store) => store.addToWhishList);
  const deleteWishList = useWishListStore((store) => store.deleteWishList);
  const wishList = useWishListStore((store) => store.wishList);
  const getWishList = useWishListStore((store) => store.getWishList);

  useEffect(() => {
    const idInWishlist = wishList.find((item) => param?.id && item.carbon_credit === +param?.id)?.id || 0;
    setIdInWishlist(idInWishlist);
  }, [wishList]);

  useEffect(() => {
    if (!param) return;
    getCarbonCredit(Number(param.id));
    getWishList();
  }, []);

  const selectedTag = useProductListStore((state) => state.filters.tag);
  // let imgsArray = [];
  let imgsArray = ['/images/products/green/detail1.png'];
  if (selectedTag === CarbonTag.Green || selectedTag === CarbonTag.White) {
    imgsArray = ['/images/products/green/detail1.png'];
  } else if (selectedTag === CarbonTag.Yellow) {
    imgsArray = ['/images/products/yellow/detail1.png'];
  } else if (selectedTag === CarbonTag.Blue) {
    imgsArray = ['/images/products/blue/detail1.svg'];
  }

  return (
    <div className="flex mt-4 pb-4">
      {/* First Col */}
      <div className="w-[38%]">
        <div>
          <div className="relative z-[2]">
            <ImgSlider images={imgsArray} location={carbonCredit?.location || ''} />
          </div>
          <div className="pl-5 pt-12">
            {/* Price */}
            <h5 className="text-lg font-bold text-white mb-4 pl-3">Price</h5>
            <div className="bg-transparent-grey rounded p-5 flex justify-center items-center">
              <div className="flex justify-between items-center gap-4">
                <div>
                  <div className="flex items-baseline text-white">
                    <span className="text-2xl">TWD</span>
                    <b className="text-5xl font-semibold">
                      {formatNumberByComma(carbonCredit?.min_price || '')}~
                      {formatNumberByComma(carbonCredit?.max_price || '')}
                    </b>
                    <span className="text-2xl">/Tonne</span>
                  </div>
                  <p className="text-sm text-white">Ranges from vintage 2017</p>
                </div>
                <div className="min-w-[58px] min-h-[58px]">
                  <img
                    src="/images/products/green/dollar-2.svg"
                    className="cursor-pointer relative z-20"
                    alt="sacurn"
                    onClick={() => navigate(`/product-carbon/${carbonCredit?.id}`)}
                  />
                </div>
              </div>
            </div>
            {/* Ratings Breakdown */}
            <div className="mt-7">
              <h5 className="text-lg font-bold text-white mb-4 pl-3">Ratings Breakdown</h5>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-transparent-grey rounded flex flex-col justify-center items-center p-4">
                  <p className="text-xl font-bold text-white">Carbon Rating</p>
                  <p className="text-xl font-bold text-white">{carbonCredit?.carbon_rating}</p>
                </div>
                <div className="bg-transparent-grey rounded flex flex-col justify-center items-center p-4">
                  <p className="text-xl font-bold text-white">Co-benefit</p>
                  <p className="text-xl font-bold text-white">{carbonCredit?.co_benefit}/5</p>
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
          <Link
            to={'/'}
            className="xl:w-[245px] w-[200px] h-9.5 bg-navy-blue border-t border-r border-b border-[#A0ADB7] rounded-tr-[10px] rounded-br-[10px] flex items-center justify-center gap-4 mt-5.2 mb-1"
          >
            <img src="/images/products-page/back-icon.svg" alt="sacurn" width={23} height={16} />
            <p className="font-normal text-base text-white">Back</p>
          </Link>
        </div>
      </div>
      {/* Second Col */}
      <div className="w-[62%]">
        <LayoutSwitch />
        <div>
          <div className="">
            <div className="flex items-start gap-2 pr-8 mt-5 min-h-[90px]">
              <h1 className="text-[32px] flex-1 font-semibold text-white pl-[17px]">{carbonCredit?.name}</h1>
              {idInWishlist > 0 ? (
                <img
                  src="/images/products/green/favourited-yellow.svg"
                  alt="sacurn"
                  onClick={() => {
                    deleteWishList(+idInWishlist);
                  }}
                  width={65}
                  height={58}
                  className="cursor-pointer"
                />
              ) : (
                <img
                  src="/images/products/green/start-gold.svg"
                  alt="sacurn"
                  width={65}
                  height={58}
                  onClick={() => {
                    param.id && addToWhishList(+param?.id);
                  }}
                  className="cursor-pointer"
                />
              )}
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
                        'flex justify-center items-center rounded-full h-full py-2 text-xl font-bold tracking-[0.6px]',
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
                        'flex justify-center items-center rounded-full h-full py-2 text-xl font-bold tracking-[0.6px]',
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
                      Carbon Impact & Performance
                    </a>
                  </li>
                  <li
                    className={classNames('inline-block w-1/2 h-full text-center rounded-full', {
                      'bg-white': openTab === Tabs.Cobenefit_Impact
                    })}
                  >
                    <a
                      className={classNames(
                        'flex justify-center items-center rounded-full h-full py-2 text-xl font-bold tracking-[0.6px]',
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
                <div className="bg-transparent-black p-4 pb-2 overflow-hidden rounded-[5px] h-[100%] 3xl:max-h-[820px]">
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
    <div className="relative h-[306px]">
      <div className="absolute z-20 left-0 bottom-6 right-0 gap-1.5 flex items-center pr-[30%] pl-6">
        <img src="/images/products/location-icon.svg" alt="location" className="w-[12px] h-[19px] object-contain" />
        <span className="text-white text-base font-bold">{location}</span>
      </div>
      <div className="absolute z-20 left-0 bottom-4 right-0 gap-1.5 flex pr-[30%] pl-6">
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
          <div key={index} className="product-clip-path w-full h-[306px] bg-card-bg">
            <img className="w-full h-full object-cover" src={image} alt="sacurn" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
