import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classNames from 'classnames';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

import Navbar from '../components/Navbar';
import { ProductDetailTypes } from '../type';
import { PRODUCT_DETAILS } from '../util/constants';
import AddedToCartModal from './AddedToCartModal';

const ProductDetailList = () => {
  const [openCartSuccessModal, setOpenCartSuccessModal] = useState<boolean>(false);
  return (
    <div className="w-full mt-8 pl-4 relative">
      <h1 className="text-[44px] font-semibold leading-10">CarbonCure Concrete Mineralization</h1>
      <div className="flex justify-between w-full mb-6">
        <h3 className="text-[26px] leading-9">Project developed by CarbonCure Technologies</h3>
        <p className="text-xl font-light">
          價格由低至高排列
          <img
            src="/images/products-page/ic_arrow_down.svg"
            alt="arrow-down"
            width={30}
            height={30}
            className="inline-block ml-2.5 w-7.5 h-7.5"
          />
        </p>
      </div>
      {/* table */}
      <div className="w-full">
        <div className="flex justify-between w-full py-2.5 border-b-2 border-white">
          <p className="text-[18px] leading-9 font-normal text-left ml-3 w-1/6">價格</p>
          <p className="text-[18px] leading-9 font-normal text-left w-1/6">會員編號</p>
          <p className="text-[18px] leading-9 font-normal text-center w-1/6">可用數量</p>
          <p className="text-[18px] leading-9 font-normal text-center w-1/6">最小單位</p>
          <p className="text-[18px] leading-9 font-normal text-center w-1/6">訂購數量</p>
          <p className="text-[18px] leading-9 font-normal text-right mr-3 w-1/6">加入購物車</p>
        </div>
        {/* table body  */}
        <div className="max-h-[65vh] overflow-scroll yellowScrollNoBg">
          {PRODUCT_DETAILS?.map((item: ProductDetailTypes) => (
            <div
              key={item.memberCode}
              className="flex justify-between w-full py-6.2 border-b-2 border-opacity-30 border-white"
            >
              <p className="text-2xl leading-9 font-medium text-left ml-3 w-1/6">${item.price}</p>
              <p className="text-2xl leading-9 font-normal text-left w-1/6">{item.memberCode}</p>
              <div className="w-1/6 flex justify-center">
                <p className="text-2xl leading-9 font-normal text-right">{item.availableQuantity} 噸</p>
              </div>
              <div className="w-1/6 flex justify-end">
                <p className="text-2xl leading-9 font-normal text-right mr-10">{item.minimumUnit} 噸</p>
              </div>
              {/* + input - */}
              <div className="w-1/6 flex justify-end ml-5">
                <div className="flex justify-center gap-1.2 items-center">
                  <button className="w-7 h-7 rounded-full hover:bg-[#ffffff53] border-2 border-white">
                    <img
                      src="/images/products-page/ic_minus.svg"
                      className="mx-auto"
                      alt="arrow-down"
                      width={13}
                      height={2}
                    />
                  </button>
                  <input
                    className="w-19 h-10 rounded-lg text-2xl bg-transparent text-pale-yellow font-normal text-center border-2 border-[#CBCBCB]"
                    type="text"
                    value="0"
                  />
                  <button className="w-7 h-7 rounded-full hover:bg-[#ffffff53] border-2 border-white">
                    <img
                      src="/images/products-page/ic_plus.svg"
                      className="mx-auto"
                      alt="arrow-down"
                      width={13}
                      height={13}
                    />
                  </button>
                </div>
              </div>
              <div className="w-1/6 flex justify-end mr-7">
                <img
                  src="/images/products-page/ic_add_to_cart.svg"
                  alt="arrow-down"
                  width={50}
                  height={42}
                  className="cursor-pointer"
                  onClick={() => setOpenCartSuccessModal(true)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* cart success modal */}
      <AddedToCartModal open={openCartSuccessModal} setOpen={setOpenCartSuccessModal} />
    </div>
  );
};

function ProductDetail() {
  return (
    <div className="w-screen relative bg-no-repeat bg-cover bg-[url('../public/images/products-page/cover.png')] h-screen overflow-hidden">
      <Navbar className="pt-4 relative z-30" />
      <div className="h-full flex flex-row justify-start">
        <div className="2xl:w-[620px] w-[500px] h-auto">
          <div className="2xl:w-[650px] w-[520px] absolute top-0 left-0 overflow-hidden">
            <ImgSlider />
          </div>
        </div>
        <div className="flex flex-col max-h-[973px] items-end mr-9.5 relative z-50 flex-1">
          <ProductDetailList />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

const ImgSlider = () => {
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
        <img className="w-full h-screen" src="/images/products-page/ocean.png" alt="sacurn" />
        <img className="w-full h-screen" src="/images/products-page/forest.png" alt="sacurn" />
        {/* <Image className="w-full h-screen" src={oceanImg} /> */}
      </Slider>
    </div>
  );
};
