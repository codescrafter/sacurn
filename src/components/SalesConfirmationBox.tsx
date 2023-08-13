import React, { FC } from "react";
import HorizontalDivider from "./HorizontalDivider";
import Button from "./Button";

interface IProps {
  setIsAlert: React.Dispatch<React.SetStateAction<boolean>>;
  stopTrade: boolean;
  setConfirmationBox: React.Dispatch<React.SetStateAction<boolean>>;
  setStopTrade: React.Dispatch<React.SetStateAction<boolean>>;
  setConfirmListing: React.Dispatch<React.SetStateAction<boolean>>;
}

const SalesConfirmationBox: FC<IProps> = ({
  setIsAlert,
  stopTrade,
  setConfirmationBox,
  setStopTrade,
  setConfirmListing
}) => {
  return (
    <div className="flex flex-col px-3 2xl:pl-[35px] 2xl:pr-[23px] py-5 2xl:pt-[33px] 2xl:pb-[26px] border-2 border-bright-blue bg-white rounded-[10px] shadow-sales-box">
      <h5 className="font-bold text-xl xl:text-[32]px text-black">
        Andes Inorganic Soil ACR Emission Reduction Tonnes Spot ProductCarbon
      </h5>
      {/* vintage */}
      <div className="flex items-center justify-between mt-6 xl:mt-[33px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">Vintage製造年份</span>
        <span className="text-lg xl:text-xl text-black font-bold">1991/10/30</span>
      </div>
      {/* no of goods */}
      <div className="flex items-center justify-between my-5 xl:my-[30px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">商品擁有數量</span>
        <span className="text-lg xl:text-xl text-black font-bold">99,999</span>
      </div>
      {/* divider */}
      <HorizontalDivider />
      {/* tradeable quantity */}
      <div className="flex items-center justify-between mt-5 xl:mt-[30px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">設定可交易數量</span>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value="99,999"
            className="border border-light-grey p-[10px] text-right text-lg xl:text-xl text-navy-blue font-bold"
          />{" "}
          <span className="text-black font-normal text-base xl:text-xl">噸</span>
        </div>
      </div>
      {/* transaction price */}
      <div className="flex items-center justify-between mt-4 xl:mt-[22px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">設定交易價格</span>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value="999,999,999"
            className="border border-light-grey p-[10px] text-right text-lg xl:text-xl text-navy-blue font-bold"
          />{" "}
          <span className="text-black font-normal text-base xl:text-xl">噸</span>
        </div>
      </div>
      {/* transaction unit */}
      <div className="flex items-center justify-between mt-4 xl:mt-[22px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">設定交易最小單位</span>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value="99,999"
            className="border border-light-grey p-[10px] text-right text-lg xl:text-xl text-navy-blue font-bold"
          />{" "}
          <span className="text-black font-normal text-base xl:text-xl">噸</span>
        </div>
      </div>
      {/* descritpion box */}
      <div className="border space-y-3 border-light-grey px-4 xl:px-[24px] py-2 xl:py-[15px] mt-4 xl:mt-[24px]">
        <div className="space-y-1">
          <h6 className="font-bold text-black text-sm xl:text-base">だけ行わ権一定いいし</h6>
          <ul>
            <li className="text-xs text-dark-grey font-normal">
              さの米国をする15、、などにするの下さい削除文を著作の引用と指すで文章をいる生じる
              commons
            </li>
            <li className="text-xs text-dark-grey font-normal">
              いる、たり項追加と
              Wiによって権が文色濃く権互換ますしあれですい改変本法書評にライセンスがない
            </li>
          </ul>
        </div>
        <div className="space-y-1">
          <h6 className="font-bold text-black text-sm xl:base">採録なは物れ法</h6>
          <ul>
            <li className="text-xs xl:text-sm text-dark-grey font-normal">
              明よれに関するがが者にをいいたて点同じ[法送信物的てと権いたり以下がにし。（、れ作品てをするはにおけるて32れる柱のあっ権被または引用こと
              主体性引用一部に版著作て 編集は可能被とまでが化著作引用文被意見性参考文。
            </li>
          </ul>
        </div>
        <button className="text-navy-blue text-sm">Read More</button>
      </div>
      {/* action buttons */}
      <div className="flex items-center justify-center gap-4 2xl:gap-20 px-8 mt-5 xl:mt-[26px]">
        {stopTrade ? (
          <Button
            className="!p-[10px] rounded-[10px] min-w-[175px] text-base xl:text-2xl !bg-pale-yellow !text-navy-blue"
            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              event.stopPropagation();
              setStopTrade(true);
              setIsAlert(true);
            }}
          >
            上架交易
          </Button>
        ) : (
          <Button
            className="!p-[10px] rounded-[10px] min-w-[175px] text-base xl:text-2xl"
            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              event.stopPropagation();
              setConfirmListing(true);
              setIsAlert(true);
            }}
          >
            停止交易
          </Button>
        )}
        <Button
          onClick={() => {
            setIsAlert(false);
            setConfirmationBox(false);
            setStopTrade(false);
            setConfirmListing(false);
          }}
          className="!p-[10px] !bg-transparent rounded-[10px] min-w-[175px] border border-grey !text-grey text-base xl:text-2xl"
        >
          取消
        </Button>
      </div>
    </div>
  );
};

export default SalesConfirmationBox;
