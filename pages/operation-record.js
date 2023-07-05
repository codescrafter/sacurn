import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

import RecordTable from "@/components/RecordTable";

function OperationRecord() {
  return (
    <div className="w-screen relative h-screen overflow-hidden">
      {/* navbar */}
      <Navbar className={`relative z-30 !bg-navy-blue h-[70px]`} />
      <section className="pt-[27.06px] pl-[34px] pr-14">
        <h1 className="text-[28px] text-navy-blue font-normal leading-8">
          | 操作記錄
        </h1>
        {/* filters */}
        <div className="flex justify-end mt-[9px] mb-[47px]">
          <div className="flex items-center flex-wrap space-x-8 xl:space-x-[58px] lg:my-0 my-2">
            {/* period */}
            <div className="flex items-center">
              <label
                htmlFor="period"
                className="block text-lg font-medium leading-6 text-grey"
              >
                期間:
              </label>
              <div className="ml-[15px]">
                <input
                  type="date"
                  name="period"
                  id="period"
                  className="block w-full bg-transparent border-0 text-dark-grey placeholder:text-dark-grey text-lg font-black"
                />
              </div>
            </div>
            {/* state */}
            <div className="flex items-center">
              <label
                htmlFor="state"
                className="block text-lg font-medium leading-6 text-grey"
              >
                期間:
              </label>
              <div className="ml-[15px]">
                <select
                  id="state"
                  name="state"
                  className="w-[100px] bg-transparent border-0 text-dark-grey placeholder:text-dark-grey text-lg font-black"
                  defaultValue="Canada"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            {/* operator */}
            <div className="flex items-center">
              <label
                htmlFor="operator"
                className="block text-lg font-medium leading-6 text-grey"
              >
                操作者:
              </label>
              <div className="ml-[15px]">
                <select
                  id="operator"
                  name="operator"
                  className="w-[100px] bg-transparent border-0 text-dark-grey placeholder:text-dark-grey text-lg font-black"
                  defaultValue="Canada"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            {/* search */}
            <div className="flex">
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="account-number"
                  id="account-number"
                  className="block bg-white w-full xl:w-[347px] py-2 pl-3 rounded-[26.4px] border border-[#DFDFDF] pr-12 text-[#979797] text-sm"
                  placeholder="輸入想要搜尋的碳權名稱,代號或是關鍵字"
                />
                <div className="pointer-events-none border-l-[#B3B4B4] py-2 absolute inset-y-1 right-0 flex items-center pl-2 pr-3">
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
        {/* record table */}

        <div
          className={`yellowScroll pr-7.5 overflow-scroll overflow-x-hidden`}
        >
          <RecordTable />
        </div>
      </section>
    </div>
  );
}

export default OperationRecord;
