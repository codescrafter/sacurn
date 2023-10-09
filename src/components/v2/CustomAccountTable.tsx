import { useState } from 'react';
import { Link } from 'react-router-dom';

import formatDate from '@/helpers/formatDate';
import { AccountTableBodyItems, AccountTableHeadingItems } from '@/type';

import DatePickerModal from '../DatePickerModal';

interface IProps {
  name: string;
  tableHeadings: AccountTableHeadingItems[];
  tableBody: AccountTableBodyItems[];
}

const CustomAccountTable = ({ tableHeadings, tableBody }: IProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <div className="flex pt-[38px] flex-row justify-end items-center w-full pr-16 pl-10">
      <div className="flex flex-col min-w-full">
        <div className="flex flex-col w-full">
          <div className="flex justify-end whitespace-nowrap w-[96.5%]">
            <div className="flex pb-1.5">
              <div className="flex text-center items-center whitespace-nowrap justify-center gap-[15px] py-1 px-3 bg-white opacity-100 rounded-smsm shadow-sales-box relative z-50">
                {/* date picker modal */}
                {open && (
                  <DatePickerModal
                    startDate={startDate}
                    endDate={endDate}
                    setDateRange={setDateRange}
                    setOpen={setOpen}
                    open={open}
                    className="bg-white z-50 top-12 flex !w-full"
                    variant="secondary"
                  />
                )}
                <label htmlFor="period" className="block text-base xl:text-lg font-medium leading-6 text-dark-grey">
                  期間:
                </label>
                <div
                  className="flex items-center cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(!open);
                  }}
                >
                  <div className="ml-[15px] text-dark-grey text-base xl:text-lg font-bold mr-2">
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
                  <img width={10} height={12} src="/images/operation-record/icon_chervon_down.png" alt="arrow" />
                </div>
              </div>
            </div>
          </div>
          <table className="w-full pb-5">
            <tbody className="flex flex-col flex-1 gap-2 pb-4 w-full">
              <tr className="flex flex-1 text-center rounded-lg opacity-80 bg-white shadow-sales-box w-[96.5%]">
                {tableHeadings.map(({ id, heading }: AccountTableHeadingItems) => {
                  return (
                    <th
                      key={id}
                      className="flex-1 text-navy-blue text-lg font-normal tracking-extra-light text-center px-5 py-1"
                    >
                      {heading}
                    </th>
                  );
                })}
              </tr>
              <div className="w-full overflow-y-scroll yellowScroll h-[685px] rounded-smmd">
                <div className="bg-white rounded-smmd opacity-90 shadow-sales-box flex-col text-black justify-between items-center text-xl font-bold w-[97%]">
                  {tableBody.map(
                    ({
                      id,
                      transactionDate,
                      transactionStatus,
                      orderNumber,
                      totalAmount,
                      points
                    }: AccountTableBodyItems) => {
                      return (
                        <tr key={id} className="text-black justify-between text-center text-sm font-medium flex py-2.5">
                          <td className="!font-normal !text-black flex-1">{transactionDate}</td>
                          <td className="flex-1">{transactionStatus}</td>
                          <td className="flex-1">{orderNumber}</td>
                          <td className="flex-1">{totalAmount}</td>
                          <td className="flex-1">{points}</td>
                        </tr>
                      );
                    }
                  )}
                </div>
              </div>
            </tbody>
          </table>
        </div>
        <button className="px-8 py-0.5 self-end bg-smoke shadow-download-btn rounded-lg ml-10 mt-3">
          <div className="flex gap-2 items-center">
            <Link
              to="/download.docx"
              target="_blank"
              download="土星_平台條款內容"
              className="text-mdbase font-bold text-navy-blue"
            >
              Download
            </Link>
            <img src="/images/company-registration/download.svg" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default CustomAccountTable;
