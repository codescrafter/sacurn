import classNames from 'classnames';
import { Fragment, useState } from 'react';

import { TableBodyItem } from '@/types';
import { formatNumberByComma } from '@/util/helper';

interface IProps {
  name: string;
  tableHeadings: string[];
  tableBody: TableBodyItem[];
}

const CustomTable = ({ tableHeadings, tableBody, name }: IProps) => {
  const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(null);
  const [staticRowsVisible, setStaticRowsVisible] = useState<boolean>(false);

  return (
    <div className="flow-root">
      <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
          <table
            className="min-w-full custom-table"
            style={
              staticRowsVisible
                ? {
                    borderCollapse: 'collapse',
                    borderSpacing: '0 17px'
                  }
                : { borderCollapse: 'separate', borderSpacing: '0 0' }
            }
          >
            <thead className="sticky -top-1 z-10">
              <tr className="!bg-neutral-150">
                {tableHeadings.map((item, index) => (
                  <th
                    scope="col"
                    className={classNames(
                      'pb-3 pt-1 text-left whitespace-nowrap text-base xl:text-lg font-normal text-grey',
                      {
                        'pl-2 2xl:pl-[33px]': index === 0,
                        'px-2 2xl:px-8': index !== 0,
                        '!text-right pr-8': item === '單價' || item === '數量(噸)',
                        'text-center': item === '總金額'
                      }
                    )}
                    key={item}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableBody.map((item, index) => (
                <Fragment key={item.id}>
                  <tr className="bg-white row group h-[95px]">
                    <td
                      className={classNames('py-3 pl-2 2xl:pl-[33px] pr-2 2xl:pr-4', {
                        'xl:w-48 w-36': name === 'historical_order',
                        'xl:w-40 xl:pr-10': name !== 'historical_order'
                      })}
                    >
                      <span
                        className={classNames('flex text-base 2xl:text-xl items-center w-24', {
                          'text-black font-medium': name === 'historical_order',
                          'text-dark-grey': name !== 'historical_order'
                        })}
                      >
                        {('time' in item && item.time) || ('orderNumber' in item && item.orderNumber)}
                        {name === 'historical_order' && (
                          <img
                            src="/images/historical-order/yellow-chervon.png"
                            width={20}
                            height={8}
                            alt="Cherven Icon"
                            className={classNames('ml-2 w-3 h-3 cursor-pointer hidden group-hover:block', {
                              'transform -rotate-90 !block': expandedRowIndex === index
                            })}
                            onClick={() => {
                              setStaticRowsVisible(false);
                              setExpandedRowIndex((prevIndex: number | null) => (prevIndex === index ? null : index));
                              setStaticRowsVisible((prevVisible) => !prevVisible);
                            }}
                          />
                        )}
                      </span>
                    </td>
                    <td
                      className={classNames('py-3 px-2 2xl:px-8 text-base 2xl:text-xl w-72 2xl:w-96 relative', {
                        'text-black font-medium': name === 'historical_order',
                        'text-dark-grey': name !== 'historical_order'
                      })}
                    >
                      {item.prodName}
                    </td>
                    <td
                      className={classNames('py-3 px-2 2xl:px-8 text-base 2xl:text-xl', {
                        '!text-dark-grey': name === 'operation_page',
                        'text-light-red': name === 'historical_order' && (index === 2 || index === 3),
                        'text-light-green': name === 'historical_order' && index !== 2 && index !== 3
                      })}
                    >
                      {('operator' in item && item.operator) || ('buysell' in item && item.buysell)}
                    </td>
                    <td
                      className={classNames('py-3 px-2 2xl:px-8 pr-8 text-right text-base 2xl:text-xl', {
                        'text-black font-medium': name === 'historical_order',
                        'text-dark-grey': name !== 'historical_order'
                      })}
                    >
                      {'$'.concat(formatNumberByComma(item.unitPrice.slice(1)))}
                    </td>
                    <td
                      className={classNames('py-3 px-2 2xl:px-8 text-base 2xl:text-xl pr-8 text-right', {
                        'text-black font-medium': name === 'historical_order',
                        'text-dark-grey': name !== 'historical_order'
                      })}
                    >
                      {formatNumberByComma(item.quant)}
                    </td>
                    <td
                      className={classNames('py-3 px-2 2xl:px-8 text-base 2xl:text-xl text-center', {
                        'text-black font-medium': name === 'historical_order',
                        '': name !== 'historical_order'
                      })}
                    >
                      {'$'.concat(formatNumberByComma(item.lumpsum.slice(1)))}
                    </td>
                    <td
                      className={classNames(
                        'py-3 px-2 2xl:px-8 text-dark-grey whitespace-nowrap text-base 2xl:text-xl',
                        {
                          '!text-dark-grey': name === 'operation_page',
                          'text-light-red': name === 'historical_order' && (index === 2 || index === 3),
                          'text-light-green': name === 'historical_order' && index !== 2 && index !== 3
                        }
                      )}
                    >
                      {('action' in item && item.action) || ('orderStatus' in item && item.orderStatus)}
                    </td>
                    {name === 'operation_page' && (
                      <td className="py-3 px-2 2xl:px-8 whitespace-nowrap text-base 2xl:text-xl text-dark-grey">
                        {'remark' in item && item.remark}
                      </td>
                    )}
                  </tr>

                  {expandedRowIndex !== index && (
                    <tr className="bg-neutral-150">
                      <td colSpan={8} className="py-[9px]"></td>
                    </tr>
                  )}

                  {expandedRowIndex === index && staticRowsVisible && (
                    <tr className="bg-white dropdown-row  h-[95px]">
                      <td></td>
                      <td colSpan={7} className="px-4 dropdown-td xl:px-8">
                        {name === 'historical_order' && (
                          <div className="flex items-center gap-10 w-full">
                            {/* date */}
                            <div className="flex items-center">
                              <img
                                src="/images/historical-order/Ellipse.png"
                                width={20}
                                height={8}
                                alt="Ellipse"
                                className="mr-1 w-3 h-3"
                              />
                              <span className="text-grey text-xl font-normal">交易日期</span>
                              <span className="text-black font-medium text-xl ml-[10px]">2023/5/10</span>
                            </div>
                            {/* member id */}
                            <div className="flex items-center">
                              <img
                                src="/images/historical-order/Ellipse.png"
                                width={20}
                                height={8}
                                alt="Ellipse"
                                className="mr-1 w-3 h-3"
                              />
                              <span className="text-grey text-xl font-normal">會員代號</span>
                              <span className="text-black font-medium text-xl ml-[10px]">Mr12345678</span>
                            </div>
                            {/* transaction status */}
                            <div className="flex items-center">
                              <img
                                src="/images/historical-order/Ellipse.png"
                                width={20}
                                height={8}
                                alt="Ellipse"
                                className="mr-1 w-3 h-3"
                              />
                              <span className="text-grey text-xl font-normal">交易狀況</span>
                              <span className="text-black font-medium text-xl ml-[10px]">逾期未付款</span>
                            </div>
                          </div>
                        )}
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
  );
};

export default CustomTable;
