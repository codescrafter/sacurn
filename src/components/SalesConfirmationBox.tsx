import classNames from 'classnames';
import { useMemo, useState } from 'react';

import { PURCHASE_INFO_NOTE } from '@/pages/PaymentInformation';
import { StockItem, useStockListStore } from '@/store/stockList';
import { MIN_CART_QTY } from '@/util/constants';
import { formatNumberByComma } from '@/util/helper';

import Button from './Button';
import HorizontalDivider from './HorizontalDivider';

interface IProps {
  onClose: () => void;
  stockItem: StockItem;
}

const SalesConfirmationBox = (props: IProps) => {
  const { onClose, stockItem } = props;

  const updateStockOnSale = useStockListStore((state) => state.updateStockOnSale);

  const maxSaleQty = useMemo(
    () => stockItem.available_sale_quantity || stockItem.quantity || 0,
    [stockItem.available_sale_quantity]
  );

  const [qty, setQty] = useState<number | string>(maxSaleQty);
  const [price, setPrice] = useState<number | string>(stockItem.price || 0);
  const [minUnit, setMinUnit] = useState<number | string>(MIN_CART_QTY);
  const [isReadMore, setIsReadMore] = useState<boolean>(false);

  const productInfo = useMemo(
    () => (
      <div className="border-2 border-bright-blue rounded-[10px] py-5  px-5">
        <div>
          <h1 className="text-base lg:text-2.5xl xl:text-3xl text-black font-bold">{stockItem.name}</h1>
        </div>

        <div className="pb-15">
          <div>
            <div className="flex justify-between pt-10 pb-15">
              <div className="flex flex-col gap-4 text-dark-grey">
                <p>Vintage</p>
                <p>平均單價</p>
                <p>持有數量</p>
              </div>
              <div className="flex flex-col gap-4 text-right text-xl font-bold text-black">
                <p>{stockItem.vintage}</p>
                <p>$ {stockItem.price}</p>
                <p>{stockItem.quantity} 噸</p>
              </div>
            </div>
            <hr className="border-silverstone" />
            <div className="flex justify-between pt-10 pb-15">
              <div className="flex flex-col gap-4 text-dark-grey">
                <p>上架數量</p>
                <p>每噸單價</p>
                <p>最低下單量</p>
              </div>
              <div className="flex flex-col gap-4 text-right text-xl font-bold text-black">
                <p>{qty} 噸</p>
                <p>{price} 元</p>
                <p>{minUnit} 噸</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    []
  );

  return (
    <div className="flex flex-col px-3 2xl:pl-[35px] 2xl:pr-[23px] py-5 2xl:pt-[33px] 2xl:pb-[26px] border-2 border-bright-blue bg-white rounded-[10px] shadow-sales-box">
      <h5 className="font-bold text-xl xl:text-[32]px text-black">{stockItem.name}</h5>
      {/* vintage */}
      <div className="flex items-center justify-between mt-6 xl:mt-[30px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">Vintage製造年份</span>
        <span className="text-lg xl:text-xl text-black font-bold">{stockItem.vintage}</span>
      </div>
      <div className="flex items-center justify-between mt-6 xl:mt-[30px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">單價</span>
        <span className="text-lg xl:text-xl text-black font-bold">${stockItem.price}</span>
      </div>
      {/* no of goods */}
      <div className="flex items-center justify-between mt-6 mb-5 xl:my-[30px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">商品擁有數量</span>
        <span className="text-lg xl:text-xl text-black font-bold">
          {stockItem.quantity} <span className="font-normal tracking-[0.6px]">噸</span>
        </span>
      </div>
      {/* divider */}
      <HorizontalDivider />
      {/* tradeable quantity */}
      <div className="flex items-center justify-between mt-5 xl:mt-[30px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">設定可交易數量</span>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={formatNumberByComma(qty)}
            max={maxSaleQty}
            className="border border-light-grey p-[10px] text-right text-lg xl:text-xl text-navy-blue font-normal"
            onChange={(e) => {
              const { value } = e.target;
              const newQty = parseInt(e.target.value);
              if (newQty > maxSaleQty) return;
              if (value.match(/[a-z]/i)) return;
              const formattedValue = formatNumberByComma(value);
              setQty(formattedValue);
            }}
          />
          <span className="text-black font-normal text-base xl:text-xl">噸</span>
        </div>
      </div>
      {/* transaction price */}
      <div className="flex items-center justify-between mt-4 xl:mt-[22px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">設定交易價格</span>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={formatNumberByComma(price)}
            className="border border-light-grey p-[10px] text-right text-lg xl:text-xl text-navy-blue font-normal"
            onChange={(e) => {
              const { value } = e.target;
              if (value.match(/[a-z]/i)) return;
              const formattedValue = formatNumberByComma(value);
              setPrice(formattedValue);
            }}
          />
          <span className="text-black font-normal text-base xl:text-xl">元</span>
        </div>
      </div>
      {/* transaction unit */}
      <div className="flex items-center justify-between mt-4 xl:mt-[22px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">設定交易最小單位</span>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={formatNumberByComma(minUnit)}
            className="border border-light-grey p-[10px] text-right text-lg xl:text-xl text-navy-blue font-normal"
            onChange={(e) => {
              const { value } = e.target;
              const newMinUnit = parseInt(e.target.value);
              if (newMinUnit > (stockItem.quantity || 0)) return;
              if (value.match(/[a-z]/i)) return;
              const formattedValue = formatNumberByComma(value);
              setMinUnit(formattedValue);
            }}
          />
          <span className="text-black font-normal text-base xl:text-xl">噸</span>
        </div>
      </div>
      <div className="border space-y-3 border-light-grey px-2 xl:px-3 py-2 xl:py-[15px] mt-4 xl:mt-6 ">
        <div
          className={classNames('overflow-auto yellowScrollNoBg transition-all', {
            'h-[165px]': isReadMore,
            'h-[155px]': !isReadMore
          })}
        >
          <p className="text-sm mb-3 text-left">
            依《土星永續股份有限公司 會員服務條款》會員同意遵守本交易條款內容如下：
          </p>
          {PURCHASE_INFO_NOTE.slice(0, isReadMore ? PURCHASE_INFO_NOTE.length : 1).map((note) => (
            <div key={note.id}>
              <div className="mb-1 flex gap-2 items-center">
                <p className="text-base font-medium">{note.id}.</p>
                <p className="text-sm">{note.title}</p>
              </div>
              <div>
                {note.content.slice(0, isReadMore ? note.content.length : 2).map((content) => (
                  <div key={content.id}>
                    <div className="flex mb-2 items-baseline gap-2 indent-4 pr-1">
                      <p className="text-sm font-medium">{content.id}:</p>
                      <p className="text-sm indent-0">{content.id === 1.2 ? content.title : content.detail}</p>
                    </div>
                    <div>
                      {content.id === 1.2 && (
                        <div>
                          {content.subContent?.slice(0, isReadMore ? content.subContent.length : 1).map((x) => (
                            <div className="flex gap-2 indent-8 items-baseline mb-2">
                              <p className="text-sm font-medium">{x.id}:</p>
                              <p key={x.id} className="text-sm indent-0">
                                {x.detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="text-navy-blue text-sm" onClick={() => setIsReadMore(!isReadMore)}>
          {isReadMore ? 'Read Less' : 'Read More'}
        </button>
      </div>
      {/* action buttons */}
      <div className="flex items-center justify-center gap-4 2xl:gap-20 px-8 mt-5 xl:mt-[26px]">
        <Button
          className="!p-[10px] rounded-[10px] min-w-[175px] text-2xl font-bold bg-pale-yellow !text-navy-blue"
          onClick={async () => {
            const isSuccess = await updateStockOnSale(
              stockItem.carbon_credit,
              Number(qty.toLocaleString()),
              Number(price.toLocaleString()),
              Number(minUnit.toLocaleString()),
              productInfo
            );
            if (isSuccess) onClose();
          }}
        >
          確認上架
        </Button>
        <Button
          onClick={onClose}
          className="!p-[10px] !bg-transparent rounded-[10px] min-w-[175px] border border-grey !text-grey text-base xl:text-2xl"
        >
          取消
        </Button>
      </div>
    </div>
  );
};

export default SalesConfirmationBox;
