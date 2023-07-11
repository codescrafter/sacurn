import { Fragment, useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import SalesLeftSide from "@/components/SalesLeftSide";
import ConfirmationAlert from "@/components/ConfirmationAlert";

function Sales() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  return (
    <div className="w-screen relative h-screen overflow-hidden bg-neutral-250">
      {/* confirmation modal */}
      {isAlert && <ConfirmationAlert setIsAlert={setIsAlert} />}
      {/* navbar */}
      <Navbar className={`relative z-30 !bg-navy-blue h-[70px]`} />
      <main className="py-7 px-3 xl:pl-[30px] xl:pr-[25px]">
        <div className="flex gap-3 xl:gap-[33px]">
          {/* graph area */}
          <div className="xl:w-[618px] w-[410px]">
            {showSidebar && <SalesLeftSide setIsAlert={setIsAlert} />}
          </div>
          {/* sales table */}
          <div
            className={`yellowScroll w-full h-[87vh] pr-4 xl:pr-[22px] overflow-auto overflow-x-hidden`}
          >
            <div className="flow-root">
              <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full custom-table sales-table">
                    <thead>
                      <tr>
                        {tableHeadings.map((item, index) => (
                          <th
                            key={item}
                            className={`text-left ${
                              index === 0
                                ? "pl-[11px] sr-only"
                                : index === 1
                                ? "pr-4"
                                : "px-4"
                            }`}
                          >
                            <span
                              className={`text-base flex items-center xl:text-lg font-normal text-grey cursor-pointer ${
                                (index === 4 || index === 5) && "justify-center"
                              }`}
                            >
                              {item}{" "}
                              <Image
                                src="/images/sales/filter_arrows.png"
                                width={15}
                                height={23}
                                alt="filters arrows"
                              />
                            </span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tableBody.map((item, index) => (
                        <Fragment key={item.id}>
                          <tr
                            className={`bg-white sales-row group h-auto hover:shadow-sales-row`}
                          >
                            <td className="xl:pl-[11px] pl-2 w-[0px] pr-4 text-center">
                              {/* badge */}
                              <span
                                className={`text-center rounded-[10px] p-1 xl:p-[10px] block xl:w-[74px] ${
                                  index === 2
                                    ? "bg-pale-yellow"
                                    : index === 3 || index === 4 || index === 5
                                    ? "bg-light-blue"
                                    : index === 6
                                    ? "bg-light-purple"
                                    : "bg-light-green"
                                }`}
                              >
                                {item.percent}
                              </span>
                            </td>
                            <td className={`py-2 pr-2 xl:pr-4 xl:w-[362px]`}>
                              {/* prod detail */}
                              <div className="flex flex-col space-y-4">
                                {/* prod name */}
                                <span className="text-base xl:text-lg text-dark-grey">
                                  {item.prodDetail.prodName}
                                </span>
                                {/* detail */}
                                <div className="flex items-center gap-[23px]">
                                  {/* seriol no */}
                                  <div className="flex items-center gap-1">
                                    <span className="text-xs font-medium text-grey">
                                      序號:
                                    </span>
                                    <span className="text-sm font-medium text-grey">
                                      {item.prodDetail.seriolNo}
                                    </span>
                                  </div>
                                  {/* location */}
                                  <div className="flex items-center gap-1">
                                    <span className="text-xs font-medium text-grey">
                                      <Image
                                        src="/images/sales/location-marker.png"
                                        width={10}
                                        height={14}
                                        alt="location marker"
                                      />
                                    </span>
                                    <span className="text-sm font-medium text-grey">
                                      {item.prodDetail.location}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td
                              className={`py-2 px-2 xl:px-4 text-dark-grey text-base xl:text-lg`}
                            >
                              {item.vintage}
                            </td>
                            <td
                              className={`py-2 px-2 xl:px-4 text-dark-grey text-base xl:text-lg`}
                            >
                              {item.totalAmount}
                            </td>
                            <td
                              className={`py-2 px-2 xl:px-4 text-dark-grey text-base xl:text-lg w-[140px]`}
                            >
                              <div className="w-full flex justify-center">
                                <div className="w-[45px] h-[45px]">
                                  <Image
                                    src={item.carbonCertificate}
                                    width={45}
                                    height={46}
                                    alt="file icon"
                                    className="w-[45px] h-auto"
                                  />
                                </div>
                              </div>
                            </td>
                            <td
                              className={`py-2 px-2 xl:px-4 text-dark-grey text-center text-base xl:text-lg w-[140px]`}
                            >
                              {index === 5 ? (
                                <span className="p-2 whitespace-nowrap rounded-lg text-base text-white bg-pale-yellow">
                                  {item.transaction}
                                </span>
                              ) : (
                                <div className="w-full flex justify-center">
                                  <div className="w-[45px] h-[45px] group shadow flex items-center justify-center bg-white rounded-lg">
                                    <Image
                                      src={item.transaction}
                                      width={45}
                                      height={46}
                                      alt="settings icon"
                                      className="group-hover:hidden cursor-pointer w-[45px] h-auto"
                                    />
                                    <Image
                                      src="/images/sales/settings_icon_white.png"
                                      width={45}
                                      height={46}
                                      alt="settings icon"
                                      className="hidden group-hover:block cursor-pointer"
                                      onClick={() =>
                                        setShowSidebar(!showSidebar)
                                      }
                                    />
                                  </div>
                                </div>
                              )}
                            </td>
                          </tr>
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Sales;

const tableHeadings = [
  "",
  "商品名稱",
  "Vintage",
  "總數量",
  "碳權證書",
  "設定交易",
];

const tableBody = [
  {
    id: 1,
    percent: "50%",
    prodDetail: {
      prodName: "Australian Carbon Credit Units",
      seriolNo: "fjgmvixkermy",
      location: "非洲",
    },
    vintage: "1991/10/30",
    totalAmount: "889 噸",
    carbonCertificate: "/images/sales/file_icon.png",
    transaction: "/images/sales/settings_icon.png",
  },
  {
    id: 2,
    percent: "11.2%",
    prodDetail: {
      prodName:
        "Andes Inorganic Soil ACR Emission Reduction Tonnes Spot ProductCarbon",
      seriolNo: "irdfgwxbmjug",
      location: "印度",
    },
    vintage: "1991/06/06",
    totalAmount: "100 噸",
    carbonCertificate: "/images/sales/file_icon.png",
    transaction: "/images/sales/settings_icon.png",
  },
  {
    id: 3,
    percent: "20.4%",
    prodDetail: {
      prodName: "Global Emissions Offset Standard Spot Product",
      seriolNo: "poudhrfxjufn",
      location: "印度",
    },
    vintage: "1991/06/06",
    totalAmount: "3 噸",
    carbonCertificate: "/images/sales/file_icon.png",
    transaction: "/images/sales/settings_icon.png",
  },
  {
    id: 4,
    percent: "9%",
    prodDetail: {
      prodName: "Core Global Emissions Offset Trailing Spot Product",
      seriolNo: "owieudmakqlw",
      location: "印度",
    },
    vintage: "1991/10/30",
    totalAmount: "23 噸",
    carbonCertificate: "/images/sales/file_icon.png",
    transaction: "/images/sales/settings_icon.png",
  },
  {
    id: 5,
    percent: "5%",
    prodDetail: {
      prodName:
        "Nature-Based Global Emissions Offset Trailing Standard Spot Product Standard Spot Product",
      seriolNo: "lodismokeadw",
      location: "非洲",
    },
    vintage: "1991/10/30",
    totalAmount: "89 噸",
    carbonCertificate: "/images/sales/file_icon.png",
    transaction: "/images/sales/settings_icon.png",
  },
  {
    id: 6,
    percent: "1.3%",
    prodDetail: {
      prodName: "VCS Verified Carbon Units Spot Product",
      seriolNo: "lekgmazoeldq",
      location: "俄羅斯",
    },
    vintage: "1991/07/01",
    totalAmount: "800 噸",
    carbonCertificate: "/images/sales/file_icon.png",
    transaction: "上架中",
  },
  {
    id: 7,
    percent: "3.1%",
    prodDetail: {
      prodName: "ACR Emission Reduction Tonnes Spot Product",
      seriolNo: "irjgldemasil",
      location: "台灣",
    },
    vintage: "1991/10/30",
    totalAmount: "12 噸",
    carbonCertificate: "/images/sales/file_icon.png",
    transaction: "/images/sales/settings_icon.png",
  },
];
