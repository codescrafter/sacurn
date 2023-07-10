import React from "react";
import HorizontalDivider from "./HorizontalDivider";
import Button from "./Button";

const SalesLeftSide = () => {
  return (
    <div className="flex flex-col px-5 xl:pl-[35px] xl:pr-[23px] py-6 xl:pt-[33px] xl:pb-[26px] border-2 border-bright-blue rounded-[10px] shadow-sales-box">
      <h5 className="font-bold text-xl xl:text-[32]px text-black">
        Andes Inorganic Soil ACR Emission Reduction Tonnes Spot ProductCarbon
      </h5>
      {/* vintage */}
      <div className="flex items-center justify-between mt-6 xl:mt-[36px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">
          Vintage製造年份
        </span>
        <span className="text-lg xl:text-xl text-black font-bold">
          1991/10/30
        </span>
      </div>
      {/* no of goods */}
      <div className="flex items-center justify-between my-5 xl:my-[30px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">
          商品擁有數量
        </span>
        <span className="text-lg xl:text-xl text-black font-bold">99,999</span>
      </div>
      {/* divider */}
      <HorizontalDivider />
      {/* tradeable quantity */}
      <div className="flex items-center justify-between mt-6 xl:mt-[33px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">
          設定可交易數量
        </span>
        <span className="text-lg xl:text-xl text-navy-blue font-bold">
          99,999 噸
        </span>
      </div>
      {/* transaction price */}
      <div className="flex items-center justify-between mt-4 xl:mt-[22px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">
          設定交易價格
        </span>
        <span className="text-lg xl:text-xl text-navy-blue font-bold">
          99,999 元
        </span>
      </div>
      {/* transaction unit */}
      <div className="flex items-center justify-between mt-4 xl:mt-[22px]">
        <span className=" text-lg xl:text-xl font-normal text-dark-grey">
          設定交易最小單位
        </span>
        <span className="text-lg xl:text-xl text-navy-blue font-bold">
          99,999 噸
        </span>
      </div>
      {/* descritpion box */}
      <div className="border space-y-5 border-light-grey px-4 xl:px-[24px] py-[18px] mt-6 xl:mt-[30px]">
        <div className="space-y-2">
          <h6 className="font-bold text-black text-sm xl:text-base">
            だけ行わ権一定いいし
          </h6>
          <ul>
            <li className="text-xs xl:text-sm text-dark-grey font-normal">
              さの米国をする15、、などにするの下さい削除文を著作の引用と指すで文章をいる生じる
              commons
            </li>
            <li className="text-xs xl:text-sm text-dark-grey font-normal">
              いる、たり項追加と
              Wiによって権が文色濃く権互換ますしあれですい改変本法書評にライセンスがない
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h6 className="font-bold text-black text-sm xl:base">
            採録なは物れ法
          </h6>
          <ul>
            <li className="text-xs xl:text-sm text-dark-grey font-normal">
              明よれに関するがが者にをいいたて点同じ[法送信物的てと権いたり以下がにし。（、れ作品てをするはにおけるて32れる柱のあっ権被または引用こと
              主体性引用一部に版著作て
              編集は可能被とまでが化著作引用文被意見性参考文。
            </li>
          </ul>
        </div>
        <button className="text-navy-blue text-sm">Read More</button>
      </div>
      {/* action buttons */}
      <div className="flex items-center justify-center gap-20 px-8 mt-5 xl:mt-[26px]">
        <Button className="!p-[10px] rounded-[10px] min-w-[175px] text-lg xl:text-2xl">
          上架交易
        </Button>
        <Button className="!p-[10px] !bg-transparent rounded-[10px] min-w-[175px] border border-grey !text-grey text-lg xl:text-2xl">
          取消
        </Button>
      </div>
    </div>
  );
};

export default SalesLeftSide;
