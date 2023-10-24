import React from 'react';

import { Order } from '@/libs/api';
import { ModalType, useModalStore } from '@/store/modal';
import { useStockListStore } from '@/store/stockList';

import Button from './Button';

interface StockItemProps {
  order: Order;
  number: number;
}

const StockItemBar = ({ order, number }: StockItemProps) => {
  const open = useModalStore((state) => state.open);
  const updateStockOffShelve = useStockListStore((state) => state.updateStockOffShelve);

  return (
    <tr className="bg-light-gray dropdown-row h-[84px]">
      <td colSpan={6} className="dropdown-td px-3">
        <div className="flex justify-between items-center space-x-3 xl:space-x-5 2xl:space-x-8 w-full bg-white rounded-[10px] h-[73px] 2xl:pl-10 2xl:pr-13 pl-5 pr-6">
          {/* item number */}
          <div className="flex gap-12">
            <p className="text-xl font-bold">{number}</p>
            {/* date */}
            <div className="flex items-center xl:gap-2.5 gap-1 2xl:gap-2">
              <span className="font-medium text-sm xl:text-lg text-grey whitespace-nowrap">單價/噸</span>
              <span className="text-dark-grey text-base 2xl:text-lg font-bold leading-[1px] whitespace-nowrap">
                $ {order.price || '-'}
              </span>
            </div>
            {/* member id */}
            <div className="flex items-center xl:gap-2.5 gap-1 2xl:gap-2">
              <span className="font-medium text-sm xl:text-lg text-grey leading-[1px] whitespace-nowrap">最低單位</span>
              <span className="text-dark-grey text-base 2xl:text-lg font-bold leading-[1px] whitespace-nowrap">
                {order.min_order_quantity || '-'} 噸
              </span>
            </div>
            {/* transaction status */}
            <div className="flex items-center xl:gap-2.5 gap-1 2xl:gap-2">
              <span className="font-medium text-sm xl:text-lg text-grey leading-[1px] whitespace-nowrap">數量</span>
              <span className="text-dark-grey text-base 2xl:text-lg font-bold leading-[1px] whitespace-nowrap">
                {order.quantity || '-'} 噸
              </span>
            </div>
          </div>
          <Button
            className="rounded-[10px] min-w-[120px] 2xl:min-w-[183px] !bg-pale-yellow shadow-stoptrading-btn text-base !text-navy-blue font-medium xl:!ml-20 2xl:!ml-14"
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
                      updateStockOffShelve(order.id);
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
