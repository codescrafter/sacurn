import React from 'react';

import { StockItem } from '@/store/stockList';

import Button from './Button';
import { ActionType } from './SalesConfirmationBox';

interface StockItemProps {
  stockItem: StockItem;
  setActionType: React.Dispatch<React.SetStateAction<ActionType | null>>;
  setSelectStockItem: React.Dispatch<React.SetStateAction<StockItem | null>>;
  number: number;
}

const StockItemBar = ({ stockItem, setActionType, setSelectStockItem, number }: StockItemProps) => {
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
                $ {stockItem.orderData?.price || '-'}
              </span>
            </div>
            {/* member id */}
            <div className="flex items-center xl:gap-2.5 gap-1 2xl:gap-2">
              <span className="font-medium text-sm xl:text-lg text-grey leading-[1px] whitespace-nowrap">最低單位</span>
              <span className="text-dark-grey text-base 2xl:text-lg font-bold leading-[1px] whitespace-nowrap">
                {stockItem.orderData?.min_order_quantity || '-'} 噸
              </span>
            </div>
            {/* transaction status */}
            <div className="flex items-center xl:gap-2.5 gap-1 2xl:gap-2">
              <span className="font-medium text-sm xl:text-lg text-grey leading-[1px] whitespace-nowrap">數量</span>
              <span className="text-dark-grey text-base 2xl:text-lg font-bold leading-[1px] whitespace-nowrap">
                {stockItem.orderData?.quantity || '-'} 噸
              </span>
            </div>
          </div>
          <Button
            className="rounded-[10px] min-w-[120px] 2xl:min-w-[183px] !bg-pale-yellow shadow-stoptrading-btn text-base !text-navy-blue font-medium xl:!ml-20 2xl:!ml-14"
            onClick={() => {
              setActionType(ActionType.MakeOffShelve);
              setSelectStockItem(stockItem);
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
