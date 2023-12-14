import { Link } from 'react-router-dom';

import formatDate from '@/helpers/formatDate';
import { useInventoryStore } from '@/store/inventory';
import { usePlatformStore } from '@/store/platform';
import { formatNumberByComma } from '@/util/helper';

import Button from './Button';
import GraphCard from './GraphCard';

const ProgressBarChart = () => {
  const ordersInfo = useInventoryStore((state) => state.ordersInfo);
  const toggleCardComparison = usePlatformStore((state) => state.toggleCardComparison);
  const ordersPercent = (ordersInfo.order_count || 0 / ordersInfo.upgrade?.orders) * 100;
  const amountPercent = (ordersInfo.acc_point || 0 / ordersInfo?.upgrade?.points) * 100;

  return (
    <GraphCard className="h-[206px] p-4">
      <div className="flex flex-col space-y-5">
        {/* header */}
        <h5 className="text-grey text-sm 2xl:text-xl font-semibold">
          您目前是VVIP銀卡等級
          <sup>
            <Button
              onClick={toggleCardComparison}
              className="border border-light-grey rounded !py-[8px] !px-2 !bg-transparent !text-silverstone font-semibold 2xl:text-[9px]"
            >
              查看升等方式
            </Button>
          </sup>
        </h5>
        {/* bars */}
        <div className="flex items-center divide-x divide-silverstone w-full">
          {/* left progress bar */}
          <div className="flex flex-col w-full pr-1 2xl:pr-6">
            <div className="flex items-center justify-between w-full">
              <span className="text-silverstone text-xs 2xl:text-sm font-semibold">目前累積訂單</span>
              <img
                src="/images/sales/report_icon.png"
                width={33}
                height={33}
                alt="report"
                className="2xl:w-[33px] 2xl:h-[33px] w-[28px] h-auto"
              />
            </div>
            {/* numbers */}
            <h6 className="text-navy-blue font-bold text-xl 2xl:text-3xl">
              {ordersInfo.order_count}
              <span className="text-silverstone text-xs 2xl:text-lg font-semibold">
                /{ordersInfo.upgrade?.orders || 0}
              </span>
            </h6>
            {/* profressbar */}
            <div className="w-full bg-pale-yellow rounded-[5px] h-2.5 shadow-progress-bar">
              <div className={`bg-navy-blue h-2.5 rounded-[5px] w-[${ordersPercent}%]`}></div>
            </div>
          </div>
          {/* right progressbar */}
          <div className="flex flex-col w-full pl-1 2xl:pl-6">
            <div className="flex items-center justify-between w-full">
              <span className="text-silverstone text-xs 2xl:text-sm font-semibold">目前累積消費</span>
              <img
                src="/images/sales/dollar_icon.png"
                width={33}
                height={33}
                alt="report"
                className="2xl:w-[33px] 2xl:h-[33px] w-[28px] h-auto"
              />
            </div>
            {/* numbers */}
            <h6 className="text-navy-blue font-bold text-xl 2xl:text-3xl">
              ${formatNumberByComma(ordersInfo.acc_point || 0)}
              <span className="text-silverstone text-xs 2xl:text-lg font-semibold">
                /{formatNumberByComma(ordersInfo?.upgrade?.points || 0)}
              </span>
            </h6>
            {/* profressbar */}
            <div className="w-full bg-pale-yellow rounded-[5px] h-2.5 shadow-progress-bar">
              <div className={`bg-navy-blue h-2.5 rounded-[5px] w-[${amountPercent}%]`}></div>
            </div>
          </div>
        </div>
        {/* disclaimer */}
        <div className="flex items-start 2xl:items-center justify-between">
          <span className="text-silverstone text-xs 2xl:text-sm font-semibold w-64 2xl:w-auto">
            {formatDate(ordersInfo.expire_at || '')}
            將重新計算，會籍依前6個月消費予對應等級
          </span>
          <Link to="/v2/account-carbon-credit">
            <Button className="!bg-transparent whitespace-nowrap flex items-center font-semibold text-xs 2xl:text-sm !text-silverstone">
              看紀錄 <img width={6} height={12} src="/images/sales/chervon_right.png" alt="arrow" className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </GraphCard>
  );
};

export default ProgressBarChart;
