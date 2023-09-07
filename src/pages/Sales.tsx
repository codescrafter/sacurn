import classNames from 'classnames';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useStockListStore } from '@/store/stockList';

import Alert from '../components/Alert';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import ProgressBarChart from '../components/ProgressBarChart';
import SalesAreaGraph from '../components/SalesAreaGraph';
import SalesConfirmationBox from '../components/SalesConfirmationBox';
import SalesLineChart from '../components/SalesLineChart';

const Sales = () => {
  const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(null);
  const [staticRowsVisible, setStaticRowsVisible] = useState<boolean>(false);
  const [confirmationBox, setConfirmationBox] = useState<boolean>(false);
  const [isAlert, setIsAlert] = useState<boolean>(false);
  const [confirmListing, setConfirmListing] = useState<boolean>(false);
  const [stopTrade, setStopTrade] = useState<boolean>(false);

  const stockList = useStockListStore((store) => store.stockList);
  const getStockList = useStockListStore((store) => store.getStockList);

  useEffect(() => {
    if (stockList.length === 0) getStockList();
  }, []);

  return (
    <div className="w-screen relative h-screen overflow-hidden bg-neutral-250">
      {/* listing confirmation modal */}
      {isAlert && confirmListing && (
        <Alert setIsAlert={setIsAlert} size="lg" className="space-y-20">
          <h6 className="text-black text-xl xl:text-[32px] font-bold leading-[1px]">恭喜！已開始交易。</h6>
          <span className="font-bold text-lg xl:text-[26px] text-navy-blue">已完成上架作業</span>
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
          <img src="/images/sales/exclamation-mark.png" width={109} height={109} alt="exclamation-mark" />
          <h6 className="text-black text-xl xl:text-[32px] font-bold tracking-[1px]">再次提醒</h6>
          <span className="font-bold text-lg xl:text-[26px] text-bright-red">確認停止交易後，資料將無法恢復</span>
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
      <Navbar className="relative z-30 !bg-navy-blue h-[70px]" />
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
                setConfirmListing={setConfirmListing}
                setConfirmationBox={setConfirmationBox}
              />
            </div>
          ) : (
            <div className="max-w-[618px] 2xl:min-w-[618px] xl:min-w-[500px] w-[500px] space-y-2 pt-2">
              <SalesAreaGraph />
              <SalesLineChart />
              <ProgressBarChart />
            </div>
          )}

          {/* table and search area */}
          <div className="flex flex-col items-end w-full">
            <div className="flex items-center mb-8 gap-3 xl:mr-0 mr-7">
              {/* filters */}
              <div className="rounded-full border border-light-grey w-[34px] h-[34px] flex items-center justify-center cursor-pointer">
                <img src="/images/sales/filters.png" width={19} height={19} alt="filters" />
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
                    <img src="/images/operation-record/search_icon.svg" width={20} height={20} alt="search" />
                  </div>
                </div>
              </div>
            </div>
            {/* sales table */}
            <div className="yellowScroll w-full h-[81vh] pr-2 xl:pr-[22px] overflow-auto overflow-x-hidden">
              <div className="flow-root">
                <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
                    <table
                      className="min-w-full custom-table sales-table"
                      style={{
                        borderCollapse: staticRowsVisible ? 'collapse' : 'separate',
                        borderSpacing: staticRowsVisible ? '0 11px' : '0 0'
                      }}
                    >
                      <thead className="sticky -top-1 z-10">
                        <tr className="!bg-neutral-250">
                          {TABLE_HEAD?.map((item, index) => (
                            <th
                              key={item}
                              className={classNames('text-left whitespace-nowrap pb-4', {
                                'pl-[11px] sr-only': index === 0,
                                'pr-2': index === 1,
                                'px-2': index !== 0 && index !== 1
                              })}
                            >
                              <span
                                className={classNames(
                                  'text-sm flex items-center 2xl:text-lg font-normal text-grey cursor-pointer',
                                  {
                                    'justify-center': index === 4 || index === 5
                                  }
                                )}
                              >
                                {item}
                                <img
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
                        {stockList?.map((item, index) => (
                          <Fragment key={item.id}>
                            <tr
                              className={classNames('bg-white sales-row h-auto hover:shadow-sales-row', {
                                '!bg-light-gray': expandedRowIndex === index && staticRowsVisible
                              })}
                            >
                              <td className="2xl:pl-[11px] pl-2 w-[0px] pr-2 2xl:pr-4 text-center">
                                {/* badge */}
                                <span
                                  className={classNames(
                                    'text-center rounded-[10px] 2xl:text-lg text-sm p-1 xl:p-[10px] block xl:w-[74px]',
                                    {
                                      'bg-pale-yellow': index === 2,
                                      'bg-light-blue': index === 3 || index === 4 || index === 5,
                                      'bg-light-purple': index === 6,
                                      'bg-light-green':
                                        index !== 2 && index !== 3 && index !== 4 && index !== 5 && index !== 6
                                    }
                                  )}
                                >
                                  {item.ratio}%
                                </span>
                              </td>
                              <td className={`py-3 pr-2 xl:w-[362px]`}>
                                {/* prod detail */}
                                <div className="flex flex-col space-y-1 xl:space-y-4">
                                  {/* prod name */}
                                  <span className="text-sm 2xl:text-lg font-semibold text-dark-grey !leading-[19px]">
                                    {item.name}
                                  </span>
                                  {/* detail */}
                                  <div className="flex items-center gap-[23px]">
                                    {/* seriol no */}
                                    <div className="flex items-center gap-1">
                                      <span className="text-xs whitespace-nowrap font-medium text-grey">序號:</span>
                                      <span className="text-sm font-medium text-grey">{item.serial_number}</span>
                                    </div>
                                    {/* location */}
                                    <div className="flex items-center gap-1">
                                      <span className="text-xs font-medium text-grey">
                                        <img
                                          src="/images/sales/location-marker.png"
                                          width={10}
                                          height={14}
                                          alt="location marker"
                                        />
                                      </span>
                                      <span className="text-sm whitespace-nowrap font-medium text-grey">
                                        {item.location}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-2 px-2 text-dark-grey font-medium text-sm 2xl:text-lg">
                                {item.vintage}
                              </td>
                              <td className="py-2 px-2 font-bold text-dark-grey text-sm 2xl:text-lg">
                                {item.quantity} <span className="!font-medium text-dark-grey">噸</span>
                              </td>
                              <td className="py-2 text-dark-grey text-sm 2xl:text-lg 2xl:w-[140px]">
                                <div className="w-full flex justify-center">
                                  <div className="w-[35px] 2xl:w-[45px] 2xl:h-[45px]">
                                    <Link to={`/certificate/${item.id}`}>
                                      <img
                                        src="/images/sales/file_icon.png"
                                        width={45}
                                        height={46}
                                        alt="file icon"
                                        className="w-[35px] 2xl:w-[45px] h-auto cursor-pointer"
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </td>
                              <td className="py-2 text-dark-grey text-center text-sm 2xl:text-lg 2xl:w-[140px]">
                                {index === 5 ? (
                                  <Button
                                    className="whitespace-nowrap rounded-[7px] text-base !bg-pale-yellow hover:!bg-transparent hover:!border hover:!border-pale-yellow hover:!text-pale-yellow w-auto 2xl:min-w-[74px] !p-[5px]  2xl:!p-[7px]"
                                    onClick={() => {
                                      setExpandedRowIndex((prevIndex) => (prevIndex === index ? null : index));
                                      setStaticRowsVisible((prevVisible) => !prevVisible);
                                    }}
                                  >
                                    {item.status}
                                  </Button>
                                ) : (
                                  <div className="w-full flex justify-center">
                                    <div className="w-[35px] 2xl:w-[45px] 2xl:h-[45px] group shadow flex items-center justify-center bg-white rounded-lg relative">
                                      <img
                                        src="/images/sales/settings_icon.png"
                                        width={45}
                                        height={46}
                                        alt="settings icon"
                                        className="group-hover:hidden cursor-pointer w-[35px] 2xl:w-[45px] h-auto"
                                      />
                                      <img
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
                              ''
                            ) : (
                              <tr className="bg-neutral-150">
                                <td colSpan={8} className="py-[6px]"></td>
                              </tr>
                            )}
                            {/* shelf information */}
                            {expandedRowIndex === index && staticRowsVisible && (
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
};

export default Sales;

const TABLE_HEAD = ['', '商品名稱', 'Vintage', '總數量', '碳權證書', '設定交易'];
