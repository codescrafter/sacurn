import classNames from 'classnames';
import React, { FC } from 'react';

import Navbar from '../components/Navbar';
import { CartItemTypes, SelectedCartItemTypes } from '../type';
import { CART_ITEMS, SELECTED_CART_ITEMS } from '../util/constants';

interface HeadingIProps {
  children: React.ReactNode;
}

const Cart = () => {
  return (
    <div className="bg-neutral-150 h-screen overflow-hidden">
      <Navbar className="pt-7 pb-2.5 !bg-navy-blue" />
      <div className="flex justify-between my-4 pl-13 pr-10">
        <div className="flex">
          <button className="w-[202px] h-[46px] rounded-[3px] py-1 flex items-center justify-center border border-navy-blue text-navy-blue text-xl">
            <img src="/images/cart/ic_back.svg" width={16} height={14} className="mr-2.5" alt="sacurn" />
            繼續購物
          </button>
          <div className="ml-4">
            <p className="text-[28px] font-normal text-navy-blue">| 購物車</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-2xl font-normal text-black mr-3">全部刪除</p>
          <img src="/images/cart/ic_delete.svg" width={28} height={34} alt="sacurn" />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[65%] max-h-[85vh] px-4 pb-4 ml-7 overflow-scroll flex flex-col gap-5.5 yellowScrollNoBg scroll-left">
          {CART_ITEMS?.map((item: CartItemTypes, index) => <CartItem key={index} {...item} />)}
        </div>
        <div className="2xl:h-[82vh] h-[78vh] flex-1 mr-7 rounded-[10px] shadow-cart-item py-6">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between pr-6.7">
              <Heading>商品共計</Heading>
              <p className="2xl:text-lg text-base text-black font-medium">NT$ {120000}</p>
            </div>
            <div className="px-6.7 mt-2.5 ">
              <p className="text-grey 2xl:text-sm text-xs">3項(以下含稅金5%及手續費)</p>
              <div className="2xl:mt-5.2 mt-3">
                {SELECTED_CART_ITEMS?.map((item: SelectedCartItemTypes) => {
                  return (
                    <div className="flex flex-row justify-between text-grey 2xl:mb-5 mb-3">
                      <p className="w-[70%] text-grey 2xl:text-lg text-sm">{item.name}</p>
                      <p className="text-grey 2xl:text-lg text-sm">{item.quantity} 噸</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-row justify-between 2xl:mb-5 mb-3">
                <p className="text-grey 2xl:text-lg text-base">手續費</p>
                <p className="text-grey 2xl:text-lg text-base">${120000}</p>
              </div>
              <div className="flex flex-row justify-between 2xl:mb-6.2 mb-3">
                <p className="text-grey 2xl:text-lg text-base">稅金5%</p>
                <p className="text-grey 2xl:text-lg text-base">${619000}</p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="2xl:text-lg text-base font-semibold text-black">總付款金額</p>
                <p className="2xl:text-lg text-base text-bright-red font-semibold">NT$ {12000000}</p>
              </div>
            </div>
            <hr className="border-silverstone 2xl:mt-13.2 mt-4 2xl:mb-6 mb-4" />
            <Heading>優惠折扣</Heading>
            <button className="border-navy-blue ml-6.7 2xl:mt-5 mt-3 flex flex-row rounded-lg border-solid border 2xl:px-5 px-4 2xl:py-3 py-2 max-w-max 2xl:mb-8 mb-5">
              <img src="/images/cart/promocode.svg" width={25} height={25} alt="sacurn" />
              <p className="text-navy-blue 2xl:text-base text-sm pl-3">使用優惠碼</p>
            </button>
            <Heading>服務條款</Heading>
            <p className="ml-6.7 text-grey 2xl:text-base text-sm 2xl:mt-6 mt-2">
              我瞭解並同意Sacurn服務條款與隱私權政策
            </p>
            <hr className="border-silverstone 2xl:mt-8 mt-4 2xl:mb-5 mb-3" />
            <p className="2xl:text-base text-xms text-black self-center mb-1">
              點擊「前往付款」，訂單及送出，請於下一步選擇付款方式
            </p>
            <button className="bg-navy-blue w-[80%] py-2 self-center rounded-md 2xl:text-base text-sm text-white">
              前往付款
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

const CartItem: FC<CartItemTypes> = ({ img, memberCode, heading, price, left, total }) => {
  const [rowSelected, setRowSelected] = React.useState(false);
  return (
    <div
      className={classNames('flex items-center py-4.5 border-2 rounded-[10px] direction-ltr shadow-cart-item', {
        'border-bright-blue bg-slight-blue': rowSelected,
        'border-white bg-white': !rowSelected
      })}
      onClick={() => setRowSelected((s) => !s)}
    >
      <div className="flex items-center">
        <div className="ml-7.5 mr-4">
          {rowSelected ? (
            <img src="/images/cart/ic_check.svg" width={29} height={29} alt="sacurn" />
          ) : (
            <img src="/images/cart/ic_uncheck.svg" width={29} height={29} alt="sacurn" />
          )}
        </div>
        <img src={img} width={114} height={114} className="object-cover" alt="sacurn" />
        <div className="ml-6 flex flex-col justify-between h-full">
          <p className="text-[10.6px] font-medium text-black">{memberCode}</p>
          <p
            className={classNames('font-bold text-xl leading-[18px] w-[316px] mr-3 mt-3 mb-3', {
              'text-bright-blue': rowSelected,
              'text-black': !rowSelected
            })}
          >
            {heading}
          </p>
          <p className="text-lg font-bold text-black">{price}</p>
        </div>
      </div>
      <div className="flex flex-1 justify-between">
        <p className="text-[15px] font-medium text-black leading-9">{left}</p>
        <div className="flex items-center gap-1.2" onClick={(e) => e.stopPropagation()}>
          <button className="w-6 h-6 rounded-full border border-[#B3B4B4] text-black text-xl flex items-center justify-center">
            -
          </button>
          <input
            className="w-17 h-9 rounded-md border border-[#B3B4B4] bg-transparent text-right pr-3.5 text-bright-blue text-2xl font-medium flex items-center justify-center"
            type="text"
            value="1"
          />
          <button className="w-6 h-6 rounded-full border border-[#B3B4B4] text-black text-xl flex items-center justify-center">
            +
          </button>
        </div>
        <div className="">
          <p className="text-xl font-bold text-black">{total}</p>
        </div>
        <div className="">
          <img src="/images/cart/ic_delete.svg" className="mr-7" width={23} height={27} alt="sacurn" />
        </div>
      </div>
    </div>
  );
};

const Heading: FC<HeadingIProps> = ({ children }) => {
  return (
    <div className="border-l-8  border-l-pale-yellow pl-5 text-black 2xl:text-lg text-base font-semibold">
      {children}
    </div>
  );
};
