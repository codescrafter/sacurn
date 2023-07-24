import React from "react";
import Image from "next/image";
import Button from "./Button";

const ConfirmListingAlert = ({ setIsAlert, type }) => {
  return (
    <div className="flex justify-center items-center z-50 absolute inset-0 bg-black/30 backdrop-blur-[2px]">
      {type == "listingAlert" ? (
        <div className="xl:min-w-[892px] min-w-[600px] min-h-[400px] xl:min-h-[598px] flex flex-col space-y-20  items-center justify-center rounded-[20px] bg-white relative">
          {/* listing confirmation alert */}
          <Button
            className="!bg-transparent absolute right-0 top-0"
            onClick={() => setIsAlert(false)}
          >
            <Image
              src="/images/sales/cross_icon.png"
              width={32}
              height={32}
              alt="cross icon"
            />
          </Button>
          <h6 className="text-black text-xl xl:text-[32px] font-bold leading-[1px]">
            恭喜！已開始交易。
          </h6>
          <span className="font-bold text-lg xl:text-[26px] text-navy-blue">
            已完成上架作業
          </span>
          <Button
            className="font-bold text-lg xl:text-xl !px-5 !py-[10px] !rounded-[60px] min-w-[180px]"
            onClick={() => setIsAlert(false)}
          >
            關閉
          </Button>
        </div>
      ) : (
        <div className="min-w-[477px] min-h-[461px] flex flex-col space-y-10  items-center justify-center rounded-[20px] bg-white relative">
          {/* stop trade alert */}
          <Button
            className="!bg-transparent absolute right-0 top-0"
            onClick={() => setIsAlert(false)}
          >
            <Image
              src="/images/sales/cross_icon.png"
              width={32}
              height={32}
              alt="cross icon"
            />
          </Button>
          <Image
            src="/images/sales/exclamation-mark.png"
            width={109}
            height={109}
            alt="exclamation-mark"
          />
          <h6 className="text-black text-xl xl:text-[32px] font-bold tracking-[1px]">
            再次提醒
          </h6>
          <span className="font-bold text-lg xl:text-[26px] text-bright-red">
            確認停止交易後，資料將無法恢復
          </span>
          <div className="flex items-center gap-6">
            <Button
              className="font-bold text-lg xl:text-xl !py-[10px] !rounded-[60px] min-w-[180px]"
              onClick={() => setIsAlert(false)}
            >
              取消送出
            </Button>
            <Button
              className="font-bold !text-navy-blue text-lg border border-navy-blue !bg-transparent xl:text-xl !py-[10px] !rounded-[60px] min-w-[180px]"
              onClick={() => setIsAlert(false)}
            >
              確認停止交易
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmListingAlert;
