import { FC } from 'react';

import Button from './Button';

interface IProps {
  setIsStopAlert: (value: boolean) => void;
}

const StopTradeAlert: FC<IProps> = ({ setIsStopAlert }) => {
  return (
    <div className="flex justify-center items-center absolute inset-0 bg-black/30 z-50 backdrop-blur-[2px]">
      <div className="min-w-[477px] min-h-[461px] flex flex-col space-y-10  items-center justify-center rounded-[20px] bg-white relative">
        <Button className="!bg-transparent absolute right-0 top-0" onClick={() => setIsStopAlert(false)}>
          <img src="/images/sales/cross_icon.png" width={32} height={32} alt="cross icon" />
        </Button>
        <img src="/images/sales/exclamation-mark.png" width={109} height={109} alt="exclamation-mark" />
        <h6 className="text-black text-xl xl:text-[32px] font-bold tracking-[1px]">再次提醒</h6>
        <span className="font-bold text-lg xl:text-[26px] text-bright-red">確認停止交易後，資料將無法恢復</span>
        <div className="flex items-center gap-6">
          <Button
            className="font-bold text-lg xl:text-xl !py-[10px] !rounded-[60px] min-w-[180px]"
            onClick={() => setIsStopAlert(false)}
          >
            取消送出
          </Button>
          <Button
            className="font-bold !text-navy-blue text-lg border border-navy-blue !bg-transparent xl:text-xl !py-[10px] !rounded-[60px] min-w-[180px]"
            onClick={() => setIsStopAlert(false)}
          >
            確認停止交易
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StopTradeAlert;
