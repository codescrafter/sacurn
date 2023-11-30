import dateFormat from 'dateformat';
import _ from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import * as yup from 'yup';

import { BASE_URL } from '@/constant';
import { OperationRecord } from '@/libs/api';
import { useHistoryStore } from '@/store/history';
import { TableBodyItem } from '@/types';

import CustomSelect from '../components/CustomSelect';
import CustomTable from '../components/CustomTable';
import DatePickerModal from '../components/DatePickerModal';
import Navbar from '../components/Navbar';
import formatDate from '../helpers/formatDate';

const schema = yup
  .object({
    keyword: yup.string().optional(),
    page: yup.number().positive().integer().min(1).optional(),
    range: yup.string().optional(),
    status: yup.string().optional(),
    user: yup.string().optional()
  })
  .required();

const OperationRecordPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;
  const [operationRecordList, setOperationRecordList] = useState<OperationRecord[]>([]);
  const [data, setData] = useState<yup.InferType<typeof schema>>({
    keyword: '',
    page: 1,
    range: '',
    status: '',
    user: ''
  });

  const [statusOptions, userOptions, getHistoryOptions, getOperationHistoryList] = useHistoryStore((state) => [
    state.statusOptions,
    state.userOptions,
    state.getHistoryOptions,
    state.getOperationHistoryList
  ]);

  useEffect(() => {
    getHistoryOptions();
  }, []);

  const onSubmit = async (args: yup.InferType<typeof schema>) => {
    const newData = {
      ...data,
      ...args
    };
    setData(newData);
    const operationRecordList = await getOperationHistoryList(
      '0',
      newData.keyword ? newData.keyword : undefined,
      newData.page,
      newData.range ? newData.range : undefined,
      newData.status ? newData.status : undefined,
      newData.user ? newData.user : undefined
    );
    setOperationRecordList(operationRecordList);
  };

  const tableBody: TableBodyItem[] = useMemo(() => {
    return operationRecordList.map((record) => ({
      id: record.id,
      time: dateFormat(record.created_at, 'yyyy/mm/dd HH:MM:SS'),
      prodName: record.product_name || '-',
      operator: record.username,
      unitPrice: `$${record.price}` || '-',
      quant: record.quantity?.toString() || '-',
      lumpsum: `$${record.total_amount}` || '-',
      action: record.action || '-',
      remark: record.note || ''
    }));
  }, [operationRecordList]);

  return (
    <div className="w-screen relative h-screen overflow-hidden bg-neutral-150">
      {/* navbar */}
      <Navbar className="relative z-30 !bg-navy-blue h-[70px]" />
      <section className="pt-[27px] px-3 2xl:pl-[34px] 2xl:pr-[27px] flex flex-col max-h-[90vh]">
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
                  setDateRange={(dateList) => {
                    if (dateList[0] && dateList[1]) {
                      const startDate = dateFormat(dateList[0], 'yyyy-mm-dd');
                      const endDate = dateFormat(dateList[1], 'yyyy-mm-dd');
                      onSubmit({
                        range: `${startDate},${endDate}`
                      });
                    }
                    setDateRange(dateList);
                  }}
                  setOpen={setOpen}
                  open={open}
                />
              )}
              <label htmlFor="period" className="block text-base xl:text-lg font-medium leading-6 text-grey">
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
                <img width={10} height={12} src="/images/operation-record/icon_chervon_down.png" alt="arrow" />
              </div>
            </div>

            {/* state */}
            <div className="flex items-center relative">
              <label htmlFor="state" className="block text-base xl:text-lg font-medium leading-6 text-grey">
                狀態:
              </label>
              <div className="ml-[15px]">
                <CustomSelect
                  options={statusOptions}
                  defaultValue=""
                  callback={(status) => {
                    onSubmit({ status });
                  }}
                />
              </div>
            </div>
            {/* operator */}
            <div className="flex items-center">
              <label htmlFor="operator" className="block text-base xl:text-lg font-medium leading-6 text-grey">
                操作者:
              </label>
              <div className="ml-[15px]">
                <CustomSelect
                  options={userOptions}
                  defaultValue=""
                  callback={(user) => {
                    onSubmit({ user });
                  }}
                />
              </div>
            </div>
            {/* keyword */}
            <div className="flex">
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  id="search"
                  className="block bg-white w-full xl:w-[347px] py-2 pl-3 rounded-[26px] border border-light-grey pr-12 text-grey text-sm"
                  placeholder="輸入想要搜尋的碳權名稱,代號或是關鍵字"
                  onChange={(e) => onSubmit({ keyword: e.target.value })}
                />
                <div className="pointer-events-none border border-r-0 border-t-0 border-b-0 border-l-light-grey py-2 absolute inset-y-1 right-0 flex items-center pl-2 pr-3">
                  <img src="/images/operation-record/search_icon.svg" width={20} height={20} alt="search" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* record table */}
        <div className="yellowScroll h-[75vh] pr-3 2xl:pr-[22px] overflow-auto overflow-x-hidden">
          <CustomTable tableHeadings={TABLE_HEAD} tableBody={tableBody} name="operation_page" />
        </div>
        <a
          className="px-7 py-0.3 self-end bg-smoke shadow-download-btn rounded-lg mt-4 mr-2"
          href={`${BASE_URL}/trade/operation_record/?${new URLSearchParams({
            ..._.omitBy(data, _.isEmpty),
            download: '1'
          }).toString()}`}
          target="_blank"
          download
        >
          <div className="flex gap-2 items-center">
            <p className="text-mdbase font-bold text-navy-blue">Download</p>
            <img src="/images/company-registration/download.svg" />
          </div>
        </a>
      </section>
    </div>
  );
};

export default OperationRecordPage;

const TABLE_HEAD = ['操作時間', '商品名稱', '操作者', '單價', '數量(噸)', '總金額', '動作', '備註'];
