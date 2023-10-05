import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classNames from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';

import { Order } from '@/libs/api';
import { useCartStore } from '@/store/cart';
import { useCompanyStore } from '@/store/company';
import { usePriceListStore } from '@/store/priceList';
import { MIN_CART_QTY } from '@/util/constants';

import Navbar from '../components/Navbar';

const OrderItem = ({ order }: { order: Order }) => {
  const company = useCompanyStore((state) => state.company);
  const addToCart = useCartStore((state) => state.addToCart);
  const [qty, setQty] = useState(order.min_order_quantity || MIN_CART_QTY);

  const isMyOrder = order.company && company.id && order.company === company.id ? true : false;

  const onQuantityAdjust = useCallback(
    (value: number) => {
      if (isMyOrder) return;
      const newQty = qty + value;
      const minQty = order.min_order_quantity || MIN_CART_QTY;
      if (newQty >= minQty && newQty <= parseInt(order.remaining_quantity)) {
        setQty(newQty);
      }
    },
    [qty]
  );

  return (
    <tr key={order.id} className=" border-b dark:bg-gray-800 dark:border-gray-700 text-white text-lg 2xl:text-2xl">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {order.price}
      </th>
      <td className="px-6 py-4 whitespace-nowrap text-center">{order.company_code}</td>
      <td className="px-6 py-4 whitespace-nowrap text-center">{order.remaining_quantity} 噸</td>
      <td className="px-6 py-4 whitespace-nowrap text-center">{order.min_order_quantity} 噸</td>
      <td className="px-6 py-4 items-center whitespace-nowrap">
        <div className="flex justify-center items-center gap-1.5">
          <button
            onClick={() => onQuantityAdjust(-1)}
            className="w-7 h-7 rounded-full hover:bg-[#ffffff53] border-2 border-white"
          >
            <img src="/images/products-page/ic_minus.svg" className="mx-auto" alt="arrow-down" width={13} height={2} />
          </button>
          <input
            className="w-19 h-10 rounded-lg text-2xl bg-transparent text-pale-yellow font-normal text-center border-2 border-[#CBCBCB]"
            type="number"
            value={qty}
            readOnly
          />
          <button
            onClick={() => onQuantityAdjust(+1)}
            className="w-7 h-7 rounded-full hover:bg-[#ffffff53] border-2 border-white"
          >
            <img src="/images/products-page/ic_plus.svg" className="mx-auto" alt="arrow-down" width={13} height={13} />
          </button>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex justify-center">
          <img
            src="/images/products-page/ic_add_to_cart.svg"
            alt="arrow-down"
            width={50}
            height={42}
            className="cursor-pointer"
            style={{
              filter: order.company && company.id && order.company === company.id ? 'brightness(0.2)' : 'none'
            }}
            onClick={() => {
              const isMyOrder = order.company && company.id && order.company === company.id ? true : false;
              if (isMyOrder) return;
              addToCart({
                order: order.id,
                quantity: qty
              });
            }}
          />
        </div>
      </td>
    </tr>
  );
};

const ProductDetailList = () => {
  const priceList = usePriceListStore((state) => state.priceList);

  return (
    <div className="w-full mt-8 pl-4 relative">
      <h1 className="text-[44px] font-semibold leading-10 text-white">CarbonCure Concrete Mineralization</h1>
      <div className="flex justify-between w-full mb-6">
        <h3 className="text-[26px] leading-9 text-[#ffffffcc]">Project developed by CarbonCure Technologies</h3>
        <p className="text-xl font-light text-white">
          Sort: Low to High
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
      {/* <div className="w-full">
        <div className="flex justify-between w-full py-2.5 border-b-2 border-white text-white">
          <p className="text-[18px] leading-9 font-normal text-left ml-3 w-1/6">價格</p>
          <p className="text-[18px] leading-9 font-normal text-left w-1/6">會員編號</p>
          <p className="text-[18px] leading-9 font-normal text-center w-1/6">可用數量</p>
          <p className="text-[18px] leading-9 font-normal text-center w-1/6">最小單位</p>
          <p className="text-[18px] leading-9 font-normal text-center w-1/6">訂購數量</p>
          <p className="text-[18px] leading-9 font-normal text-right mr-3 w-1/6">加入購物車</p>
        </div>
        <div className="overflow-x-auto max-w-[100%]">
          <div className="max-h-[65vh] overflow-scroll yellowScrollNoBg min-w-[700px]">
            {priceList?.map((item) => <Item order={item} key={item.id} />)}
          </div>
        </div>
      </div> */}

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-white text-lg 2xl:text-xl">
            <tr>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                單價
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                會員編號
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                可交易數量
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                交易最小單位
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                訂購數量
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                加入購物車
              </th>
            </tr>
          </thead>
          <tbody>{priceList?.map((item) => <OrderItem order={item} key={item.id} />)}</tbody>
        </table>
      </div>
    </div>
  );
};

function ProductDetail() {
  const { carbonId } = useParams();

  const getPriceList = usePriceListStore((state) => state.getPriceList);

  useEffect(() => {
    getPriceList({
      carbonCreditId: carbonId?.toString()
    });
  }, []);

  return (
    <div className="w-screen relative bg-no-repeat bg-cover bg-[url('../public/images/products-page/cover.png')] h-screen overflow-hidden">
      <Navbar className="pt-4 relative z-30" />
      <div className="h-full flex flex-row justify-start">
        <div className="2xl:w-[620px] w-[500px] h-auto">
          <div className="2xl:w-[650px] w-[520px] absolute top-0 left-0 overflow-hidden">
            <ImgSlider />
          </div>
        </div>
        <div className="flex-1 pr-5 overflow-scroll xl:overflow-hidden">
          <div className="flex flex-col max-h-[973px] items-end mr-9.5 relative z-50 flex-1 w-full">
            <ProductDetailList />
          </div>
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
              '': currentSlide !== index
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
