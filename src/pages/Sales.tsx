import classNames from 'classnames';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import StockItemBar from '@/components/StockItemBar';
import { StockItem, useStockListStore } from '@/store/stockList';
import { CarbonTag } from '@/type';
import { formatNumberByComma } from '@/util/helper';

import Button from '../components/Button';
import Navbar from '../components/Navbar';
import ProgressBarChart from '../components/ProgressBarChart';
import SalesAreaGraph from '../components/SalesAreaGraph';
import SalesConfirmationBox from '../components/SalesConfirmationBox';
import SalesLineChart from '../components/SalesLineChart';

const TABLE_HEAD = ['', '商品名稱', 'Vintage', '總數量', '碳權證書', '設定交易'];

enum SaleItemStatus {
  OnSale = '上架中'
}

const Sales = () => {
  const [stockItemDetailId, setStockItemDetailId] = useState<StockItem['id'] | null>(null);
  const [selectStockItem, setSelectStockItem] = useState<StockItem | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const stockList = useStockListStore((store) => store.stockList);
  const getStockList = useStockListStore((store) => store.getStockList);
  const getStockOrderList = useStockListStore((store) => store.getStockOrderList);

  useEffect(() => {
    getStockList();
  }, []);

  return (
    <div className="w-screen relative overflow-hidden bg-neutral-250">
      {/* navbar */}
      <Navbar className="fixed top-0 left-0 right-0 !bg-navy-blue h-[70px] z-[100]" />
      <main className="py-[30px] pl-2 xl:pl-4 2xl:pl-[30px] pr-2 xl:pr-4 2xl:pr-[25px] mt-[70px]">
        <div className="flex gap-2 2xl:gap-[33px]">
          {/* sidebar */}
          {selectStockItem ? (
            <div className="max-w-[618px] 2xl:min-w-[618px] xl:w-[500px] w-[390px]">
              {/* confirmation box */}
              <SalesConfirmationBox
                stockItem={selectStockItem}
                onClose={() => {
                  setSelectStockItem(null);
                }}
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
                    onChange={(e) => getStockList(e.target.value)}
                  />
                  <div className="pointer-events-none border border-r-0 border-t-0 border-b-0 border-l-light-grey py-2 absolute inset-y-1 right-0 flex items-center pl-2 pr-3">
                    <img src="/images/operation-record/search_icon.svg" width={20} height={20} alt="search" />
                  </div>
                </div>
              </div>
            </div>
            {/* sales table */}
            <div className="yellowScroll w-full h-[81vh] pr-2 xl:pr-[22px] overflow-auto overflow-x-hidden flex-1 max-h-[730px]">
              <div className="flow-root">
                <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
                    <table
                      className="min-w-full custom-table sales-table"
                      style={{
                        borderCollapse: stockItemDetailId === null ? 'collapse' : 'separate',
                        borderSpacing: stockItemDetailId === null ? '0 11px' : '0 0'
                      }}
                    >
                      <thead className="sticky z-10">
                        <tr className="!bg-neutral-250">
                          {TABLE_HEAD?.map((item, index) => (
                            <th
                              key={item}
                              className={classNames('text-left whitespace-nowrap pb-4', {
                                'pl-[11px] sr-only': index === 0,
                                'pr-2': index === 1,
                                'px-2': index !== 0 && index !== 1,
                                '!w-[40%]': index === 1
                              })}
                            >
                              <span
                                className={classNames(
                                  'text-sm flex items-center 2xl:text-lg font-normal text-grey cursor-pointer',
                                  {
                                    'justify-center': index === 4 || index === 5
                                    // increase first child width
                                  }
                                )}
                              >
                                {item}
                                {index !== 4 && index !== 5 && (
                                  <img
                                    src="/images/sales/filter_arrows.png"
                                    width={15}
                                    height={23}
                                    alt="filters arrows"
                                    className="min-w-[15px] h-auto"
                                  />
                                )}
                              </span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="">
                        {stockList?.map((stockItem, idx) => (
                          <Fragment key={stockItem.id}>
                            <tr
                              onClick={() => setActiveIndex(idx)}
                              className={classNames(
                                'bg-white sales-row h-auto hover:shadow-sales-row border-2 cursor-pointer',
                                {
                                  '!bg-light-gray': stockItemDetailId === stockItem.id,
                                  'border-bright-blue': idx === activeIndex,
                                  'border-white': idx !== activeIndex
                                }
                              )}
                            >
                              <td className="2xl:pl-[11px] pl-2 w-[0px] pr-2 2xl:pr-4 text-center">
                                {/* badge */}
                                <span
                                  className={classNames(
                                    'text-center text-white rounded-[10px] 2xl:text-lg text-sm p-1 xl:p-[10px] block xl:w-[74px]',
                                    {
                                      'bg-pale-yellow': stockItem.carbon_tag === CarbonTag.Yellow,
                                      'bg-light-blue': stockItem.carbon_tag === CarbonTag.Blue,
                                      'bg-light-green': stockItem.carbon_tag === CarbonTag.Green
                                    }
                                  )}
                                >
                                  {stockItem.ratio}%
                                </span>
                              </td>
                              <td className={`py-3 pr-2 xl:w-[362px]`}>
                                {/* prod detail */}
                                <div className="flex flex-col space-y-1 xl:space-y-4">
                                  {/* prod name */}
                                  <span className="text-sm 2xl:text-lg font-semibold text-dark-grey !leading-[19px]">
                                    {stockItem.name}
                                  </span>
                                  {/* detail */}
                                  <div className="flex items-center gap-[23px]">
                                    {/* seriol no */}
                                    <div className="flex items-center gap-1">
                                      <span className="text-xs whitespace-nowrap font-medium text-grey">序號:</span>
                                      <span className="text-sm font-medium text-grey">{stockItem.serial_number}</span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-2 px-2 text-dark-grey font-medium text-sm 2xl:text-lg">
                                {stockItem.vintage}
                              </td>
                              <td className="py-2 px-2 font-bold text-dark-grey text-sm 2xl:text-lg">
                                {formatNumberByComma(stockItem.quantity || '')}
                                <span className="!font-medium text-dark-grey">噸</span>
                              </td>
                              <td className="py-2 text-dark-grey text-sm 2xl:text-lg 2xl:w-[140px]">
                                <div className="w-full flex justify-center">
                                  <div className="w-[35px] 2xl:w-[45px] 2xl:h-[45px]">
                                    <Link to={`/certificate/${stockItem.carbon_credit}`}>
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
                                {stockItem.status === SaleItemStatus.OnSale ? (
                                  <Button
                                    className="whitespace-nowrap rounded-[7px] text-base !bg-pale-yellow hover:!bg-transparent hover:!border hover:!border-pale-yellow hover:!text-pale-yellow w-auto 2xl:min-w-[74px] !p-[5px]  2xl:!p-[7px]"
                                    onClick={async () => {
                                      if (stockItem.orderList.length === 0) {
                                        const isSuccess = await getStockOrderList(stockItem.carbon_credit);
                                        if (!isSuccess) return;
                                      }
                                      setStockItemDetailId((id) => (id === stockItem.id ? null : stockItem.id));
                                    }}
                                  >
                                    {stockItem.status}
                                  </Button>
                                ) : (
                                  <div className="w-full flex justify-center">
                                    <div className="w-[35px] 2xl:w-[45px] 2xl:h-[45px] group shadow flex items-center justify-center bg-white rounded-lg relative">
                                      {selectStockItem?.id === stockItem.id ? (
                                        <img
                                          src="/images/sales/settings_icon_white.png"
                                          width={45}
                                          height={46}
                                          alt="settings icon"
                                          className="cursor-pointer w-[35px] 2xl:w-[45px] h-auto"
                                          onClick={() => {
                                            setSelectStockItem(null);
                                          }}
                                        />
                                      ) : (
                                        <img
                                          src="/images/sales/settings_icon.png"
                                          width={45}
                                          height={46}
                                          alt="settings icon"
                                          className="cursor-pointer w-[35px] 2xl:w-[45px] h-auto"
                                          onClick={() => {
                                            setSelectStockItem(stockItem);
                                          }}
                                        />
                                      )}
                                    </div>
                                  </div>
                                )}
                              </td>
                            </tr>
                            {stockItem.id !== stockItemDetailId && (
                              <tr className="bg-neutral-150">
                                <td colSpan={8} className="py-[6px]"></td>
                              </tr>
                            )}

                            {/* shelf information */}
                            {stockItem.id === stockItemDetailId && (
                              <>
                                {stockItem.orderList.map((order, index) => (
                                  <StockItemBar key={order.id} order={order} number={index + 1} />
                                ))}

                                <tr className="bg-light-gray dropdown-row h-[70px]">
                                  <td colSpan={6} className="dropdown-td px-3">
                                    <div className="flex justify-center items-center space-x-3 xl:space-x-5 2xl:space-x-8 w-full bg-[#f2f4f5] rounded-[10px] h-[73px] 2xl:pl-10 2xl:pr-13 pl-5 pr-6">
                                      <Button
                                        onClick={() => setSelectStockItem(stockItem)}
                                        className="rounded-[10px] font-bold min-w-[172px] h-9 flex items-center justify-center min-w-40 !bg-pale-yellow shadow-stoptrading-btn xl:text-base text-sm !text-navy-blue whitespace-nowrap px-3"
                                      >
                                        <span className="xl:text-xl text-base"> +</span> 新增上架商品
                                      </Button>
                                    </div>
                                  </td>
                                </tr>
                              </>
                            )}
                          </Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <Link
              className="rounded-md bg-white-smoke text-navy-blue font-bold shadow-download-btn text-[15px] mt-5 px-10 self-end flex gap-2.5 items-center max-w-[160px] h-[22px] ml-auto mr-8 mb-7"
              to="/pdf/Membership_Terms_Service.pdf"
              target="_blank"
              download="土星_平台條款內容"
            >
              Download
              <img src="/v2/icon/download-icon.svg" alt="" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sales;
