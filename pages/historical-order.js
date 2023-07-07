import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import DatePickerModal from "@/components/DatePickerModal";
import CustomSelect from "@/components/CustomSelect";
import formatDate from "@/helpers/formatDate";
import CustomTable from "@/components/CustomTable";

function HistoricalOrder() {
  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  // options for CustomSelect component to pass as props
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <div className="w-screen relative h-screen overflow-hidden">
      {/* navbar */}
      <Navbar className={`relative z-30 !bg-navy-blue h-[70px]`} />
      <section className="pt-[27px] pl-[34px] pr-[27px]">
        <h1 className="text-xl xl:text-[28px] text-navy-blue font-normal leading-8">
          | 歷史訂單
        </h1>
        {/* filters */}
        <div className="flex justify-end mt-[9px] mb-[47px]">
          <div className="flex items-center flex-wrap space-x-8 xl:space-x-[58px] lg:my-0 my-2">
            {/* period */}
            <div className="flex items-center relative">
              {/* date picker modal */}
              {open && (
                <DatePickerModal
                  startDate={startDate}
                  endDate={endDate}
                  setDateRange={setDateRange}
                  setOpen={setOpen}
                  open={open}
                />
              )}

              <label
                htmlFor="period"
                className="block text-base xl:text-lg font-medium leading-6 text-grey"
              >
                期間:
              </label>
              <div
                className="flex items-center cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                }}
              >
                <div className="ml-[15px] text-dark-grey text-base xl:text-lg font-black mr-2">
                  {startDate && endDate ? (
                    <>
                      {formatDate(startDate)} - {formatDate(endDate)}
                    </>
                  ) : (
                    <>
                      {formatDate(new Date())} - {formatDate(new Date())}
                    </>
                  )}
                </div>
                <Image
                  width={10}
                  height={12}
                  src={"/images/operation-record/icon_chervon_down.png"}
                  alt="arrow"
                />
              </div>
            </div>

            {/* state */}
            <div className="flex items-center relative">
              <label
                htmlFor="state"
                className="block text-base xl:text-lg font-medium leading-6 text-grey"
              >
                期間:
              </label>
              <div className="ml-[15px]">
                <CustomSelect options={options} defaulValue="完成付款" />
              </div>
            </div>

            {/* search */}
            <div className="flex">
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block bg-white w-full xl:w-[347px] py-2 pl-3 rounded-[26px] border border-light-grey pr-12 text-grey text-sm"
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
        </div>
        {/* order table */}
        <div
          className={`yellowScroll h-[75vh] pr-[22px] overflow-auto overflow-x-hidden`}
        >
          <CustomTable
            theading={theading}
            tableBody={tableBody}
            page="historical_order"
          />
        </div>
      </section>
    </div>
  );
}

export default HistoricalOrder;

const theading = [
  "訂單號碼",
  "商品名稱",
  "買入/賣出",
  "單價",
  "數量(噸)",
  "總金額",
  "訂單狀態",
];

const tableBody = [
  {
    id: 1,
    orderNumber: "A123456789",
    prodName: "Andes Inorganic Soil Carbon",
    buysell: "賣出",
    unitPrice: "$100",
    quant: "10",
    lumpsum: "$99,900",
    orderStatus: "未完成",
  },
  {
    id: 2,
    orderNumber: "B123456789",
    prodName: "Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance",
    buysell: "賣出",
    unitPrice: "$13",
    quant: "50",
    lumpsum: "$12,000",
    orderStatus: "已完成",
  },
  {
    id: 3,
    orderNumber: "C123456789",
    prodName: "CarbonCure Concrete Mineralization",
    buysell: "買入",
    unitPrice: "$1,327",
    quant: "999",
    lumpsum: "$23,132,700",
    orderStatus: "未付款",
  },
  {
    id: 4,
    orderNumber: "D123456789",
    prodName: "Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance",
    buysell: "買入",
    unitPrice: "$345",
    quant: "400",
    lumpsum: "$12,700",
    orderStatus: "待付款",
  },
  {
    id: 5,
    orderNumber: "E123456789",
    prodName: "Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance",
    buysell: "賣出",
    unitPrice: "$99",
    quant: "43",
    lumpsum: "$12,700",
    orderStatus: "交易中",
  },
  {
    id: 6,
    orderNumber: "F123456789",
    prodName: "Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance",
    buysell: "賣出",
    unitPrice: "$234",
    quant: "30",
    lumpsum: "$12,700",
    orderStatus: "交易中",
  },
];
