import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, SxProps } from '@mui/material';
import classNames from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';

import { Order } from '@/libs/api';
import { useCartStore } from '@/store/cart';
import { useCompanyStore } from '@/store/company';
import { usePriceListStore } from '@/store/priceList';
import { FilledRadio, UnFilledRadio } from '@/svg';
import { MIN_CART_QTY } from '@/util/constants';
import { formatNumberByComma } from '@/util/helper';

import Navbar from '../components/Navbar';

interface ProductDetailProps {
  isSort: boolean;
  sortOption: 'asc' | 'desc';
  setSortOption: (isOption: 'asc' | 'desc') => void;
  setIsSort: (isSort: boolean) => void;
}

const ProductDetailList = ({ isSort, sortOption, setSortOption, setIsSort }: ProductDetailProps) => {
  const priceList = usePriceListStore((state) => state.priceList);

  return (
    <div className="w-full mt-13.7 pl-7 relative">
      <h1 className="text-[44px] font-semibold leading-10 text-white">{priceList[0] && priceList[0].carbon_name}</h1>
      <h3 className="text-[26px] leading-9 text-[#ffffffcc]">{priceList[0] && priceList[0].carbon_about}</h3>
      <div className="flex justify-end">
        <ClickAwayListener onClickAway={() => setIsSort(false)}>
          <div>
            <p
              className="whitespace-nowrap text-[17px] tracking-[0.51px] leading-normal font-normal text-white cursor-pointer"
              onClick={() => setIsSort(!isSort)}
            >
              Sort: Low to High
              {isSort ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </p>
            <div>
              {isSort ? (
                <Box sx={styles}>
                  <div className="p-2">
                    <h6 className="text-dark-grey text-[17px] tracking-[0.51px] font-bold mb-4">Price</h6>
                    <div
                      onClick={() => {
                        setSortOption('asc');
                        setIsSort(false);
                      }}
                      className="flex cursor-pointer justify-between items-center mb-4"
                    >
                      <span className="text-dark-grey text-[17px] tracking-[0.51px] font-normal">Low to High</span>
                      {sortOption === 'asc' ? <FilledRadio /> : <UnFilledRadio />}
                    </div>
                    <div
                      onClick={() => {
                        setSortOption('desc');
                        setIsSort(false);
                      }}
                      className="flex cursor-pointer justify-between items-center"
                    >
                      <span className="text-dark-grey text-[17px] tracking-[0.51px] font-normal">High to Low</span>
                      {sortOption === 'desc' ? <FilledRadio /> : <UnFilledRadio />}
                    </div>
                  </div>
                </Box>
              ) : null}
            </div>
          </div>
        </ClickAwayListener>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-white border-b-2 border-light-grey">
            <tr>
              <th scope="col" className="px-6 py-3 whitespace-nowrap text-lg font-normal tracking-[0.51px]">
                單價
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap text-center text-lg font-normal tracking-[0.51px]">
                會員代號
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap text-center text-lg font-normal tracking-[0.51px]">
                可交易數量
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap text-center text-lg font-normal tracking-[0.51px]">
                交易最小單位
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap text-center text-lg font-normal tracking-[0.51px]">
                訂購數量
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap text-center text-lg font-normal tracking-[0.51px]">
                加入購物車
              </th>
            </tr>
          </thead>
          <tbody>{priceList?.map((item) => <PriceListItem key={item.id} item={item} />)}</tbody>
        </table>
      </div>
    </div>
  );
};

const PriceListItem = ({ item }: { item: Order }) => {
  const [qty, setQty] = useState(item.min_order_quantity || MIN_CART_QTY);
  const addToCart = useCartStore((state) => state.addToCart);
  const company = useCompanyStore((state) => state.company);

  const onQuantityAdjust = useCallback(
    (value: number, item: Order) => {
      const newQty = qty + value;
      const minQty = item.min_order_quantity || MIN_CART_QTY;
      if (newQty >= minQty && newQty <= parseInt(item.remaining_quantity)) {
        setQty(newQty);
      }
    },
    [qty]
  );

  return (
    <tr className=" border-b-[2px] border-white-smoke-2 dark:bg-gray-800 dark:border-gray-700 text-white text-lg 2xl:text-2xl">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        ${formatNumberByComma(item.price || '')}
      </th>
      <td className="px-6 py-4 whitespace-nowrap text-center">{item.company_code}</td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        {formatNumberByComma(item.remaining_quantity || '')} 噸
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        {formatNumberByComma(item.min_order_quantity || '')} 噸
      </td>
      <td className="px-6 py-4 items-center whitespace-nowrap">
        <div className="flex justify-center items-center gap-1.5">
          <button
            onClick={() => onQuantityAdjust(-1, item)}
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
            onClick={() => onQuantityAdjust(+1, item)}
            className="w-7 h-7 rounded-full hover:bg-[#ffffff53] border-2 border-white"
          >
            <img src="/images/products-page/ic_plus.svg" className="mx-auto" alt="arrow-down" width={13} height={13} />
          </button>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex justify-center">
          <img
            src="/images/products-page/cart01.svg"
            alt="arrow-down"
            width={50}
            height={42}
            className="cursor-pointer"
            style={{
              filter: item.company && company.id && item.company === company.id ? '' : 'none'
            }}
            onClick={() => {
              const isMyOrder = item.company && company.id && item.company === company.id ? true : false;

              if (isMyOrder) return;
              addToCart({
                order: item.id,
                quantity: qty
              });
            }}
          />
        </div>
      </td>
    </tr>
  );
};

function ProductDetail() {
  const { carbonId } = useParams();

  const getPriceList = usePriceListStore((state) => state.getPriceList);
  const [isSort, setIsSort] = useState(false);
  const [sortOption, setSortOption] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    getPriceList({
      carbonCreditId: carbonId?.toString(),
      desc: sortOption === 'desc' ? 'true' : 'false'
    });
  }, [sortOption]);

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
            <ProductDetailList
              isSort={isSort}
              sortOption={sortOption}
              setSortOption={(v) => {
                setSortOption(v);
              }}
              setIsSort={(v) => {
                setIsSort(v);
              }}
            />
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

const styles: SxProps = {
  position: 'absolute',
  top: 108,
  right: 0,
  zIndex: 1,
  p: 1,
  border: '2px solid #DFDFDF',
  bgcolor: 'background.paper',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  color: 'black',
  width: '205px',
  borderRadius: '5px'
};
