import { useState } from "react";
import Navbar from "../components/Navbar";
import DatePickerModal from "../components/DatePickerModal";
import CustomSelect from "../components/CustomSelect";
import formatDate from "../helpers/formatDate";
import CustomTable from "../components/CustomTable";
import { OPTIONS_LIST } from "../util/constants";

function OperationRecord() {
  const [open, setOpen] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className="w-screen relative h-screen overflow-hidden bg-neutral-150">
      {/* navbar */}
      <Navbar className={`relative z-30 !bg-navy-blue h-[70px]`} />
      <section className="pt-[27px] px-3 2xl:pl-[34px] 2xl:pr-[27px]">
        <h1 className="text-xl xl:text-[28px] text-navy-blue font-normal leading-8">| 操作記錄</h1>
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
                <img
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
                <CustomSelect options={OPTIONS_LIST} defaulValue="完成付款" />
              </div>
            </div>
            {/* operator */}
            <div className="flex items-center">
              <label
                htmlFor="operator"
                className="block text-base xl:text-lg font-medium leading-6 text-grey"
              >
                操作者:
              </label>
              <div className="ml-[15px]">
                <CustomSelect options={OPTIONS_LIST} defaulValue="Abcdefghijk" />
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
                  <img
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
        {/* record table */}
        <div className={`yellowScroll h-[75vh] pr-3 2xl:pr-[22px] overflow-auto overflow-x-hidden`}>
          <CustomTable tableHeadings={TABLE_HEAD} tableBody={TABLE_BODY} name="operation_page" />
        </div>
      </section>
    </div>
  );
}

export default OperationRecord;

const TABLE_HEAD = ["操作時間", "商品名稱", "操作者", "單價", "數量(噸)", "總金額", "動作", "備註"];

const TABLE_BODY = [
  {
    id: 1,
    time: "2023/05/18 19:24:19",
    prodName: "Andes Inorganic Soil Carbon",
    operator: "Abcdefghijk",
    unitPrice: "$100",
    quant: "+999",
    lumpsum: "$99,900",
    action: "下單結帳",
    remark: ""
  },
  {
    id: 2,
    time: "2023/05/18 19:24:19",
    prodName: "Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance",
    operator: "Chen Rio",
    unitPrice: "$120",
    quant: "+100",
    lumpsum: "$12,000",
    action: "完成付款",
    remark: ""
  },
  {
    id: 3,
    time: "2023/05/18 19:24:19",
    prodName: "CarbonCure Concrete Mineralization",
    operator: "Abcdefghijk",
    unitPrice: "$127",
    quant: "+100",
    lumpsum: "$12,700",
    action: "加入購物車",
    remark: ""
  },
  {
    id: 4,
    time: "2023/05/18 19:24:19",
    prodName: "Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance",
    operator: "Abcdefghijk",
    unitPrice: "$127",
    quant: "+100",
    lumpsum: "$12,700",
    action: "加入購物車",
    remark: ""
  },
  {
    id: 5,
    time: "2023/05/18 19:24:19",
    prodName: "Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance",
    operator: "Abcdefghijk",
    unitPrice: "$127",
    quant: "-100",
    lumpsum: "-$12,700",
    action: "加入購物車",
    remark: "此單已取消"
  },
  {
    id: 6,
    time: "2023/05/18 19:24:19",
    prodName: "Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance",
    operator: "Abcdefghijk",
    unitPrice: "$127",
    quant: "+100",
    lumpsum: "$12,700",
    action: "加入購物車",
    remark: ""
  },
  {
    id: 7,
    time: "2023/05/18 19:24:19",
    prodName: "Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance",
    operator: "Abcdefghijk",
    unitPrice: "$127",
    quant: "+100",
    lumpsum: "$12,700",
    action: "加入購物車",
    remark: ""
  }
];
