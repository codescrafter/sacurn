import classNames from 'classnames';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import { ExtendedCart as CartItemType } from '@/libs/api';
import { useCartStore } from '@/store/cart';
import { ModalType, useModalStore } from '@/store/modal';
import { CardRenewalEnum, OrderStatus } from '@/type';
import { MIN_CART_QTY } from '@/util/constants';

interface HeadingIProps {
  children: React.ReactNode;
}

const CartV2 = () => {
  const navigate = useNavigate();
  // const open = useModalStore((store) => store.open);
  // const [isChecked, setIsChecked] = useState(true);
  // const [error, setError] = useState(false);

  return (
    <div className="bg-neutral-150 h-screen overflow-hidden">
      <Navbar className="pt-7 pb-2.5 !bg-navy-blue" />
      <div className="flex justify-between my-4 px-13">
        <div className="flex">
          <Link to="/">
            <button className="w-[202px] h-[46px] rounded-[3px] py-1 flex items-center justify-center border border-navy-blue text-navy-blue text-xl">
              <img src="/images/cart/ic_back.svg" width={16} height={14} className="mr-2.5" alt="sacurn" />
              繼續購物
            </button>
          </Link>
          <div className="ml-4">
            <p className="text-[28px] font-normal text-navy-blue">| 購物車</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1 px-2 pt-1.5 pb-1 shadow-sm bg-white rounded-[10px] cursor-pointer">
            <span className="text-xl font-bold">全選</span>
            <input type="radio" className="ml-2.5 w-5 h-5 mt-0.5" />
          </div>
          <div className="flex gap-3 px-2 pt-1.5 pb-1 shadow-sm bg-white rounded-[10px]">
            <span className="text-xl font-bold">刪除選取</span>
            <img src="/images/cart/ic_delete.svg" width={22} height={27} alt="sacurn" />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[65%] max-h-[85vh] px-4 pb-4 ml-7 overflow-auto flex flex-col gap-5.5 yellowScrollNoBg scroll-left">
          {cartList.map((item) => (
            <CartItem
              key={item.id}
              onSelectedChange={() => {
                // updateCartItemSelected(item.id, index, selected);
              }}
              {...item}
            />
          ))}
        </div>

        <div className="2xl:h-[82vh] h-[78vh] flex-1 mr-7 rounded-[10px] shadow-cart-item py-6">
          <div>
            <div className="flex flex-row justify-between pr-6.7">
              <Heading>商品共計</Heading>
              <p className="2xl:text-lg text-base text-black font-bold font-istok-web">
                NT$ {cartDetail?.total_amount}
              </p>
            </div>
            <div className="px-6.7 mt-2.5 ">
              <p className="text-grey 2xl:text-sm text-xs font-bold font-istok-web">
                {cartDetail && cartDetail.product_list?.length}項(以下含稅金{5}%及手續費)
              </p>
              <div className="2xl:mt-5.2 mt-3">
                {cartDetail &&
                  cartDetail.product_list?.map((product) => {
                    return (
                      <div key={product.name} className="flex flex-row justify-between text-grey 2xl:mb-5 mb-3">
                        <p className="w-[70%] text-grey 2xl:text-lg font-bold font-istok-web">{product.name}</p>
                        <p className="text-grey 2xl:text-xl text-base font-bold font-istok-web">$ {product.amount}</p>
                      </div>
                    );
                  })}
              </div>
              <div className="flex flex-row justify-between 2xl:mb-5 mb-3">
                <p className="text-grey 2xl:text-lg text-base font-bold font-istok-web">手續費</p>
                <p className="text-grey 2xl:text-lg text-base font-bold font-istok-web">$ {cartDetail?.cost}</p>
              </div>
              <div className="flex flex-row justify-between 2xl:mb-6.2 mb-3">
                <p className="text-grey 2xl:text-lg text-base font-bold font-istok-web">稅金{5}%</p>
                <p className="text-grey 2xl:text-lg text-base font-bold font-istok-web">${cartDetail?.tax}</p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="2xl:text-lg text-base font-bold text-black">總付款金額</p>
                <p className="2xl:text-xl text-base text-bright-red font-bold">NT$ {cartDetail?.total_amount}</p>
              </div>
            </div>
            <hr className="border-silverstone 2xl:mt-13.2 mt-4 2xl:mb-6 mb-4" />
            <Heading>優惠折扣</Heading>
            <button className="border-navy-blue ml-6.7 2xl:mt-5 mt-3 flex flex-row rounded-lg border-solid border 2xl:px-5 px-4 2xl:py-3 py-2 max-w-max 2xl:mb-8 mb-5">
              {/* <img src="/images/cart/promocode.svg" width={25} height={25} alt="sacurn" /> */}
              <p className="text-navy-blue 2xl:text-base text-sm pl-3">使用優惠碼</p>
            </button>
            <Heading>服務條款</Heading>
            <p className="ml-7 text-base text-grey">
              我瞭解並同意Sacurn
              <span className="hover:underline">服務條款</span>與<span className="hover:underline">隱私權政策</span>
            </p>

            <hr className="border-silverstone 2xl:mt-8 mt-4 2xl:mb-5 mb-3" />
            <div className="flex flex-col items-center justify-end h-[20vh]">
              <p className="2xl:text-base text-xms text-black self-center mb-1 font-istok-web">
                點擊「前往付款」，訂單及送出，請於下一步選擇付款方式
              </p>
              <button
                onClick={() => {
                  navigate('/v2/card-renewal', { state: { step: CardRenewalEnum.COMPLETE_RENEWAL } });
                  // open(ModalType.CheckOutConfirm, {
                  //   buttons: [
                  //     {
                  //       text: '返回商品列表',
                  //       isOutline: true
                  //     },
                  //     {
                  //       text: '確認結帳',
                  //       onClick: () => {
                  //         navigate('/v2/card-renewal');
                  //       }
                  //     }
                  //   ]
                  // });
                }}
                className={classNames(
                  'w-[80%] py-2 self-center rounded-md 2xl:text-base text-sm text-white bg-navy-blue'
                )}
              >
                前往付款
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartV2;

interface CartItemIProps extends CartItemType {
  selected: boolean;
  onSelectedChange: (selected: boolean) => void;
}

const CartItem = (props: CartItemIProps) => {
  const { selected, id, name, image, remaining_quantity, order, order_deleted, onSelectedChange } = props;

  const [qty, setQty] = useState(props.quantity || MIN_CART_QTY);

  const updateCartItemQty = useCartStore((store) => store.updateCartItemQty);
  const deleteCartItem = useCartStore((store) => store.deleteCartItem);
  const open = useModalStore((store) => store.open);

  const price = props.price || 0;

  const onDeleteCartItem = useCallback(() => {
    open(ModalType.DeleteCartItem, {
      buttons: [
        { text: '取消', isOutline: true },
        { text: '確定', onClick: () => deleteCartItem(id) }
      ]
    });
  }, [id]);

  const isOffShelve = useMemo(() => order_deleted === OrderStatus.OffShelve, []);

  const onQuantityAdjust = useCallback(
    (value: number) => {
      if (isOffShelve) return;
      const newQty = qty + value;
      if (newQty >= MIN_CART_QTY && newQty <= parseInt(remaining_quantity)) {
        setQty(newQty);
        updateCartItemQty(id, {
          quantity: newQty,
          order
        });
      }
    },
    [qty]
  );

  return (
    <div
      className={classNames(
        'flex items-center justify-between py-4.5 border-2 rounded-[10px] direction-ltr shadow-cart-item',
        {
          'border-bright-blue bg-slight-blue': selected,
          'border-white bg-white': !selected
        }
      )}
      onClick={() => {
        if (isOffShelve) return;
        onSelectedChange(!selected);
      }}
    >
      <div className="flex items-center gap-5">
        <div className="ml-7.5">
          {selected ? (
            <img src="/images/cart/ic_check.svg" width={29} height={29} alt="sacurn" />
          ) : (
            <img src="/images/cart/ic_uncheck.svg" width={29} height={29} alt="sacurn" />
          )}
        </div>
        <img src={image} width={114} height={114} className="object-cover" alt="sacurn" />
        <p
          className={classNames('font-bold text-xl leading-[18px] mr-3 mt-3 mb-3', {
            'text-bright-blue': selected,
            'text-black': !selected
          })}
        >
          {name}
        </p>
      </div>

      <div className="flex justify-between items-center gap-6">
        <div className="flex items-center gap-1.2" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => onQuantityAdjust(-1)}
            className="w-6 h-6 rounded-full border border-[#B3B4B4] text-black text-xl flex items-center justify-center pb-[3px]"
          >
            -
          </button>
          <input
            className="w-17 h-9 rounded-md border border-[#B3B4B4] bg-transparent text-right pr-3.5 text-bright-blue text-2xl flex items-center justify-center text-[24px] font-bold font-istok-web"
            type="number"
            value={qty}
            disabled
          />
          <button
            onClick={() => onQuantityAdjust(+1)}
            className="w-6 h-6 rounded-full border border-[#B3B4B4] text-black text-xl flex items-center justify-center pb-[3px]"
          >
            +
          </button>
        </div>
        <div className="flex items-center">
          <p className="text-xl font-bold text-black whitespace-nowrap min-w-[100px]">${qty * price}</p>
        </div>
        <button className="mr-7">
          <img
            src="/images/cart/ic_delete.svg"
            width={23}
            height={27}
            className="w-6 h-7"
            alt="sacurn"
            onClick={onDeleteCartItem}
          />
        </button>
      </div>
    </div>
  );
};

const Heading: FC<HeadingIProps> = ({ children }) => {
  return (
    <div className="border-l-8  border-l-pale-yellow pl-5 text-black 2xl:text-lg text-base font-bold">{children}</div>
  );
};

const cartDetail = {
  total_amount: 2000,
  cost: 0,
  tax: 0,
  product_list: [
    {
      id: '1',
      name: 'ECOGREEN CARD補發',
      amount: 2000
    }
  ]
};

// selected, id, name, image, remaining_quantity, order, order_deleted, company_code,

const cartList = [
  {
    id: 1,
    name: 'ECOGREEN CARD 補發',
    image: '/v2/cart/cart-card.svg',
    remaining_quantity: '100',
    order: 1,
    order_deleted: 0,
    company_code: '123456',
    price: 2000,
    quantity: 1,
    selected: true,
    carbon_tag: 'A',
    created_at: '2021-10-10'
  }
];
