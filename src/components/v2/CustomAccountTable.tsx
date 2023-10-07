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
    <div className="inline-block pt-[38px] justify-end items-center h-full w-[90%]">
      <div className="inline-block flex-col md:min-w-[600px] lg:min-w-[800px] xl:min-w-[1029px]">
        <div className="flex flex-col w-full">
          <div className="flex justify-end w-[96.5%] -right-12">
            <div className="flex items-center justify-center gap-[15px] py-1 px-3 bg-white opacity-90 rounded-smsm shadow-sales-box w-2/6">
              {/* date picker modal */}
              {open && (
                <DatePickerModal
                  startDate={startDate}
                  endDate={endDate}
                  setDateRange={setDateRange}
                  setOpen={setOpen}
                  open={open}
                  className="w-1/5 bg-white absolute left-[69%] top-[22%]"
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
                <div className="ml-[15px] text-dark-grey text-base xl:text-lg font-medium mr-2">
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
          <div className="inline-block min-w-full align-middle pt-1.5">
            <table className="w-full inline-table">
              <tbody className="flex flex-col flex-1 justify-between gap-2">
                <tr className="flex flex-1 justify-between rounded-lg opacity-80 bg-white shadow-sales-box w-[96.5%]">
                  {tableHeadings.map(({ id, heading }: AccountTableHeadingItems) => {
                    return (
                      <th
                        key={id}
                        className="flex-1 justify-between text-navy-blue items-center text-lg font-normal tracking-extra-light text-center p-1"
                      >
                        {heading}
                      </th>
                    );
                  })}
                </tr>
                <div className="w-[102%] overflow-y-scroll yellowScroll h-[685px]">
                  <div className="bg-white rounded-smmd opacity-90 shadow-sales-box flex-col text-black justify-between items-center text-xl font-bold w-[95%]">
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
                          <tr
                            key={id}
                            className="text-black justify-between text-center text-sm font-medium flex py-2.5"
                          >
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
    </div>
  );
};

export default CustomAccountTable;
