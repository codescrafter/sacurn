import 'react-datepicker/dist/react-datepicker.css';

import classNames from 'classnames';
import { zhTW } from 'date-fns/locale';
import { useRef } from 'react';
import DatePicker from 'react-datepicker';

import formatDate from '../helpers/formatDate';
import useOutsideClick from '../hooks/useOutsideClick';
import Button from './Button';
import HorizontalDivider from './HorizontalDivider';

interface IProps {
  startDate: Date | null;
  endDate: Date | null;
  setDateRange?: (update: [Date | null, Date | null]) => void;
  setOpen: (open: boolean) => void;
  open: boolean;
  className?: string;
  variant?: 'secondary';
}

const DatePickerModal = ({ startDate, endDate, setDateRange, setOpen, open, className, variant }: IProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useOutsideClick(ref, () => {
    if (open) setOpen(false);
  });

  return (
    <div
      ref={ref}
      className={classNames(
        'absolute py-3 z-40 top-8 inset-x-0 bg-white rounded-lg flex flex-col justify-center items-center shadow-2xl !w-full mt-2',
        className
      )}
    >
      {variant === 'secondary' && (
        <div className="flex items-center gap-1 my-3 w-full justify-center">
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
      )}
      {/* data picker */}
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update: [Date | null, Date | null]) => {
          setDateRange && setDateRange(update);
        }}
        isClearable={true}
        inline={true}
        locale={zhTW}
      />
      <HorizontalDivider className="!w-[85%]" />
      {/* start & end date boxes */}
      {variant !== 'secondary' && (
        <div className="flex items-center gap-1 my-3 w-full justify-center">
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
      )}
      <HorizontalDivider />
      {/* action buttons */}
      <div className="flex items-center space-x-2 mt-2 self-end pr-4 w-full justify-end">
        <Button className="!bg-neutral-150 !text-grey text-sm !rounded-xl !py-1 !px-3">取消</Button>
        <Button className="!text-sm !rounded-xl !py-1 !px-3" onClick={() => setOpen(false)}>
          查詢
        </Button>
      </div>
    </div>
  );
};

export default DatePickerModal;
