import Image from "next/image";

export default function CustomTable({ theading, tableBody, page }) {
  return (
    <div className="flow-root">
      <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
          <table className="min-w-full custom-table">
            <thead>
              <tr>
                {theading.map((item, index) => (
                  <th
                    scope="col"
                    className={`pb-3 text-left text-base xl:text-lg font-normal text-grey ${
                      index === 0 ? "pl-[33px]" : "px-8"
                    }`}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableBody.map((item, index) => (
                <tr className="bg-white row group" key={item.id}>
                  <td
                    className={`py-6 pl-[33px] flex items-center pr-4 text-dark-grey text-base xl:text-xl ${
                      page === "historical_order" ? "w-36" : "xl:w-40 xl:pr-10"
                    } `}
                  >
                    {item.time || item.orderNumber}
                    {page === "historical_order" && (
                      <Image
                        src="/images/historical-order/yellow-chervon.png"
                        width={20}
                        height={8}
                        alt="Cherven Icon"
                        className="ml-2 w-3 h-3 hidden group-hover:block cursor-pointer"
                      />
                    )}
                  </td>
                  <td className="py-6 px-4 xl:px-8 text-dark-grey text-base xl:text-xl w-96 relative">
                    {item.prodName}
                  </td>
                  <td className="py-6 px-4 xl:px-8  text-dark-grey text-base xl:text-xl">
                    {item.operator || item.buysell}
                  </td>
                  <td className="py-6 px-4 xl:px-8 text-dark-grey text-base xl:text-xl">
                    {item.unitPrice}
                  </td>
                  <td className="py-6 px-4 xl:px-8 text-dark-grey text-base xl:text-xl">
                    {item.quant}
                  </td>
                  <td className="py-6 px-4 xl:px-8 text-dark-grey text-base xl:text-xl">
                    {item.lumpsum}
                  </td>
                  <td className="py-6 px-4 xl:px-8 text-dark-grey text-base xl:text-xl">
                    {item.action || item.orderStatus}
                  </td>
                  <td className="py-6 px-4 xl:px-8  text-dark-grey text-base xl:text-xl">
                    {item.remark}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
