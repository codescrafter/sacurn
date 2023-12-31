import classNames from 'classnames';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ExtendedCart as CartItemType } from '@/libs/api';
import { useCartStore } from '@/store/cart';
import { ModalType, useModalStore } from '@/store/modal';
import { DeleteCart, MinusRounded, PlusRounded } from '@/svg';
import { OrderStatus } from '@/type';
import { MIN_CART_QTY } from '@/util/constants';
import { formatNumberByComma } from '@/util/helper';
import isValidNumber from '@/util/isValidNumber';

import Navbar from '../components/Navbar';

interface HeadingIProps {
  children: React.ReactNode;
}

const TAX_PERCENTAGE = 0.05;

const Cart = () => {
  const navigate = useNavigate();
  const cartList = useCartStore((store) => store.cartList);
  const getCartList = useCartStore((store) => store.getCartList);
  const cartDetail = useCartStore((store) => store.cartDetail);
  const updateCartItemSelected = useCartStore((store) => store.updateCartItemSelected);
  const isSelectedAll = useCartStore((store) => store.isSelectedAll);
  const setAllCartItemSelect = useCartStore((store) => store.setAllCartItemSelect);
  const deleteSelectedCartItem = useCartStore((store) => store.deleteSelectedCartItem);
  const checkPassMinOrderThreshold = useCartStore((store) => store.checkPassMinOrderThreshold);
  const open = useModalStore((store) => store.open);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCartList();
  }, []);

  const taxPercentage = useMemo(() => {
    return (cartDetail?.tax_ratio || TAX_PERCENTAGE) * 100;
  }, []);

  return (
    <div className="bg-neutral-150 h-screen overflow-hidden">
      <Navbar className="pt-7 pb-2.5 !bg-navy-blue" />
      <div className="flex justify-between my-4 pl-13 w-[65%]">
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
            <input
              type="radio"
              className="ml-2.5 w-5 h-5 mt-0.5"
              checked={isSelectedAll()}
              onClick={() => {
                setAllCartItemSelect(!isSelectedAll());
              }}
            />
          </div>
          <div
            className="flex gap-1 px-2 pt-1.5 pb-1 shadow-sm bg-white rounded-[10px] cursor-pointer"
            onClick={deleteSelectedCartItem}
          >
            <span className="text-xl font-bold">刪除選取</span>
            <img src="/images/cart/ic_delete.svg" width={22} height={27} alt="sacurn" />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div
          className={classNames(
            'w-[65%] max-h-[85vh] px-4 pb-4 ml-7 overflow-auto flex flex-col gap-5.5 yellowScroll scroll-left yellowScrollHorizontal mr-4 rounded-[10px]'
            // {
            //   'w-[65%]': cartDetail,
            //   'w-full': !cartDetail
            // }
          )}
        >
          {cartList.map((item, index) => (
            <CartItem
              key={item.id}
              onSelectedChange={(selected: boolean) => {
                updateCartItemSelected(item.id, index, selected);
              }}
              {...item}
            />
          ))}
        </div>
        {cartDetail && (
          <div className=" h-[78vh] 2xl:h-[82vh] flex-1 mr-7 rounded-[10px] shadow-cart-item py-6">
            <div className="flex flex-col h-full overflow-y-auto yellowScroll">
              <div className="flex flex-row justify-between pr-6.7">
                <Heading>商品共計</Heading>
                <p className="2xl:text-lg text-base text-black font-bold font-istok-web">
                  TWD {formatNumberByComma(cartDetail?.product_amount?.toString() as string)}
                </p>
              </div>
              <div className="px-6.7 mt-2.5 ">
                <p className="text-grey 2xl:text-sm font-bold font-istok-web text-sm">
                  {cartDetail && cartDetail.product_list?.length}項(以下含稅金{taxPercentage}%及手續費)
                </p>
                <div className="2xl:mt-5.2 mt-3">
                  {cartDetail &&
                    cartDetail.product_list?.map((product) => {
                      return (
                        <div key={product.name} className="flex flex-row justify-between text-grey 2xl:mb-5 mb-3">
                          <p className="w-[70%] text-grey 2xl:text-lg text-lg font-bold font-istok-web">
                            {product.name}
                          </p>
                          <p className={classNames('text-grey 2xl:text-xl text-sm font-bold')}>
                            $ {formatNumberByComma(product.amount.toString() as string)}
                          </p>
                        </div>
                      );
                    })}
                </div>
                <div className="flex flex-row justify-between 2xl:mb-5 mb-3">
                  <p className="text-grey 2xl:text-lg text-base font-bold font-istok-web">手續費</p>
                  <p className="text-grey 2xl:text-lg text-base font-bold font-istok-web">
                    $ {formatNumberByComma(cartDetail?.cost?.toString() as string)}
                  </p>
                </div>
                <div className="flex flex-row justify-between 2xl:mb-6.2 mb-3">
                  <p className="text-grey 2xl:text-lg text-base font-bold font-istok-web">稅金{taxPercentage}%</p>
                  <p className="text-grey 2xl:text-lg text-base font-bold font-istok-web">
                    $ {formatNumberByComma(cartDetail?.tax?.toString() as string)}
                  </p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="2xl:text-lg text-base font-bold text-black">總付款金額</p>
                  <p className="2xl:text-xl text-base text-bright-red font-bold">
                    TWD {formatNumberByComma(cartDetail?.total_amount?.toString() as string)}
                  </p>
                </div>
              </div>
              <hr className="border-silverstone 2xl:mt-13.2 mt-4 2xl:mb-6 mb-4" />
              <Heading>服務條款</Heading>
              <p className="ml-6.7 2xl:text-base text-sm 2xl:mt-6 mt-2 text-navy-blue">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => {
                    setIsChecked(!isChecked);
                    if (e.target.checked) {
                      setError(false);
                    }
                  }}
                  className="text-[#F00] mr-2"
                />
                我瞭解並同意Sacurn
                <Link
                  to="/pdf/Membership_Terms_Service.pdf"
                  target="_blank"
                  download="土星_平台條款內容"
                  className="hover:underline cursor-pointer"
                >
                  服務條款
                </Link>
                與
                <Link
                  to="/pdf/Membership_Terms_Service.pdf"
                  target="_blank"
                  download="土星_平台條款內容"
                  className="hover:underline cursor-pointer"
                >
                  隱私權政策
                </Link>
              </p>
              {error && <p className="text-[#f00] text-xs ml-12">請務必確認勾選此框，才能點選「前往付款」。</p>}
              <hr className="border-silverstone 2xl:mt-8 mt-4 2xl:mb-5 mb-3" />
              <p className="2xl:text-base text-xms text-black self-center mb-1 font-istok-web">
                點擊「前往付款」，訂單及送出，請於下一步選擇付款方式
              </p>
              <button
                onClick={async () => {
                  if (!isChecked) return setError(true);

                  const isPass = await checkPassMinOrderThreshold();

                  if (isPass) {
                    open(ModalType.CheckOutConfirm, {
                      buttons: [
                        {
                          text: '返回商品列表',
                          isOutline: true
                        },
                        {
                          text: '確認結帳',
                          onClick: () => {
                            navigate('/payment-information');
                          }
                        }
                      ]
                    });
                  } else {
                    open(ModalType.NotPassMinOrderThreshold);
                  }
                }}
                className={classNames(
                  'w-[80%] py-2 self-center rounded-md 2xl:text-xl text-lg font-bold text-white mb-3',
                  {
                    ['bg-navy-blue']: isChecked,
                    ['bg-grey']: !isChecked
                  }
                )}
              >
                前往付款
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

interface CartItemIProps extends CartItemType {
  selected: boolean;
  onSelectedChange: (selected: boolean) => void;
}

const CartItem = (props: CartItemIProps) => {
  const {
    selected,
    id,
    name,
    image,
    remaining_quantity,
    order,
    order_deleted,
    company_code,
    carbon_tag,
    onSelectedChange
  } = props;

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
  const isCannotBuy = remaining_quantity === '0';

  const onQuantityAdjust = useCallback(
    (newQty: number) => {
      if (isOffShelve) return;
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
        'flex items-center justify-between py-4.5 border-2 rounded-[10px] direction-ltr shadow-cart-item min-w-[1020px] px-7',
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
      <div className="flex items-center justify-between">
        <div>
          {selected ? (
            <img src="/images/cart/ic_check.svg" width={29} height={29} alt="sacurn" />
          ) : (
            <img src="/images/cart/ic_uncheck.svg" width={29} height={29} alt="sacurn" />
          )}
        </div>
        <div className="w-[114px] h-[114px] ml-4">
          <img
            src={image}
            className={classNames('w-full h-full object-cover rounded-[10px]', {
              'border-[3.408px] border-light-green': carbon_tag === '綠碳',
              'border-[3.408px] border-light-blue': carbon_tag === '藍碳',
              'border-[3.408px] border-pale-yellow': carbon_tag === '黃碳'
            })}
            alt="sacurn"
          />
        </div>
        <div className="ml-[23px] flex flex-col justify-between h-full max-w-[316px]">
          <p className="text-[10.6px] font-bold text-dark-grey">會員代號 : {company_code}</p>
          <p
            className={classNames('font-bold text-xl leading-[18px] w-[316px] mr-3 mt-3 mb-3', {
              'text-bright-blue': selected,
              'text-black': !selected
            })}
          >
            {name}
          </p>
          <p className="text-lg font-bold text-black">$ {formatNumberByComma(price.toString() as string)}/噸</p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-14">
        <p
          className={classNames('text-[15px] font-medium text-black leading-9', {
            'text-bright-red': isCannotBuy,
            '!text-dark-grey': !isCannotBuy && !selected
          })}
        >
          {isCannotBuy ? '剩下 0 噸無法交易' : `剩下 ${remaining_quantity} 噸可購`}
        </p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.2" onClick={(e) => e.stopPropagation()}>
            <MinusRounded onClick={() => onQuantityAdjust(qty - 1)} />
            <input
              className="w-17 h-9 rounded-md border border-[#B3B4B4] bg-transparent text-right pr-3.5 text-bright-blue text-2xl leading-normal tracking-[0.695px] font-bold flex items-center justify-center"
              type="number"
              value={qty}
              onChange={(e) => {
                if (isValidNumber(e.target.value)) {
                  onQuantityAdjust(parseInt(e.target.value));
                }
              }}
            />
            <PlusRounded onClick={() => onQuantityAdjust(qty + 1)} />
          </div>
          <p className="text-xl font-bold text-black whitespace-nowrap min-w-[120px] text-right">
            $ {formatNumberByComma(qty * price)}
          </p>
        </div>
        {/* <button className="mr-7">
          <img
            src="/images/cart/ic_delete.svg"
            width={23}
            height={27}
            className="w-6 h-7"
            alt="sacurn"
            onClick={onDeleteCartItem}
          />
        </button> */}
        <DeleteCart onClick={onDeleteCartItem} />
      </div>
    </div>
  );
};

const Heading: FC<HeadingIProps> = ({ children }) => {
  return (
    <div className="border-l-8  border-l-pale-yellow pl-5 text-black 2xl:text-lg text-base font-bold">{children}</div>
  );
};
