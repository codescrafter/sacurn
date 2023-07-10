import Image from "next/image";
import { Fragment, useState } from "react";

export default function CustomTable({ tableHeadings, tableBody, page }) {
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);
  const [staticRowsVisible, setStaticRowsVisible] = useState(false);

  return (
    <div className="flow-root">
      <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
          <table
            className="min-w-full custom-table"
            style={
              staticRowsVisible
                ? {
                    borderCollapse: "collapse",
                    borderSpacing: "0 17px",
                  }
                : { borderCollapse: "separate", borderSpacing: "0 0" }
            }
          >
            <thead className="sticky -top-2 z-10">
              <tr className="!bg-neutral-150">
                {tableHeadings.map((item, index) => (
                  <th
                    scope="col"
                    className={`pb-3 text-left text-base xl:text-lg font-normal text-grey ${
                      index === 0 ? "pl-[33px]" : "px-8"
                    }`}
                    key={index}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableBody.map((item, index) => (
                <Fragment key={item.id}>
                  <tr className={`bg-white row group h-[95px]`}>
                    <td
                      className={`py-3 pl-[33px] pr-4 ${
                        page === "historical_order"
                          ? "w-48"
                          : "xl:w-40 xl:pr-10"
                      } `}
                    >
                      <span className="flex text-dark-grey text-base xl:text-xl items-center">
                        {item.time || item.orderNumber}
                        {page === "historical_order" && (
                          <Image
                            src="/images/historical-order/yellow-chervon.png"
                            width={20}
                            height={8}
                            alt="Cherven Icon"
                            className={`ml-2 w-3 h-3 cursor-pointer hidden group-hover:block ${
                              expandedRowIndex === index
                                ? "transform rotate-180"
                                : ""
                            }`}
                            onClick={() => {
                              setExpandedRowIndex((prevIndex) =>
                                prevIndex === index ? null : index
                              );
                              setStaticRowsVisible(
                                (prevVisible) => !prevVisible
                              );
                            }}
                          />
                        )}
                      </span>
                    </td>
                    <td
                      className={`py-3 px-4 xl:px-8 text-dark-grey text-base xl:text-xl w-96 relative `}
                    >
                      {item.prodName}
                    </td>
                    <td
                      className={`py-3 px-4 xl:px-8 text-base xl:text-xl ${
                        page === "historical_order" &&
                        (index === 2 || index === 3)
                          ? "text-light-red"
                          : "text-light-green"
                      }`}
                    >
                      {item.operator || item.buysell}
                    </td>
                    <td className="py-3 px-4 xl:px-8 text-dark-grey text-base xl:text-xl">
                      {item.unitPrice}
                    </td>
                    <td className="py-3 px-4 xl:px-8 text-dark-grey text-base xl:text-xl">
                      {item.quant}
                    </td>
                    <td className="py-3 px-4 xl:px-8 text-dark-grey text-base xl:text-xl">
                      {item.lumpsum}
                    </td>
                    <td
                      className={`py-3 px-4 xl:px-8 text-dark-grey text-base xl:text-xl ${
                        page === "historical_order" &&
                        (index === 2 || index === 3)
                          ? "text-light-red"
                          : "text-light-green"
                      }`}
                    >
                      {item.action || item.orderStatus}
                    </td>
                    <td className="py-3 px-4 xl:px-8  text-dark-grey text-base xl:text-xl">
                      {item.remark}
                    </td>
                  </tr>

                  {expandedRowIndex === index ? (
                    ""
                  ) : (
                    <tr className="bg-neutral-150">
                      <td colSpan={8} className="py-[9px]"></td>
                    </tr>
                  )}

                  {expandedRowIndex === index && staticRowsVisible && (
                    <tr className="bg-white dropdown-row  h-[95px]">
                      <td></td>
                      <td colSpan={7} className="px-4 dropdown-td xl:px-8">
                        {page === "historical_order" && (
                          <div className="flex items-center gap-10 w-full">
                            {/* date */}
                            <div className="flex items-center">
                              <Image
                                src="/images/historical-order/Ellipse.png"
                                width={20}
                                height={8}
                                alt="Ellipse"
                                className="mr-1 w-3 h-3"
                              />
                              <span className="text-grey text-xl font-normal">
                                交易日期
                              </span>
                              <span className="text-black font-medium text-xl ml-[10px]">
                                2023/5/10
                              </span>
                            </div>
                            {/* member id */}
                            <div className="flex items-center">
                              <Image
                                src="/images/historical-order/Ellipse.png"
                                width={20}
                                height={8}
                                alt="Ellipse"
                                className="mr-1 w-3 h-3"
                              />
                              <span className="text-grey text-xl font-normal">
                                會員代號
                              </span>
                              <span className="text-black font-medium text-xl ml-[10px]">
                                Mr12345678
                              </span>
                            </div>
                            {/* transaction status */}
                            <div className="flex items-center">
                              <Image
                                src="/images/historical-order/Ellipse.png"
                                width={20}
                                height={8}
                                alt="Ellipse"
                                className="mr-1 w-3 h-3"
                              />
                              <span className="text-grey text-xl font-normal">
                                交易狀況
                              </span>
                              <span className="text-black font-medium text-xl ml-[10px]">
                                逾期未付款
                              </span>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
              <tr className="h-[95px] bg-white">
                <td colSpan={8} className="py-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
