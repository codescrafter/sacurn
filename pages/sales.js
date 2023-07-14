import { Fragment, useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import SalesConfirmationBox from "@/components/SalesConfirmationBox";
import ConfirmListingAlert from "@/components/ConfirmListingAlert";
import Button from "@/components/Button";
import StopTradeAlert from "@/components/StopTradeAlert";
import SalesAreaGraph from "@/components/SalesAreaGraph";
import GraphCard from "@/components/GraphCard";
import SalesLineChart from "@/components/SalesLineChart.jsx";
import ProgressBarChart from "@/components/ProgressBarChart";

function Sales() {
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);
  const [staticRowsVisible, setStaticRowsVisible] = useState(false);
  const [confirmationBox, setConfirmationBox] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [isStopAlert, setIsStopAlert] = useState(false);
  const [stopTrade, setStopTrade] = useState(false);

  return (
    <div className="w-screen relative h-screen overflow-hidden bg-neutral-250">
      {/* confirmation modals */}
      {isAlert && <ConfirmListingAlert setIsAlert={setIsAlert} />}
      {isStopAlert && <StopTradeAlert setIsStopAlert={setIsStopAlert} />}
      {/* navbar */}
      <Navbar className={`relative z-30 !bg-navy-blue h-[70px]`} />
      <main className="py-8 pl-2 xl:pl-4 2xl:pl-[30px] pr-2 xl:pr-4 2xl:pr-[25px]">
        <div className="flex gap-3 2xl:gap-[33px]">
          {/* sidebar */}
          {confirmationBox ? (
            <div className="max-w-[618px] 2xl:min-w-[618px] xl:w-[500px] w-[390px]">
              {/* confirmation box */}
              <SalesConfirmationBox
                stopTrade={stopTrade}
                isStopAlert={isStopAlert}
                setIsStopAlert={setIsStopAlert}
                setIsAlert={setIsAlert}
                setConfirmationBox={setConfirmationBox}
              />
            </div>
          ) : (
            <div className="max-w-[618px] 2xl:min-w-[618px] xl:w-[500px] w-[500px] space-y-2">
              {/* graphs */}
              {/* area graph */}
              <GraphCard className="h-[347px] flex items-center justify-center relative">
                <SalesAreaGraph />
                {/* action buttons */}
                <div className="absolute -right-9 xl:-right-5 transform rotate-90">
                  <Button className="font-medium text-xs xl:text-sm !text-grey !bg-transparent rounded-bl-[10px] rounded-tl-[10px] rounded-tr-[1px] rounded-br-[1px] !shadow-graph-btn !p-[10px] min-w-[77px]">
                    碳權種類
                  </Button>
                  <Button className="font-medium text-[11px] xl:text-[13px] border border-light-grey  !text-grey !bg-neutral-150 rounded-bl-[0px] rounded-tl-[0px] rounded-tr-[10px] rounded-br-[10px] min-w-[52px]">
                    地區
                  </Button>
                </div>
              </GraphCard>
              {/* line graph */}
              <GraphCard className="h-[271px] flex flex-col items-center justify-center relative">
                {/* action buttons */}
                <div className="flex self-start justify-end w-full xl:pb-0 pt-4 pr-4 pb-2">
                  <Button className="font-medium text-[13px] border border-light-grey  !text-grey !bg-transparent rounded-bl-[10px] rounded-tl-[10px] rounded-tr-[0px] rounded-br-[0px] shadow-graph-btn">
                    銷售額
                  </Button>
                  <Button className="font-medium text-[13px] border border-light-grey  !text-grey !bg-neutral-150">
                    訪客數
                  </Button>
                  <Button className="font-medium text-[13px] border border-light-grey  !text-grey !bg-neutral-150">
                    瀏覽數
                  </Button>
                  <Button className="font-medium text-[13px] border border-light-grey  !text-grey !bg-neutral-150">
                    訂單數
                  </Button>
                  <Button className="font-medium text-[13px] border border-light-grey  !text-grey !bg-neutral-150 rounded-bl-[0px] rounded-tl-[0px] rounded-tr-[10px] rounded-br-[10px]">
                    平均客單價
                  </Button>
                </div>
                {/* chart */}
                <SalesLineChart />
              </GraphCard>
              {/* progressbar chart */}
              <GraphCard className="h-[206px] p-4">
                <ProgressBarChart />
              </GraphCard>
            </div>
          )}

          {/* sales table */}
          <div className="flex flex-col items-end w-full">
            <div className="flex items-center mb-9 gap-3">
              {/* filters */}
              <div className="rounded-full border border-light-grey w-[34px] h-[34px] flex items-center justify-center cursor-pointer">
                <Image
                  src="/images/sales/filters.png"
                  width={19}
                  height={19}
                  alt="filters"
                />
              </div>
              {/* search */}
              <div className="flex">
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="block bg-white w-full xl:w-[347px] py-2 pl-3 rounded-[26px] border border-light-grey pr-12 text-silverstone text-xs font-normal"
                    placeholder="輸入想要搜尋的碳權名稱,代號或是關鍵字"
                  />
                  <div className="pointer-events-none border border-r-0 border-t-0 border-b-0 border-l-light-grey py-2 absolute inset-y-1 right-0 flex items-center pl-2 pr-3">
                    <Image
                      src="/images/operation-record/search_icon.svg"
                      width={20}
                      height={20}
                      alt="search"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`yellowScroll w-full h-[81vh] pr-2 xl:pr-[22px] overflow-auto overflow-x-hidden`}
            >
              <div className="flow-root">
                <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
                    <table
                      className="min-w-full custom-table sales-table"
                      style={
                        staticRowsVisible
                          ? {
                              borderCollapse: "collapse",
                              borderSpacing: "0 11px",
                            }
                          : { borderCollapse: "separate", borderSpacing: "0 0" }
                      }
                    >
                      <thead>
                        <tr>
                          {tableHeadings.map((item, index) => (
                            <th
                              key={item}
                              className={`text-left whitespace-nowrap pb-1 ${
                                index === 0
                                  ? "pl-[11px] sr-only"
                                  : index === 1
                                  ? "pr-2"
                                  : "px-2"
                              }`}
                            >
                              <span
                                className={`text-sm flex items-center xl:text-lg font-normal text-grey cursor-pointer ${
                                  (index === 4 || index === 5) &&
                                  "justify-center"
                                }`}
                              >
                                {item}{" "}
                                <Image
                                  src="/images/sales/filter_arrows.png"
                                  width={15}
                                  height={23}
                                  alt="filters arrows"
                                />
                              </span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tableBody.map((item, index) => (
                          <Fragment key={item.id}>
                            <tr
                              className={`bg-white sales-row h-auto hover:shadow-sales-row ${
                                expandedRowIndex === index &&
                                staticRowsVisible &&
                                "!bg-light-gray"
                              }`}
                            >
                              <td className="xl:pl-[11px] pl-2 w-[0px] pr-4 text-center">
                                {/* badge */}
                                <span
                                  className={`text-center rounded-[10px] 2xl:text-lg text-sm p-1 xl:p-[10px] block xl:w-[74px] ${
                                    index === 2
                                      ? "bg-pale-yellow"
                                      : index === 3 ||
                                        index === 4 ||
                                        index === 5
                                      ? "bg-light-blue"
                                      : index === 6
                                      ? "bg-light-purple"
                                      : "bg-light-green"
                                  }`}
                                >
                                  {item.percent}
                                </span>
                              </td>
                              <td className={`py-3 pr-2 xl:w-[362px]`}>
                                {/* prod detail */}
                                <div className="flex flex-col space-y-1 xl:space-y-4">
                                  {/* prod name */}
                                  <span className="text-sm 2xl:text-lg font-semibold text-dark-grey !leading-[19px]">
                                    {item.prodDetail.prodName}
                                  </span>
                                  {/* detail */}
                                  <div className="flex items-center gap-[23px]">
                                    {/* seriol no */}
                                    <div className="flex items-center gap-1">
                                      <span className="text-xs whitespace-nowrap font-medium text-grey">
                                        序號:
                                      </span>
                                      <span className="text-sm font-medium text-grey">
                                        {item.prodDetail.seriolNo}
                                      </span>
                                    </div>
                                    {/* location */}
                                    <div className="flex items-center gap-1">
                                      <span className="text-xs font-medium text-grey">
                                        <Image
                                          src="/images/sales/location-marker.png"
                                          width={10}
                                          height={14}
                                          alt="location marker"
                                        />
                                      </span>
                                      <span className="text-sm whitespace-nowrap font-medium text-grey">
                                        {item.prodDetail.location}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td
                                className={`py-2 px-2 text-dark-grey font-medium text-sm 2xl:text-lg`}
                              >
                                {item.vintage}
                              </td>
                              <td
                                className={`py-2 px-2 font-bold text-dark-grey text-sm 2xl:text-lg`}
                              >
                                {item.totalAmount}{" "}
                                <span className="font-medium text-dark-grey">
                                  噸
                                </span>
                              </td>
                              <td
                                className={`py-2 px-2 text-dark-grey text-sm 2xl:text-lg w-[140px]`}
                              >
                                <div className="w-full flex justify-center">
                                  <div className="w-[45px] h-[45px]">
                                    <Image
                                      src={item.carbonCertificate}
                                      width={45}
                                      height={46}
                                      alt="file icon"
                                      className="w-[45px] h-auto cursor-pointer"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td
                                className={`py-2 px-2 text-dark-grey text-center text-sm 2xl:text-lg w-[140px]`}
                              >
                                {index === 5 ? (
                                  <Button
                                    className="whitespace-nowrap rounded-lg text-base !bg-pale-yellow hover:!bg-transparent hover:!border hover:!border-pale-yellow hover:!text-pale-yellow"
                                    onClick={() => {
                                      setExpandedRowIndex((prevIndex) =>
                                        prevIndex === index ? null : index
                                      );
                                      setStaticRowsVisible(
                                        (prevVisible) => !prevVisible
                                      );
                                    }}
                                  >
                                    {item.transaction}
                                  </Button>
                                ) : (
                                  <div className="w-full flex justify-center">
                                    <div className="w-[45px] h-[45px] group shadow flex items-center justify-center bg-white rounded-lg relative">
                                      <Image
                                        src={item.transaction}
                                        width={45}
                                        height={46}
                                        alt="settings icon"
                                        className="group-hover:hidden cursor-pointer w-[45px] h-auto"
                                      />
                                      <Image
                                        src="/images/sales/settings_icon_white.png"
                                        width={45}
                                        height={46}
                                        alt="settings icon"
                                        className="hidden group-hover:block cursor-pointer"
                                        onClick={() => {
                                          setConfirmationBox(true);
                                          setStopTrade(false);
                                        }}
                                      />
                                    </div>
                                  </div>
                                )}
                              </td>
                            </tr>
                            {expandedRowIndex === index ? (
                              ""
                            ) : (
                              <tr className="bg-neutral-150">
                                <td colSpan={8} className="py-[6px]"></td>
                              </tr>
                            )}
                            {/* shelf information */}
                            {expandedRowIndex === index &&
                              staticRowsVisible && (
                                <tr className="bg-light-gray dropdown-row  h-[95px]">
                                  <td colSpan={6} className="dropdown-td px-3">
                                    <div className="flex items-center space-x-3 xl:space-x-5 2xl:space-x-8 w-full bg-white rounded-[10px] h-[73px] pr-3">
                                      {/* date */}
                                      <div className="flex items-center gap-1 2xl:gap-2 ml-16 xl:ml-[90px]">
                                        <span className="font-medium text-sm xl:text-lg text-grey whitespace-nowrap">
                                          單價/噸
                                        </span>
                                        <span className="text-dark-grey text-base 2xl:text-lg font-bold leading-[1px] whitespace-nowrap">
                                          $ 2,999
                                        </span>
                                      </div>
                                      {/* member id */}
                                      <div className="flex items-center gap-1 2xl:gap-2">
                                        <span className="font-medium text-sm xl:text-lg text-grey leading-[1px] whitespace-nowrap">
                                          最低單位
                                        </span>
                                        <span className="text-dark-grey text-base 2xl:text-lg font-bold leading-[1px] whitespace-nowrap">
                                          999噸
                                        </span>
                                      </div>
                                      {/* transaction status */}
                                      <div className="flex items-center gap-1 2xl:gap-2">
                                        <span className="font-medium text-sm xl:text-lg text-grey leading-[1px] whitespace-nowrap">
                                          數量
                                        </span>
                                        <span className="text-dark-grey text-base 2xl:text-lg font-bold leading-[1px] whitespace-nowrap">
                                          99,999噸
                                        </span>
                                      </div>
                                      <Button
                                        className="rounded-[10px] min-w-[120px] 2xl:min-w-[183px] !bg-pale-yellow shadow-stoptrading-btn text-base !text-navy-blue font-medium xl:!ml-20 2xl:!ml-14"
                                        onClick={() => {
                                          setStopTrade(true);
                                          setConfirmationBox(true);
                                        }}
                                      >
                                        停止交易
                                      </Button>
                                    </div>
                                  </td>
                                </tr>
                              )}
                          </Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Sales;

const tableHeadings = [
  "",
  "商品名稱",
  "Vintage",
  "總數量",
  "碳權證書",
  "設定交易",
];

const tableBody = [
  {
    id: 1,
    percent: "50%",
    prodDetail: {
      prodName: "Australian Carbon Credit Units",
      seriolNo: "fjgmvixkermy",
      location: "非洲",
    },
    vintage: "1991/10/30",
    totalAmount: "889",
    carbonCertificate: "/images/sales/file_icon.png",
    transaction: "/images/sales/settings_icon.png",
  },
  {
    id: 2,
    percent: "11.2%",
    prodDetail: {
      prodName:
        "Andes Inorganic Soil ACR Emission Reduction Tonnes Spot ProductCarbon",
      seriolNo: "irdfgwxbmjug",
      location: "印度",
    },
    vintage: "1991/06/06",
    totalAmount: "100",
    carbonCertificate: "/images/sales/file_icon.png",
    transaction: "/images/sales/settings_icon.png",
  },
  {
    id: 3,
    percent: "20.4%",
    prodDetail: {
      prodName: "Global Emissions Offset Standard Spot Product",
      seriolNo: "poudhrfxjufn",
      location: "印度",
    },
    vintage: "1991/06/06",
    totalAmount: "3",
    carbonCertificate: "/images/sales/file_icon.png",
    transaction: "/images/sales/settings_icon.png",
  },
  {
    id: 4,
    percent: "9%",
    prodDetail: {
      prodName: "Core Global Emissions Offset Trailing Spot Product",
      seriolNo: "owieudmakqlw",
      location: "印度",
    },
    vintage: "1991/10/30",
    totalAmount: "23",
    carbonCertificate: "/images/sales/file_icon.png",
    transaction: "/images/sales/settings_icon.png",
  },
  {
    id: 5,
    percent: "5%",
    prodDetail: {
      prodName:
        "Nature-Based Global Emissions Offset Trailing Standard Spot Product Standard Spot Product",
      seriolNo: "lodismokeadw",
      location: "非洲",
    },
    vintage: "1991/10/30",
    totalAmount: "89",
    carbonCertificate: "/images/sales/file_icon.png",
    transaction: "/images/sales/settings_icon.png",
  },
  {
    id: 6,
    percent: "1.3%",
    prodDetail: {
      prodName: "VCS Verified Carbon Units Spot Product",
      seriolNo: "lekgmazoeldq",
      location: "俄羅斯",
    },
    vintage: "1991/07/01",
    totalAmount: "800",
    carbonCertificate: "/images/sales/file_icon.png",
    transaction: "上架中",
  },
  {
    id: 7,
    percent: "3.1%",
    prodDetail: {
      prodName: "ACR Emission Reduction Tonnes Spot Product",
      seriolNo: "irjgldemasil",
      location: "台灣",
    },
    vintage: "1991/10/30",
    totalAmount: "12",
    carbonCertificate: "/images/sales/file_icon.png",
    transaction: "/images/sales/settings_icon.png",
  },
];
