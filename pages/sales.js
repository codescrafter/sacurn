import { Fragment, useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import SalesConfirmationBox from "@/components/SalesConfirmationBox";
import Alert from "@/components/Alert";
import Button from "@/components/Button";
import SalesAreaGraph from "@/components/SalesAreaGraph";
import SalesLineChart from "@/components/SalesLineChart.jsx";
import ProgressBarChart from "@/components/ProgressBarChart";

function Sales() {
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);
  const [staticRowsVisible, setStaticRowsVisible] = useState(false);
  const [confirmationBox, setConfirmationBox] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [confirmListing, setConfirmListing] = useState(false);
  const [stopTrade, setStopTrade] = useState(false);

  return (
    <div className="w-screen relative h-screen overflow-hidden bg-neutral-250">
      {/* listing confirmation modal */}
      {isAlert && confirmListing && (
        <Alert setIsAlert={setIsAlert} size="lg" className="space-y-20">
          <h6 className="text-black text-xl xl:text-[32px] font-bold leading-[1px]">
            恭喜！已開始交易。
          </h6>
          <span className="font-bold text-lg xl:text-[26px] text-navy-blue">
            已完成上架作業
          </span>
          <Button
            className="font-bold text-lg xl:text-xl !px-5 !py-[10px] !rounded-[60px] min-w-[180px]"
            onClick={() => {
              setIsAlert(false);
              setConfirmListing(false);
            }}
          >
            關閉
          </Button>
        </Alert>
      )}
      {/* stop trading modal */}
      {isAlert && stopTrade && (
        <Alert setIsAlert={setIsAlert} size="sm" className="space-y-10">
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
              onClick={() => {
                setIsAlert(false);
                setStopTrade(false);
              }}
            >
              取消送出
            </Button>
            <Button
              className="font-bold !text-navy-blue text-lg border border-navy-blue !bg-transparent xl:text-xl !py-[10px] !rounded-[60px] min-w-[180px]"
              onClick={() => {
                setIsAlert(false);
                setStopTrade(false);
              }}
            >
              確認停止交易
            </Button>
          </div>
        </Alert>
      )}
      {/* navbar */}
      <Navbar className={`relative z-30 !bg-navy-blue h-[70px]`} />
      <main className="py-[30px] pl-2 xl:pl-4 2xl:pl-[30px] pr-2 xl:pr-4 2xl:pr-[25px]">
        <div className="flex gap-2 2xl:gap-[33px]">
          {/* sidebar */}
          {confirmationBox ? (
            <div className="max-w-[618px] 2xl:min-w-[618px] xl:w-[500px] w-[390px]">
              {/* confirmation box */}
              <SalesConfirmationBox
                stopTrade={stopTrade}
                setIsAlert={setIsAlert}
                setStopTrade={setStopTrade}
                confirmListing={confirmListing}
                setConfirmListing={setConfirmListing}
                setConfirmationBox={setConfirmationBox}
              />
            </div>
          ) : (
            <div className="max-w-[618px] 2xl:min-w-[618px] xl:min-w-[500px] w-[500px] space-y-2 pt-2">
              {/* graphs */}
              {/* area graph */}
              <SalesAreaGraph />
              {/* line graph */}
              <SalesLineChart />
              {/* progressbar graph */}
              <ProgressBarChart />
            </div>
          )}

          {/* table and search area */}
          <div className="flex flex-col items-end w-full">
            <div className="flex items-center mb-8 gap-3 xl:mr-0 mr-7">
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
              <div className="flex w-full">
                <div className="relative rounded-md shadow-sm w-full">
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
            {/* sales table */}
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
                      <thead className="sticky -top-1 z-10">
                        <tr className="!bg-neutral-250">
                          {tableHeadings.map((item, index) => (
                            <th
                              key={item}
                              className={`text-left whitespace-nowrap pb-4 ${
                                index === 0
                                  ? "pl-[11px] sr-only"
                                  : index === 1
                                  ? "pr-2"
                                  : "px-2"
                              }`}
                            >
                              <span
                                className={`text-sm flex items-center 2xl:text-lg font-normal text-grey cursor-pointer ${
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
                                  className="min-w-[15px] h-auto"
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
                              <td className="2xl:pl-[11px] pl-2 w-[0px] pr-2 2xl:pr-4 text-center">
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
                                <span className="!font-medium text-dark-grey">
                                  噸
                                </span>
                              </td>
                              <td
                                className={`py-2 text-dark-grey text-sm 2xl:text-lg 2xl:w-[140px]`}
                              >
                                <div className="w-full flex justify-center">
                                  <div className="w-[35px] 2xl:w-[45px] 2xl:h-[45px]">
                                    <Image
                                      src={item.carbonCertificate}
                                      width={45}
                                      height={46}
                                      alt="file icon"
                                      className="w-[35px] 2xl:w-[45px] h-auto cursor-pointer"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td
                                className={`py-2 text-dark-grey text-center text-sm 2xl:text-lg 2xl:w-[140px]`}
                              >
                                {index === 5 ? (
                                  <Button
                                    className="whitespace-nowrap rounded-[7px] text-base !bg-pale-yellow hover:!bg-transparent hover:!border hover:!border-pale-yellow hover:!text-pale-yellow w-auto 2xl:min-w-[74px] !p-[5px]  2xl:!p-[7px]"
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
                                    <div className="w-[35px] 2xl:w-[45px] 2xl:h-[45px] group shadow flex items-center justify-center bg-white rounded-lg relative">
                                      <Image
                                        src={item.transaction}
                                        width={45}
                                        height={46}
                                        alt="settings icon"
                                        className="group-hover:hidden cursor-pointer w-[35px] 2xl:w-[45px] h-auto"
                                      />
                                      <Image
                                        src="/images/sales/settings_icon_white.png"
                                        width={45}
                                        height={46}
                                        alt="settings icon"
                                        className="hidden group-hover:block cursor-pointer w-[35px] 2xl:w-[45px] h-auto"
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
