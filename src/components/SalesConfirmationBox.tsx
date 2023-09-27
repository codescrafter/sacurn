import classNames from 'classnames';
import React, { useState } from 'react';

import { PURCHASE_INFO_NOTE } from '@/pages/PaymentInformation';
import { ModalType, useModalStore } from '@/store/modal';
import { StockItem, useStockListStore } from '@/store/stockList';
import { MIN_CART_QTY } from '@/util/constants';

import Button from './Button';
import HorizontalDivider from './HorizontalDivider';

export enum ActionType {
  MakeOffShelve = 'MakeOffShelve',
  MakeOnSale = 'MakeOnSale'
}

interface IProps {
  onClose: () => void;
  actionType: ActionType;
  stockItem: StockItem;
}

const SalesConfirmationBox = (props: IProps) => {
  const { actionType, onClose, stockItem } = props;

  const open = useModalStore((state) => state.open);
  const updateStockOnSale = useStockListStore((state) => state.updateStockOnSale);
  const updateStockOffShelve = useStockListStore((state) => state.updateStockOffShelve);
  const [qty, setQty] = useState<number>(stockItem.quantity || 0);
  const [price, setPrice] = useState<number>(stockItem.price || 0);
  const [minUnit, setMinUnit] = useState<number>(MIN_CART_QTY);
  const [isReadMore, setIsReadMore] = useState<boolean>(false);

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
        <span className="text-lg xl:text-xl text-black font-bold">{stockItem.price}</span>
      </div>
      {/* no of goods */}
      <div className="flex items-center justify-between mt-6 mb-5 xl:my-[30px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">商品擁有數量</span>
        <span className="text-lg xl:text-xl text-black font-bold">{stockItem.quantity}</span>
      </div>
      {/* divider */}
      <HorizontalDivider />
      {/* tradeable quantity */}
      <div className="flex items-center justify-between mt-5 xl:mt-[30px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">設定可交易數量</span>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={qty}
            disabled={actionType === ActionType.MakeOffShelve}
            className="border border-light-grey p-[10px] text-right text-lg xl:text-xl text-navy-blue font-bold"
            onChange={(e) => {
              const newQty = parseInt(e.target.value);
              if (newQty > (stockItem.quantity || 0)) return;
              setQty(parseInt(e.target.value));
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
            type="number"
            value={price}
            disabled={actionType === ActionType.MakeOffShelve}
            className="border border-light-grey p-[10px] text-right text-lg xl:text-xl text-navy-blue font-bold"
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
          <span className="text-black font-normal text-base xl:text-xl">元</span>
        </div>
      </div>
      {/* transaction unit */}
      <div className="flex items-center justify-between mt-4 xl:mt-[22px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">設定交易最小單位</span>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={minUnit}
            disabled={actionType === ActionType.MakeOffShelve}
            className="border border-light-grey p-[10px] text-right text-lg xl:text-xl text-navy-blue font-bold"
            onChange={(e) => {
              const newMinUnit = parseInt(e.target.value);
              if (newMinUnit > (stockItem.quantity || 0)) return;
              setMinUnit(parseInt(e.target.value));
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
        {actionType === ActionType.MakeOnSale && (
          <Button
            className="!p-[10px] rounded-[10px] min-w-[175px] text-base xl:text-2xl bg-navy-blue text-white"
            onClick={() => {
              updateStockOnSale(stockItem.carbon_credit, qty, price, minUnit);
              onClose();
            }}
          >
            上架交易
          </Button>
        )}

        {actionType === ActionType.MakeOffShelve && (
          <Button
            className="!p-[10px] rounded-[10px] min-w-[175px] text-base xl:text-2xl"
            onClick={() => {
              open(ModalType.MakeStockOffShelve, {
                buttons: [
                  {
                    text: '取消送出',
                    isOutline: true
                  },
                  {
                    text: '確認停止交易',
                    onClick: () => {
                      updateStockOffShelve(stockItem.carbon_credit);
                      onClose();
                    }
                  }
                ]
              });
            }}
          >
            停止交易
          </Button>
        )}
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
