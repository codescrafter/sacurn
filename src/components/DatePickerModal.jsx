import { useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useOutsideClick from "../hooks/useOutsideClick";
import formatDate from "../helpers/formatDate";
import HorizontalDivider from "./HorizontalDivider";
import Button from "./Button";
import { zhTW } from "date-fns/locale";

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
      className="absolute py-3 z-40 top-8 inset-x-0 bg-white rounded-lg flex flex-col justify-center items-center shadow-2xl"
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
        locale={zhTW}
      />

      {/* divider */}
      <HorizontalDivider className={`!w-[85%]`} />
      {/* start & end date boxes */}
      <div className="flex items-center gap-1 my-3">
        <div className="flex flex-col">
          <span className="text-sm text-dark-grey">從</span>
          <div className="rounded-full border border-light-grey py-2 px-4 text-sm text-dark-grey">
            {startDate ? formatDate(startDate) : formatDate(new Date())}
          </div>
        </div>
        <span className="text-grey/50 mt-4">-</span>
        <div className="flex flex-col">
          <span className="text-sm text-dark-grey">到</span>
          <div className="rounded-full border border-light-grey py-2 px-4 text-sm text-dark-grey">
            {endDate ? formatDate(endDate) : formatDate(new Date())}
          </div>
        </div>
      </div>
      {/* divider */}
      <HorizontalDivider />
      {/* action buttons */}
      <div className="flex items-center space-x-2 mt-2 self-end pr-4">
        <Button
          className={`!bg-neutral-150 !text-grey text-sm !rounded-xl !py-1 !px-3`}
        >
          取消
        </Button>
        <Button className="!text-sm !rounded-xl !py-1 !px-3">查詢</Button>
      </div>
    </div>
  );
};

export default DatePickerModal;
