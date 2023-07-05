import { useRef } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useOutsideClick from "@/hooks/useOutsideClick";

const DatePickerModal = ({
  startDate,
  endDate,
  setDateRange,
  setOpen,
  open,
}) => {
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (open) setOpen(false);
  });
  return (
    <div
      ref={ref}
      className="absolute py-3 top-8 inset-x-0 bg-white rounded-lg flex flex-col justify-center items-center shadow-2xl"
    >
      {/* data picker */}
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable={true}
        inline
      />
      {/* divider */}
      <div className="bg-[#F0F0F0] h-[2px] w-[85%]" />
      {/* start & end date boxes */}
      <div className="flex items-center gap-1 my-3">
        <div className="flex flex-col">
          <span className="text-sm text-dark-grey">Start</span>
          <div className="rounded-full border border-[#F0F0F0] py-2 px-4 text-sm text-dark-grey">
            {startDate
              ? startDate.toLocaleDateString().replaceAll("-", "/")
              : "02/03/2020"}
          </div>
        </div>
        <span className="text-grey/50 mt-4">-</span>
        <div className="flex flex-col">
          <span className="text-sm text-dark-grey">End</span>
          <div className="rounded-full border border-[#F0F0F0] py-2 px-4 text-sm text-dark-grey">
            {endDate
              ? endDate.toLocaleDateString().replaceAll("-", "/")
              : "02/03/2020"}
          </div>
        </div>
      </div>
      {/* divider */}
      <div className="bg-[#F0F0F0] h-[2px] w-full" />
      {/* action buttons */}
      <div className="flex items-center space-x-2 mt-2 self-end pr-4">
        <button className="bg-[#F6F6F6] text-grey text-sm rounded-xl py-1 px-3">
          Cancel
        </button>
        <button className="bg-[#1B5487] text-white text-sm rounded-xl py-1 px-3">
          Save
        </button>
      </div>
    </div>
  );
};

export default DatePickerModal;
