import React, { useMemo } from 'react';

import { Order } from '@/libs/api';
import { ModalType, useModalStore } from '@/store/modal';
import { useStockListStore } from '@/store/stockList';
import { formatNumberByComma } from '@/util/helper';

import Button from './Button';

interface StockItemProps {
  order: Order;
  number: number;
}

const StockItemBar = ({ order, number }: StockItemProps) => {
  const open = useModalStore((state) => state.open);
  const updateStockOffShelve = useStockListStore((state) => state.updateStockOffShelve);

  const productInfo = useMemo(
    () => (
      <div className="border-2 border-bright-blue rounded-[10px] py-5  px-5">
        <div>
          <h1 className="text-base lg:text-2.5xl xl:text-3xl text-black font-bold">{order.carbon_name}</h1>
        </div>

        <div className="pb-15">
          <div>
            <div className="flex justify-between pt-10 pb-15">
              <div className="flex flex-col gap-4 text-dark-grey">
                <p>平均單價</p>
                <p>持有數量</p>
              </div>
              <div className="flex flex-col gap-4 text-right text-xl font-bold text-black">
                <p>$ {order.price}</p>
                <p>{order.quantity} 噸</p>
              </div>
            </div>
            <hr className="border-silverstone" />
            <div className="flex justify-between pt-10 pb-15">
              <div className="flex flex-col gap-4 text-dark-grey">
                <p>下架數量</p>
                <p>每噸單價</p>
              </div>
              <div className="flex flex-col gap-4 text-right text-xl font-bold text-black">
                <p>{order.quantity} 噸</p>
                <p>{order.price} 元</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    [order]
  );

  return (
    <tr className="bg-light-gray dropdown-row h-[84px]">
      <td colSpan={6} className="dropdown-td px-3">
        <div className="flex items-center justify-between space-x-3 xl:space-x-5 2xl:space-x-8 w-full bg-white rounded-[10px] h-[73px] 2xl:pl-10 2xl:pr-13 pl-5 pr-6">
          {/* item number */}
          <div className="flex gap-12">
            <p className="text-xl font-bold">{number}</p>
            {/* date */}
            <div className="flex items-center xl:gap-2.5 gap-1 2xl:gap-2">
              <span className="font-medium text-sm xl:text-lg text-grey whitespace-nowrap">單價/噸</span>
              <span className="text-dark-grey text-base 2xl:text-lg font-bold leading-[1px] whitespace-nowrap">
                $ {formatNumberByComma(order.price || '') || '-'}
              </span>
            </div>
            {/* member id */}
            <div className="flex items-center xl:gap-2.5 gap-1 2xl:gap-2">
              <span className="font-medium text-sm xl:text-lg text-grey leading-[1px] whitespace-nowrap">最低單位</span>
              <span className="text-dark-grey text-base 2xl:text-lg font-bold leading-[1px] whitespace-nowrap">
                {formatNumberByComma(order.min_order_quantity || '') || '-'} 噸
              </span>
            </div>
            {/* transaction status */}
            <div className="flex items-center xl:gap-2.5 gap-1 2xl:gap-2">
              <span className="font-medium text-sm xl:text-lg text-grey leading-[1px] whitespace-nowrap">數量</span>
              <span className="text-dark-grey text-base 2xl:text-lg font-bold leading-[1px] whitespace-nowrap">
                {formatNumberByComma(order.quantity || '') || '-'} 噸
              </span>
            </div>
          </div>
          <Button
            className="rounded-[10px] min-w-[120px] 2xl:min-w-[183px] !bg-pale-yellow shadow-stoptrading-btn text-base !text-navy-blue font-medium xl:!ml-20 2xl:!mr-[5%]"
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
                      updateStockOffShelve(order.id, productInfo);
                    }
                  }
                ]
              });
            }}
          >
            停止交易
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default StockItemBar;
