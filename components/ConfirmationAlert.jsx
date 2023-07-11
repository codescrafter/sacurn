import React from "react";
import Image from "next/image";
import Button from "./Button";

const ConfirmationAlert = ({ setIsAlert }) => {
  return (
    <div className="flex justify-center items-center absolute inset-0 bg-black/30">
      <div className="xl:min-w-[892px] min-w-[600px] min-h-[400px] xl:min-h-[598px] flex flex-col space-y-20  items-center justify-center rounded-[20px] bg-white relative">
        {/* close */}
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
    </div>
  );
};

export default ConfirmationAlert;
